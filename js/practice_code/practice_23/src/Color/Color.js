import StarRating from '../Rating/StarRating';


const Color = ({title, color, rating=0}) => ( 
   <section className="color">
      <h1>{title}</h1>
      <div className="color"
           style={{backgroundColor: color}}
      >
      </div>
      <div>
         <StarRating startsSelected={rating}/>
      </div>
   </section>
)

export default Color;