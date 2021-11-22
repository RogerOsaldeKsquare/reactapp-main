import { useState, useEffect } from 'react';
import {Card} from 'semantic-ui-react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

  
const PostView = () => {
    const [post, setPost] = useState({0:''});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    let { id } = useParams();
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function fetchPost () {
          let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          let data = await res.json();
          setPost(data);
          setStatus(res.status);
          setLoading(false);
        }
        setLoading(true);
        fetchPost();
      }, [id])

    return (
        <>
            <Card>
            <Card.Content>
                <Card.Header>{post.title}</Card.Header>
                <Card.Description>
                    <strong>User ID</strong>
                    <p>{post.userId}</p>
                    <strong>Post ID</strong>
                    <p>{post.id}</p>
                    <strong>Body</strong>
                    <p>{post.body}</p>
                </Card.Description>
            </Card.Content>
            </Card>
        <button onClick={()=> navigate('/posts')}>Return</button>
        </>
    );
};
  
  export default PostView;
  