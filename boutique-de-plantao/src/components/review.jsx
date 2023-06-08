import React from "react";
import {AiFillStar} from 'react-icons/ai';
import "../styles/components/review.css";

function Review(props) {
    const stars = [];
    for (let i = 0; i < props.star; i++) {
        stars.push(<AiFillStar />);
    }

    return (
        <div id="review">
            <p>{stars}</p>
            <p>{props.comenter}</p>
        </div>
    );
}

export default Review