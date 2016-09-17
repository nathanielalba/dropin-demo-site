var React = require('react');
import ImageGallery from 'react-image-gallery';

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
        miles: car.miles,
        transmission: car.transmission,
        engine: car.engine,
        fuel: car.fuel,
        title: car.title
      }
    });
  },
  render: function() {
    var images = [];
    this.state.car.images.map(function(data, id) {
      images.push({
        original: data,
        thumbnail: data
      });
    });


    return (
      <div className='container'>
        <div className='car-detail'>
          <div className='row'>
            <div className='col-md-8'>
              <ImageGallery items={images} slideInterval={2000}/>
            </div>
            <div className='col-md-4'>
              <h2>{this.state.car.year} - {this.state.car.make} {this.state.car.model}</h2>
              <p>Mileage: {this.state.car.miles}</p>
              <p>Transmission Type: {this.state.car.transmission}</p>
              <p>Fuel Type: {this.state.car.fuel}</p>
              <p>Engine: {this.state.car.engine}</p>
              <p>Title: {this.state.car.title}</p>
              <p>CARFAX: <a href='#'>Click for a CarFax Check!</a></p>
              <h6>VIN#{this.state.car.vin}</h6>
              <h3>Internet Price: <strong>${this.state.car.price}</strong></h3>
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
                <textarea className='form-control' defaultValue={'I am interested in the ' + this.state.car.year + ' ' + this.state.car.make + ' ' + this.state.car.model + ' VIN#' + this.state.car.vin}></textarea>
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
