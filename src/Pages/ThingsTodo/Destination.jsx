import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DestinationCard from './DestinationCard';
import Navbar from '../../Components/Navbar';

export const Destination = () => {
  const [places,setPlaces] = useState([])
  const [searchParams] = useSearchParams()
 
  let place = searchParams.get("place")

  useEffect(()=>{
    axios.get(`http://localhost:8080/Things_todo?place=${place}`).then((response) => {
        setPlaces(response.data)
     console.log(response.data)
    });
  },[])
 
 
  return (

    
      <>
      <Navbar/>
      {places.map((el)=>(
      <DestinationCard key={el.id} image={el.image} title={el.title} price={el.price} rating={el.rating} place={el.place}/>
    ))}
      </>
      
  )
}
