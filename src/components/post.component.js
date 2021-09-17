import { React } from 'react';
import Typography from '@material-ui/core/Typography';
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
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Post = ({ posts, users }) => {
    return (
        <>
            <Card id="card" spacing={2} sx={{ maxWidth: 345 }}>
                <CardHeader id="username"
                    avatar={
                        <Link to={"/users/" + posts.userId}>
                            <Avatar id="profile" sx={{ bgcolor: red[500] }} aria-label="recipe">
                            </Avatar>
                        </Link>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={users[posts.userId - 1].username}
                />
                <CardContent>
                    <Typography className="title" variant="body2" color="textSecondary">
                        {posts.title}
                    </Typography><br />
                    <Typography variant="body2" color="textSecondary">
                        {posts.body}
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

export default Post;