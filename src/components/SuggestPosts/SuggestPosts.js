import React from 'react';
import SuggestPost from './SuggestPost/SuggestPost';
import classes from './SuggestPosts.module.css';

function SuggestPosts(props) {
    const posts = props.data.map((cur,index)=><SuggestPost 
        key={cur.id}
        pic={cur.pic}
        content={cur.content}
        tag={cur.tag}
        />)
    return (
        <div className={classes.SuggestPosts}>
            <p className={classes.Title}>Tóm tắt thời trang liên quan</p>
            {posts}
        </div>
    );
}

export default SuggestPosts;