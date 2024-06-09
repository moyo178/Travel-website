import  { useState } from 'react';
import './App'; // Import your CSS file
import heartSvg from './image/heart.svg'; 
import heartDefaultSvg from './image/black.svg';
import Notification from './Notification';


const HeartIcon = () => {
    const [liked, setLiked] = useState(false);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const toggleLike = () => {
        const newLikedState = !liked;
        setLiked(newLikedState);
        setToastMessage(newLikedState ? 'Added to favorites' : 'Removed from favorites');
        setToastVisible(true);

        // Hide the toast after 2 seconds if no undo is clicked
        setTimeout(() => {
            setToastVisible(false);
        }, 2000);
    };

    const handleUndo = () => {
        setLiked(!liked);
        setToastMessage(liked ? 'Removed from favorites' : 'Added to favorites');
        setToastVisible(false);
    };

    return (
        <div>
            <img
                className={`love-button ${liked ? 'liked' : ''}`}
                src={liked ? heartDefaultSvg : heartSvg}
                alt="Heart"
                onClick={toggleLike}
            />
            <Notification message={toastMessage} visible={toastVisible} onUndo={handleUndo} />
        </div>
    );
};

export default HeartIcon;


