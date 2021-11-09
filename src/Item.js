import React from 'react';
import { Link , useParams , useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect , useState } from 'react';

const Item = () => {
    const [post , setPost] = useState([]);
    const params = useParams();
    const history = useHistory();
    console.log(params)

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
            .then((res)=>{
                setPost(res.data);
            })
    }, []);

    function goBack(){
        // history.goBack();
        history.push('/')
    }


    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <img src={post.url} width='200px' />
            <button onClick={goBack}>Back</button>
        </div>
    );
}

export default Item;
