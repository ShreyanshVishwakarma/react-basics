import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ noOfStars }) {
    const [rating, setRating] = useState(-1);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRating(index);
    }

    return (
        <div className="flex justify-center items-center">
            {
                [...Array(noOfStars)].map((_, index) => {
                    return <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`${(rating >= index)||(hover >= index) ? "text-yellow-400" : ""}`}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(0)}
                        size={40}
                    />
                })
            }
        </div>
    );
}