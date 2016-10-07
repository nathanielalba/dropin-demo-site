var React = require('react');
var Link = require('react-router').Link;

var CarListItem = React.createClass({
  render: function() {
    var car = this.props.car;
    var altText = `${car.make} ${car.model} display picture`
    return (
      <div className="thumbnail">
        <Link to={'/inventory/' + car.make + '/' + car.vin + '/' + car.model }>
          <img src={car.images[0]} alt={altText} />
        </Link>
        <div className="caption">
          <h3>{car.year} - {car.make} {car.model}</h3>
          <p>{car.tagline}</p>
          <p>{car.engine} - {car.transmission}</p>
          <p>{car.carPackage}</p>
          <p>{car.miles} miles!</p>
          <Link to={'/inventory/' + car.make + '/' + car.vin + '/' + car.model }>FIND OUT INTERNET PRICE</Link>
        </div>
      </div>
    );
  }
});

module.exports = CarListItem;
