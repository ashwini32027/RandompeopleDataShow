import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProfileCard from './Card/ProfileCard'
const App = () => {
  const[data,setdata]=useState(null)
  const getdata = async ()=>{
  const response = await axios.get('https://randomuser.me/api/')
  setdata(response.data.results[0])  //ek user lege abhi
  }
 
    const nam = data ? `${data.name.first} ${data.name.last}` : '';


  return (
    
    <div className="container">
      {
data&&(<ProfileCard name={nam} img={data.picture.medium} mail={data.email} country={data.location.country}/>
)
      }
      <button onClick={getdata}>Change user</button>
    </div>

    
  )
}

export default App
