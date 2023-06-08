import React from "react";
import {AiFillStar} from 'react-icons/ai';
import "../styles/components/review.css";

function Review(props) {
    const stars = [];
    for (let i = 0; i < props.nota; i++) {
        stars.push(<AiFillStar />);
    }

    return (
        <div id="review">
            <p>{stars}</p>
            <p>{props.comentario}</p>
        </div>
    );
}

export default Review