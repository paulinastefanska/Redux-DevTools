import React from "react";
import Comment from "./CommentContainer";
import "./CommentList.css";

const CommentList = ({ comments }) => <ul className="CommentList">{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>;

export default CommentList;