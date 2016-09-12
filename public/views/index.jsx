var React = require('react');

var FeaturedCar = require('../components/featuredcar.jsx');

var Index = React.createClass({

  componentDidMount: function() {
    $("#featured-cars").owlCarousel({
      items: 1,
      autoplay: true,
      stopOnHover: true,
      navigation: true
    });
  },

  render: function() {
    return (
      <div className='container main-content'>
        <div className='row'>
          <div className='col-md-3'>
            <p>
              ZAuto is an auto dealership Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam congue nisl ac purus gravida placerat vitae sed turpis. Nunc vestibulum, velit nec
              tincidunt dapibus, metus libero auctor ante, vel sagittis orci ex nec libero. Donec suscipit
              purus quis elit fermentum, eu maximus lectus varius. Curabitur tempor, est id consectetur
              blandit, justo purus congue mauris, nec bibendum urna nunc sed nisi. Morbi et diam a felis
              tempus imperdiet nec pulvinar sem.
            </p>
          </div>
          <div className='col-md-9'>
            <div id='featured-cars' className='owl-carousel'>
              <div className='item'><img src={this.props.cars[0].images[0]} />
                <div className='car-description'>
                  <h2 className='box-description'>{this.props.cars[0].year} - {this.props.cars[0].make} {this.props.cars[0].model}</h2>
                  <p><span className='internet-price'>FIND OUT INTERNET PRICE</span></p>
                </div>
              </div>
              <div className='item'><img src={this.props.cars[1].images[0]} /></div>
              <div className='item'><img src={this.props.cars[2].images[0]} /></div>
              <div className='item'><img src={this.props.cars[3].images[0]} /></div>
            </div>
          </div>
        </div>
        <div className='car-box-menu'>
          <div className='row'>
            <div className='col-md-offset-2 col-md-8'>
              <ul>
                <li className='new-car'>
                  <a href='#'>
                    <div className='box'>
                      <div className='box-text'>
                        <h4>BROWSE</h4>
                        <p>NEW</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className='used-car'>
                  <a href='#'>
                    <div className='box'>
                      <div className='box-text'>
                        <h4>BROWSE</h4>
                        <p>PREOWNED</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className='service'>
                  <a href='#'>
                    <div className='box'>
                      <div className='box-text'>
                        <h4>SERVICE</h4>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Index;
