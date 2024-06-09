/* eslint-disable react/prop-types */
  import './App'
import HeartIcon from './HeartIcon';
import cal from './image/calendar_month.svg'
import people from './image/diversity_3.svg'
import location from './image/distance.svg'
import stars from './image/grade.svg'

const TripsCard = ({display, name,names, title, state, amount, amounttag}) => {
  return (
   <>
  <div className='container'>
    
  <section id='card' className="card">   
  <div className='side'>
    <img src={display} alt="" className='water'/>
  </div>

    <HeartIcon className='heart'/>
  <div id='rect'> 
   <span><img src={cal} alt="" className='cal'/></span>{name} 
   <div className='flex'>
    <div className='diver'>
      <img src={people} alt="" />
    </div>
    {names}</div> 
  </div>
  <div id='card-text'>
  <h1 className='card-name'>{title}</h1>
  <div className='location'>
    <img src={location} alt="" />
    <h5>{state}</h5>
  </div>
  <div className='stars'>
    <img src={stars} alt="" />
  </div>
  <div className='name'></div>  
  <div className='flex1'>
    <h4>{amount}</h4><p>{amounttag}</p>
  </div>
  </div>
</section>
  </div>
     
   </>
  )
}

export default TripsCard