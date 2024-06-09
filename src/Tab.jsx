// Tabs.jsx
import { useState } from 'react';
import './App';
import ImageGrid from './ImageGrid';
import FeaturedDestinations from './FeaturedDestination';
import UserPreferences from './UserPreference';
import Recommendations from './Recommendations';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [preferences, setPreferences] = useState({});

  const handleUpdatePreferences = (newPreferences) => {
    setPreferences(newPreferences);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'trending':
        return (  
        <>
        <div className='trending-content'>
     <h2>Trending Destinations</h2>
     <h5>Explore Curated Trips To trending Destinations.</h5>
     <ImageGrid />
     </div>
        </>
        )
      case 'featured':
        return(
            <>
            <FeaturedDestinations />

            </>
        )
         
      case 'personalized':
        return (
            <>      
                  <UserPreferences onUpdatePreferences={handleUpdatePreferences} />
      <Recommendations preferences={preferences} />
            </>
        )
      default:
        return null;
    }
  };

  return (
    <div className='tab-margin'>
      <nav className="tabs">
        <div className={activeTab === 'trending' ? 'tab active' : 'tab'} onClick={() => setActiveTab('trending')}>
          Trending Destinations
        </div>

        <div className={activeTab === 'featured' ? 'tab active' : 'tab'} onClick={() => setActiveTab('featured')}>
          Featured Destinations
        </div>
        <div className={activeTab === 'personalized' ? 'tab active' : 'tab'} onClick={() => setActiveTab('personalized')}>
          Personalized Recommendations
        </div>
      </nav>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tab;

