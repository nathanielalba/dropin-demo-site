var React = require('react');

var FeaturedCar = require('../components/featuredcar.jsx');

var Index = React.createClass({

  componentDidMount: function() {
    $('#featured-cars').carousel({
      interval: 2000
    })
  },
  renderFeaturedCars: function(cars) {
    cars.map(function(car, i) {

    });
  },
  render: function() {
    return (
      <div>
        <div id='featured-cars' className='carousel slide' data-ride='carousel'>

          <div className='carousel-inner' role='listbox'>
            <div className='item active'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/5/55/07-08_Toyota_Camry_XLE.jpg' />
              <div className='carousel-caption'>
                <p>{this.props.cars[0].make}</p>
              </div>
            </div>
          </div>

          <a className='left carousel-control' href='#featured-cars' role='button' data-slide='prev'>
            <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
          </a>
          <a className='right carousel-control' href='#featured-cars' role='button' data-slide='next'>
            <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Index;
