var React = require('react');

var Link = require('react-router').Link;

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <div className='row'>
          <div className='col-md-offset-3 col-md-6'>
            <div className='col-xs-3 col-md-3 text-center footer-image'>
              <img src='https://salesdemo.dropinauto.com/images/logo-landing.png' />
            </div>
            <div className='col-xs-3 col-md-3 text-center'>
              <ul>
                <li><strong>INVENTORY</strong></li>
                <li><a href='#'>New Vehicles</a></li>
                <li><a href='#'>Pre-Owned Vehicles</a></li>
              </ul>
            </div>
            <div className='col-xs-3 col-md-3 text-center'>
              <ul>
                <li><strong>FINANCING</strong></li>
                <li><Link to={'/credit-application'}>Credit Application</Link></li>
              </ul>
            </div>
            <div className='col-xs-3 col-md-3 text-center'>
              <ul>
                <li><strong>CONTACT</strong></li>
                <li>(877) 909-1919</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
});

module.exports = Footer;
