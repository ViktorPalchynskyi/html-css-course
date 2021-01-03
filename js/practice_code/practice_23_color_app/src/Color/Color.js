import StarRating from '../Rating/StarRating';
import React from 'react';
import './Color.css';
import PropTypes from 'prop-types';

class Color extends React.Component{

  componentWillMount() { 
    this.style = {backgroundColor: "#CCC"};
  }

  shouldComponentUpdate(nextProps){ 
    const {rating} = this.props;
    return rating !== nextProps.rating;
  }

  componentWillUpdate() { 
    this.style = null;
  }

  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;
    const status = (rating > prevProps.rating) ? 'better' : 'worse';
    console.log(`${title} is getting ${status}`);
   }

  render() { 
    const {title,color,rating,onRemove,onRate} = this.props;
    return (
      <section className="Color" style={this.style}>
        <h1>{title ? title.toUpperCase(): 'No title'}</h1>
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
    )
  }
}

Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func
 }

 Color.defaultProps = {
  title: undefined,
  rating: 0,
  color: "#000000",
  onRate: f=>f
 }

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