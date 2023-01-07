import React from 'react'
import { useState,useEffect } from 'react';

const SportForm = () => {
    const [sport, setSport] = useState(null);
    
    useEffect(() => {
        loadInfo();
        return () => {
       }
      }, [])

    async function loadInfo(sport= "london") {
        try {
          const requestsport = await fetch(
            `${process.env.REACT_APP_URL2}&key=${process.env.REACT_APP_KEY}&q=${sport}`
          );
          const jsonSport = await requestsport.json();
          setSport(jsonSport);
          console.log(jsonSport);
        } catch (error) {}
      }

    function onChangeSportcity(e) {
        const value = e.target.value;
        if(value !== ''){
        setSport(null);
        loadInfo(sport);
        }
      }

    function handleSubmit (e){
    e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" onChangeSportcity={onChangeSportcity} />
    </form>
  )
}

export default SportForm