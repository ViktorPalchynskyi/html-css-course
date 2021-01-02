import StarRating from '../Rating/StarRating';
import './Color.css';

const Color = ({title,color,rating=0,onRemove=f=>f,onRate=f=>f}) =>
 <section className="Color">
   <h1>{title}</h1>
   <button onClick={onRemove}>X</button>
   <div className="Selected"
   style={{ 
    backgroundColor:color
   }}>
   </div>
   <div>
      <StarRating starsSelected={rating} onRate={onRate} />
   </div>
 </section>

export default Color;


// const Color = ({ title, color, rating=0 }) =>
//  <section className="color">
//  <h1>{title}</h1>
//  <div className="color"
//  style={{ backgroundColor: color }}>
//  </div>
//  <div>
//  <StarRating starsSelected={rating} />
//  </div>
//  </section>