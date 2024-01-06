import React, { useEffect, useState } from 'react'
import List from './List'
import axios from 'axios'
import url from '../../../api'

export default function Recommended() {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [loading, setLoading] = useState(true)
    const [itemList, setItemList] = useState([])
    const [totalCount, setTotalCount] = useState([])
    const getRecommended = () => {
        console.log('called')
        axios.get(`${url}/Item?page=${page}&pageSize=${pageSize}`).then(res=>{
            console.log(res)
            setItemList(res.data.Items)
            setTotalCount(res.data.TotalCount)
            setLoading(false)
        }).catch(err=>{
            setItemList(null)
            setLoading(false)
            console.log('err: ',err)
        })
    }
    useEffect(()=>{
        getRecommended()
    },[])
  return (
      <div className="my-5">
          {itemList === null && (
              <div className="text-center my-3 bg-primary/20 py-10">
                  <h1 className="text-slate-600 text-xl">Failed to load</h1>
              </div>
          )}
          {itemList !== null && (
              <List title="Recommended" isLoading={loading} data={itemList} />
          )}
      </div>
  );
}
