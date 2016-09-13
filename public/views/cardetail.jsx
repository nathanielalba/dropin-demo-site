var React = require('react');

var CarDetail = React.createClass({

  componentWillMount: function() {
    var cars = this.props.cars;
    var vin = this.props.params.vin;

    var car = cars.filter(function(obj) {
      if(obj.vin == vin) {
        return obj;
      }
    });

    car = car[0];

    this.setState({
      car: {
        images: car.images,
        vin: car.vin,
        make: car.make,
        model: car.model,
        year: car.year,
        featured: car.featured,
        preowned: car.preowned,
        price: car.price,
        miles: car.miles
      }
    }, function() {
      console.log(this.state)
    });
  },

  render: function() {
    return (
      <div className='container'>
        <div className='car-detail'>
          <div className='row'>
            <div className='col-md-8'>
              <img src={this.state.car.images[0]} />
            </div>
            <div className='col-md-4'>
              <h2>{this.state.car.year} - {this.state.car.make} {this.state.car.model}</h2>
              <h6>VIN#{this.state.car.vin}</h6>
            </div>
          </div>
          <div className='detail-contact-form'>
            <h4>Interested?</h4>
            <p>Our vehicle experts are standing by to answer any questions:</p>
            <p> <strong>Call Us</strong> (877) 909-1919</p>
            <form>
              <div className='form-group'>
                <input type='email' className='form-control' placeholder='Email **' />
              </div>
              <div className='form-group'>
                <textarea className='form-control' value={'I am interested in the ' + this.state.car.year + ' ' + this.state.car.make + ' ' + this.state.car.model + ' VIN#' + this.state.car.vin}></textarea>
              </div>
              <button type='submit' className='btn btn-default btn-block'>Contact Us</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CarDetail;
