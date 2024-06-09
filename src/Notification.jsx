/* eslint-disable react/prop-types */
import './App';

const Toast = ({ message, visible, onUndo }) => {
    return (
        visible ? (
            <div className="toast">
                <span>{message}</span>
                <button className="undo-button" onClick={onUndo}>Undo</button>
            </div>
        ) : null
    );
};

export default Toast;



