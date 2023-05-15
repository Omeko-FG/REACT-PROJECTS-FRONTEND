import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import SearchComp from '../components/SearchComp'
import axios from 'axios'
import { useAppDispatch } from '../app/hooks'
import { fetchFail, getSuccesProduct } from '../features/productsSlice'
import { EventFunc, Products } from "../models/models";



const Home = () => {
  const [search, setsearch] = useState("")
  const dispatch = useAppDispatch();
  
  const getData = async ()=>{

  try {
  const {data} = await axios.get<Products>(`fetch(https://dummyjson.com/products/search?q=${search}`
  );
  console.log(data.products)
  dispatch(getSuccesProduct(data.products));
  
} catch (error) {
  console.log(error)
  dispatch(fetchFail())
}
}

  useEffect(() => {
    getData();
  }, [search])
  
//  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
//   setsearch(e.target.value)
//  }

const handleChange:EventFunc = (e)=>{
  setsearch(e.target.value)

}

  return (
    <>
    <Navbar/>
    <SearchComp handleChange={handleChange}/>
    </>
  )
}

export default Home