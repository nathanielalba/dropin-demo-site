var React = require('react');

var DealerCode = require('../../lib/dropInConfig.js').dealerCode;

var DropIn = React.createClass({
  handleLiveVideo: function(e) {
    e.preventDefault();

    console.log('Live video has started');
    console.log('Dealer code is', DealerCode);
    window.location.href = `https://autoqa.dropinauto.com/dealer/${DealerCode}?vin=${this.props.vin}&refererUrl=${window.location.href}`;
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
