// ImageGrid.jsx
import './App';
import{ useEffect } from 'react';
import image1 from './image/Rectangle.png';
import image2 from './image/Rectangle1.png';
import image3 from './image/Rectangle3.png';
import image4 from './image/Rectangle2.png';
import image5 from './image/Rectangle4.png';
import image6 from './image/Rectangle5.png';

const ImageGrid = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.grid-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
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
  }, [])
    
  return (
    <>
    <div className="image-grid hidden">
      <div className="grid-item image1 special-size">
        <div>
        <img src={image1} alt="Image 1" className='img1 hidden'/>
        </div>
        <div className="text">
            <h1>Osogbo Rail Road</h1>
            <h4>Starting From #200,000</h4>
        </div>
      </div>
      <div className="grid-item image2">
        <img src={image2} alt="Image 2" className='img2 hidden'/>
        <div className="text">
            <h1>Lagos Night Market</h1>  
            <h4>Starting From #300,000</h4></div>
      </div>
      <div className="grid-item image3">
        <img src={image3} alt="Image 3" className='img3 hidden'/>
        <div className="text">
            <h1>Abuja Temple</h1>
            <h4>Starting From #100,000</h4></div>
      </div>
      </div>
      <div className="image-grid1">
      <div className="grid-item image4">
        <img src={image4} alt="Image 4" className='img4 hidden'/>
        <div className="text">
            <h1>Rivers Resort</h1>
            <h4>Starting From #400,000</h4></div>
      </div>
      <div className="grid-item image5">
        <img src={image5} alt="Image 5"className='img5 hidden' />
        <div className="text">
            <h1>Lagos Lake</h1>
            <h4>Starting From #700,000</h4></div>
      </div>
      <div className="grid-item image6">
        <img src={image6} alt="Image 6" className='img6 hidden'/>
        <div className="text">
            <h1>Lagos</h1>
            <h4>Starting From #400,000</h4></div>     
      </div>
    </div>
    </>
  );
}

export default ImageGrid;
