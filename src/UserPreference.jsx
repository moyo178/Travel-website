import { useState } from 'react';
import './App';

// eslint-disable-next-line react/prop-types
const UserPreferences = ({ onUpdatePreferences }) => {
    const [preferences, setPreferences] = useState({
      culture: false,
      nature: false,
      nightlife: false,
      adventure: false,
    });
  
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        [name]: checked,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onUpdatePreferences(preferences);
    };
  
    return (
      <div className="user-preferences">
        <h2>What are you interested in?</h2>
        <form onSubmit={handleSubmit}>
          <div className="checkbox-group">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="culture"
                checked={preferences.culture}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              Culture
            </label>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="nature"
                checked={preferences.nature}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              Nature
            </label>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="nightlife"
                checked={preferences.nightlife}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              Nightlife
            </label> 
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="adventure"
                checked={preferences.adventure}
                onChange={handleCheckboxChange}
                className='adventure'
              />
              <span className="checkmark"></span>
              Adventure
            </label>
               </div>   
          <button type="submit">Get Recommendations</button>
        </form>
      </div>
    );
  };
  
  export default UserPreferences;