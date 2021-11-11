import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const Search = () => {
    const history = useHistory();
    const [allCategories, setAllCategories] = useState([])
    const [formInfo, setFormInfo] = useState({
        category : "people",
        id : ""
    })

    
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(response =>{
                console.log(response.data)
                let result = Object.keys(response.data)
                setAllCategories(result)
            })
            .catch(err=>console.log(err))
    }, [])

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        history.push(`/${formInfo.category}/${formInfo.id}`)
    }
    


    return (
        <div>
            <br />
            <div className="container">
                <form onSubmit={submitHandler} className="form-group d-flex">
                    <label htmlFor="category">Category: </label>
                    <select onChange={changeHandler} className="form-control" name="category" id="">
                        {
                            allCategories.map((category, i)=>{
                                return (
                                    <option key={i} value={ category }>{ category }</option>
                                )
                            })
                        }
                    </select>
                    <label htmlFor="id">ID: </label>
                    <input onChange={changeHandler} className="form-control" type="number" name="id" id="" />
                <input type="submit" value="Search" className="btn btn-info"/>
                </form>
            </div>
            <br />
        </div>
    );
};



export default Search;