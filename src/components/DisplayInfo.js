import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';



const DisplayInfo = () => {
    const {category} = useParams();
    const {id} = useParams();
    const [info, setInfo] = useState({})

    useEffect(()=> {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response =>{
                console.log(response)
                setInfo(response.data)
            })
            .catch(err=>{
                console.log(err)
                setInfo({error: "These aren't the droids you're looking for"})
            })
    }, [category, id])


    return (
        info.error?
        <div>
            <h2> {info.error} </h2>
            <img src="https://blogs-images.forbes.com/erikkain/files/2017/08/obi-wan.jpg" alt="Obi-Wan Kenobi" />
        </div>

        :<div className="container">
            {
            category === 'people'?
            <> 
                <h2>Name: {info.name}</h2>
                <p>Birth Year: {info.birth_year}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
            </>
            :category ==='planets'?
            <>
                <h2>Name: {info.name}</h2>
                <p>Climate: {info.climate}</p>
                <p>Terrain: {info.terrain} </p>
                <p>Population: {info.population} </p>
            </>
            :category ==='films'?
            <>
                <h2>Title: {info.title}</h2>
                <p>Release: {info.release_date}</p>
            </>
            :<h2>Other</h2>
            
        }

        </div>
    );
};



export default DisplayInfo;