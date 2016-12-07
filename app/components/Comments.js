import React from "react";

const Comments = ({postComments,postId,addComment,removeComment})=>{
    const renderComment = (comment,i)=>(
        <div className="comment" key={i}>
            <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button onClick={removeComment.bind(null,postId,i)} className="remove-comment">&times;</button>
            </p>
        </div>
    );
    const handleSubmit = (e)=>{
        e.preventDefault();
        const author = e.target["user"].value;
        const comment = e.target["comment"].value;
        addComment(postId,author,comment);
        e.target.reset();
    }
    return (
        <div className="comments">
            {postComments.map((comment,i)=>renderComment(comment,i))}
            <form className="comment-form" onSubmit={handleSubmit}>
                <input type="text" name="user" placeholder="Enter author name" />
                <input type="text" name="comment" placeholder="Enter comment text" />
                <input type="submit" hidden value="OK"/>
            </form>
        </div>
    )
}

export default Comments;