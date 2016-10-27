var React = require('react');

var DropIn = React.createClass({
  handleLiveVideo: function(e) {
    e.preventDefault();

    const DROP_IN_AUTO_URL = this.props.dropInAutoUrl;
    const DEALER_CODE = this.props.dealerCode;
    const VIN = this.props.vin;

    console.log('Live video has started');
    console.log('Dealer code is', DEALER_CODE);
    window.location.href = `${DROP_IN_AUTO_URL}/${DEALER_CODE}?vin=${VIN}&refererUrl=${window.location.href}`;
    console.log(window.location.href);
  },
  render: function() {
    return (
      <button className='live-video-button' onClick={this.handleLiveVideo}>
          <img src='https://salesdemo.dropinauto.com/images/icon-dropin.png' />
          <span className='live-video-text'>LIVE VIDEO</span>
      </button>
    )
  }
});

module.exports = DropIn;
