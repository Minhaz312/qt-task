import React, { useEffect, useState } from 'react'
import List from './List'
import axios from 'axios'
import url from '../../../api'
import { useDispatch, useSelector } from "react-redux";
import { addItemList } from "../../../datastore/features/primaryItems";

export default function PopularItems() {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState([]);

    const {
        isLoading,
        isError,
        data: itemList,
    } = useSelector((state) => state.primaryItemsSlice);

    const getPopularItems = () => {
        console.log("called");
        axios
            .get(`${url}/Item?page=${page}&pageSize=${pageSize}`)
            .then((res) => {
                console.log(res);
                dispatch(addItemList(res.data.Items));
            })
            .catch((err) => {
                dispatch(addItemList(null));
            });
    };
    useEffect(() => {
        getPopularItems();
    }, []);
    return (
        <div>
            {isError === true && (
                <div className="text-center my-3 bg-primary/20 py-10">
                    <h1 className="text-slate-600 text-xl">Failed to load</h1>
                </div>
            )}
            {isError === false && (
                <List title="Popular" isLoading={isLoading} data={itemList} />
            )}
        </div>
    );
}
