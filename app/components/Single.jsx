import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = ({params,posts,comments,increment,addComment,removeComment}) => {
        const postIndex = posts.findIndex((post)=>post.code===params.postId);
        const post = posts[postIndex];
        const postComments = comments[post.code] || [];
        return (
            <div className="single-photo">
                <Photo post={post} increaseLikes={increment} comments={comments} index={postIndex} key={postIndex}></Photo>
                <Comments postComments={postComments} postId={post.code} removeComment={removeComment} addComment={addComment}></Comments>
            </div>
        )
}

export default Single;
