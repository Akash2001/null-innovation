import { React, useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Post from './post.component';
import ReactDOM from 'react-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([{ username: "Username" }]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const data = response.data;
                setUsers(data);
            }).catch(err => {
                throw err;
            });
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const data = response.data;
                setPosts(data);
                setIsLoading(false);
            }).catch(err => {
                ReactDOM.render(<h2><center>Something went wrong!</center></h2>,document.getElementById('posts'));
                throw err;

            });
    }, []);

    if (isLoading === true) {
        return (
            <h2><center>Loading...</center></h2>
        );
    } else {
        return (
            <>
                <Container id="posts" sx={{ my: 15 }}>
                    <Grid container spacing={2}>
                        {posts.slice(0, 10).map((posts, index) => { return (<Grid container item justifyContent="center" xs={12} lg={4} md={6} key={index}><Post id={index} posts={posts} users={users} /></Grid>) })}
                    </Grid>
                </Container>
            </>
        );
    }

}

export default Home;