import React, {useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import Post from './components/Post';
import ErrorPage from './components/ErrorPage'
import  Pagination  from './components/Pagination';
import  Login  from './components/Login';


function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(()=>{
    async function fetchPost(){
      let res = await fetch('https://jsonplaceholder.typicode.com/todos');
      let data = await res.json();
      setPost(data);
      setLoading(false);
    }

      fetchPost();

  }, [])
  console.log('post', post);

  return (
      <Router>
        <Navbar />
          <Container>
            {loading ? (
              <Dimmer active inverted>
                  <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
              <Routes>
              <Route element={<Home />} exact path='/'></Route>
              <Route element={<Login/>} exact path='/login'></Route>
              <Route element={<Pagination/>} exact path='/pagination'></Route>
              <Route element={<ErrorPage />} exact path='*'></Route>
              </Routes>
            ) }
          </Container>
      </Router>
  );
}

export default App;

