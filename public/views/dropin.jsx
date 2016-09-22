var React = require('react');

var DealerCode = require('../../lib/dropInConfig.js').dealerCode;

var DropIn = React.createClass({
  handleLiveVideo: function(e) {
    e.preventDefault();

    var dropInUrl = 'https://saledemo.dropinauto.com/dealer/' +
                    'dropininc' +
                    '?' +
                    'vin=' + this.props.vin + '&refererUrl=' +
                    window.location.href

    console.log('Live video has started');
    console.log('Dealer code is', DealerCode);
    console.log('This is your url', dropInUrl);
    window.location.href = dropInUrl;
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
