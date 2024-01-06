import React, { useEffect, useState } from 'react'
import List from './List'
import axios from 'axios'
import url from '../../../api'

export default function PopularItems() {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(true)
    const [itemList, setItemList] = useState([])
    const [totalCount, setTotalCount] = useState([])
    const getPopularItems = () => {
        console.log('called')
        axios.get(`${url}/Item?page=${page}&pageSize=${pageSize}`).then(res=>{
            console.log(res)
            setItemList(res.data.Items)
            setTotalCount(res.data.TotalCount);
            setLoading(false);
        }).catch(err=>{
            setItemList(null)
            setLoading(false)
            console.log('err: ',err)
        })
    }
    useEffect(()=>{
        getPopularItems()
    },[])
  return (
      <div>
          {itemList === null && <h1>Failed to load</h1>}
          {itemList !== null && (
              <List title="Popular" isLoading={loading} data={itemList} />
          )}
      </div>
  );
}
