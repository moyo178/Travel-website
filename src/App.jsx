import './App.css';
import SearchIcon from './image/search.svg';
import { useEffect, useState } from 'react';
import Tab from './Tab';
import { trips } from "./trips";
import Trips from "./TripsCard";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className='Header'>
        <div className='container hidden'>
          <h1 className="header-title">MOVE FAST</h1>
          <div className='search-bar'>
            <input type="search" name="" id="search" placeholder='Where to next, places, hotels...' />
            <img src={SearchIcon} alt="" className='search-icon' />
          </div>
          <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
            <ul>
              <li>About</li>
              <li>Trips</li>
              <li>Hotels</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <div className='buttons hidden'>
            <button className='btn'>Login</button>
            <button className='btn1'>Sign up</button>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>

        <div className='header-body hidden'>
          <h2>Explore Your Travel</h2>
          <h1>Discover Nigerias Hidden Gem With Move Fast</h1>
          <p>Experience the beauty of Nigeria through our curated trips that support local communities</p>
          <div className='buttons1 hidden'>
            <button className='btn2'>Learn More</button>
            <button className='btn3'>Start Your Adventure</button>
          </div>
        </div>
        <div className='boxes'>
          <div className='box hidden'>
            <h1>01</h1>
            <h2>Personalized Itinerary</h2>
            <p>Let Us Create A Customized Itinerary Just
              For You, Tailored To Your Interests And
              Preferences.</p>
          </div>
          <div className='box hidden'>
            <h1>02</h1>
            <h2>Personalized Itinerary</h2>
            <p>Let Us Create A Customized Itinerary Just
              For You, Tailored To Your Interests And
              Preferences.</p>
          </div>
          <div className='box hidden'>
            <h1>03</h1>
            <h2>Personalized Itinerary</h2>
            <p>Let Us Create A Customized Itinerary Just
              For You, Tailored To Your Interests And
              Preferences.</p>
          </div>
        </div>
      </section>


      <div className="App hidden">
      <Tab />
    </div>
    <div className='title'>
        <h1>Popular Trips</h1>
        <p>Discover handpicked adventure loved by fellow travellers</p>
        </div>
  
<div className='card-container hidden'>
  {trips.map((item)=> <Trips key={item.id} amount={item.amount} amounttag={item.amounttag}  title={item.title} state={item.state} name={item.name} names={item.names} display={item.display}/>)}</div>


   </>
  );
}                                   

export default App;
