var React = require('react');

var FeaturedCar = React.createClass({
  componentDidMount: function() {
    console.log(this.props.displayImage);
  },
  render: function() {
    return (
      <div className='item'>
        <div className='carousel-caption'>
          <img src={this.props.image} />
          <p>{this.props.vin}</p>
        </div>
      </div>
    )
  }
});

module.exports = FeaturedCar;
