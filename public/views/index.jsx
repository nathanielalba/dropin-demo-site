var React = require('react');

var FeaturedCar = require('../components/featuredcar.jsx');

var Index = React.createClass({

  componentDidMount: function() {
    $("#featured-cars").owlCarousel({
      items: 1
    });
  },

  render: function() {
    return (
      <div>
        <div id='featured-cars' className='owl-carousel'>
          <div className='featured-car'><img src={this.props.cars[0].images[0]}></img></div>
          <div className='featured-car'><img src={this.props.cars[1].images[0]}></img></div>
          <div className='featured-car'><img src={this.props.cars[2].images[0]}></img></div>
          <div className='featured-car'><img src={this.props.cars[3].images[0]}></img></div>
          <div>TESTING THIS</div>
          <div>TESTING THIS</div>
          <div>TESTING THIS</div>
          <div>TESTING THIS</div>
        </div>

        <div className='car-box-menu'>
          <div className='row'>
            <div className='col-md-offset-2 col-md-8'>
              <ul>
                <li>
                  <a href='#'>
                    <div>

                    </div>
                  </a>
                </li>
                <li><a href='#'></a></li>
                <li><a href='#'></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Index;
