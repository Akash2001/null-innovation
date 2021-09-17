import { React, useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import ReactDOM from 'react-dom';

const User = () => {
    const [user, setUser] = useState([{ username: "Username", email: "email", name: "name", address: {street: "street", suite: "suite", city: "city"}, phone: "1-770-736-8031 x56442", website: "hildegard.org", company : {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"} }]);
    let { id } = useParams();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/?id='+id)
            .then(response => {
                const data = response.data;
                setUser(data);
            }).catch(err => {
                ReactDOM.render(<h2><center>Something went wrong!</center></h2>,document.getElementById('posts'));
                throw err;
            });
    }, [id]);

    return (
        <>
            <Card id="user" spacing={2} sx={{ maxWidth: 345 }}>
                <CardHeader id="username"
                    avatar={
                            <Avatar id="profile" sx={{ bgcolor: red[500] }} aria-label="recipe">
                            </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={user[0].username}
                    subheader={user[0].email}
                />
                <CardContent>
                    <Typography className="title" variant="body2" color="textSecondary">
                        {"Name : "+user[0].name}
                    </Typography><br />
                    <Typography variant="body2" color="textSecondary">
                        {"Address : "+user[0].address.street+", "+user[0].address.suite+", "+user[0].address.city}<br/>
                        {"Phone : "+user[0].phone}<br/>
                        {"Website : "+user[0].website}<br/><br/>
                        {"Company : "}<br/>
                        {"Name : "+user[0].company.name}<br/>
                        {"CatchPharses : "+user[0].company.catchPhrase}<br/>
                        {"BS : "+user[0].company.bs}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
}

export default User;