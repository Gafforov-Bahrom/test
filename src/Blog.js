import React , { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory , useParams} from 'react-router-dom'

const Blog = () => {
    const [posts , setPosts] = useState([]);
    const history = useHistory();
    const params = useParams();
    console.log(params)
    // console.log(history);
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
            setPosts(res.data);
        })
    }, []);

    function goPage(){
        history.push('/1')
    }
    
    

    return (
        <div>
            <button onClick={goPage}>1-page</button>
        </div>
    );
}

export default Blog;
