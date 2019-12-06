import React, { useState, createContext } from 'react';
import Axios from 'axios';

export const LeaguesContext = createContext();

export const LeaguesProvider = props => {
    const data = Axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    .then((res) => {
        console.log(res);
        
    })

    const [leagues, setMovies] = useState([{
        response: res
    }]);
    return (
        <LeaguesContext.Provider value=([])
    )
}