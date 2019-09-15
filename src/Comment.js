import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
    <li className="Comment">
        {text} 
        <div className="Votes">Votes: {votes}</div>
        <div className="Buttons">
            <button onClick={() => thumbUpComment(id)}>+</button>
            <button onClick={() => thumbDownComment(id)}>-</button>
            <button onClick={() => removeComment(id)}>x</button>
        </div>
    </li>

export default Comment;