var React = require('react');
var Link = require('react-router').Link;
var Masonry = require('react-masonry-component');

var BoxMenu = require('./boxmenu.jsx');
var CarListItem = require('./carlistitem.jsx');

var masonryOptions = {
  transitionDuration: 0,
  gutter: 10
};

var Index = React.createClass({

  render: function() {
    var carList = this.props.cars.map(function(car, i) {
      return <CarListItem key={i} car={car} />;
    });

    return (
      <div className='container main-content'>
        <Masonry
          className={'car-list'}
          elementType={'div'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
        {carList}
        </Masonry>
      </div>
    );
  }
});

module.exports = Index;
