import { featuredDestinations } from './destination';
import './App';

// eslint-disable-next-line react/prop-types
const Recommendations = ({ preferences }) => {
  const filterDestinations = () => {
    const interests = Object.keys(preferences).filter(key => preferences[key]);
    if (interests.length === 0) {
      return featuredDestinations;
    }

    return featuredDestinations.filter(destination =>
      interests.some(interest =>
        destination.description.toLowerCase().includes(interest)
      )
    );
  };

  const filteredDestinations = filterDestinations();

  return (
    <div className="recommendations">
      <h2>Personalized Recommendations</h2>
      <div className="recommendation-cards">
        {filteredDestinations.map(destination => (
          <div className="recommendation-card" key={destination.id}>
            <div className="image-container">
              <img src={destination.image} alt={destination.name} />
              <div className="overlay">
                <h3>{destination.name}</h3>
              </div>
            </div>
            <div className="recommendation-content">
              <p>{destination.description}</p>
              <ul className="attractions">
                {destination.attractions.map((attraction, index) => (
                  <li key={index}>{attraction}</li>
                ))}
              </ul>
              <a href={destination.link} target="_blank" rel="noopener noreferrer">Learn more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;