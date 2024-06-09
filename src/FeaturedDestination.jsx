
import { featuredDestinations } from './destination';
import './App';

const FeaturedDestinations = () => {
    return (
      <div className="featured-destinations">
        {featuredDestinations.map(destination => (
          <div className="destination" key={destination.id}>
            <img src={destination.image} alt={destination.name} />
            <div className="destination-content">
              <h2>{destination.name}</h2>
              <p className="description">{destination.description}</p>
              <p className="rating">Rating: {destination.rating} / 5</p>
              <ul className="attractions">
                {destination.attractions.map((attraction, index) => (
                  <li key={index}>{attraction}</li>
                ))}
              </ul>
              <a href={destination.link} className="read-more" target="_blank" rel="noopener noreferrer">Learn more</a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeaturedDestinations;