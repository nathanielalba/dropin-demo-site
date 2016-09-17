var React = require('react');

var Link = require('react-router').Link;

var Navbar = React.createClass({
  render: function() {
    return (
      <div>
        <div className='container'>
          <nav>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#auto-navbar' aria-expanded='false' >
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
                <Link to={'/'}>
                  <div className='mobile-nav-logo'>
                    <img src='https://salesdemo.dropinauto.com/images/logo-landing.png' />
                  </div>
                </Link>
              </div>
              <div className='collapse navbar-collapse' id='auto-navbar'>
                <ul className='nav navbar-nav'>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><a href='#'>Research</a></li>
                  <li><a href='#'>New Inventory</a></li>
                  <li><a href='#'>Pre-Owned</a></li>
                  <li><a href='#'>Service</a></li>
                  <li><a href='#'>Contact Us</a></li>
                </ul>
                <ul className='nav navbar-nav navbar-right'>
                  <li><button className='btn btn-default nav-btn'><i className="fa fa-comments-o" aria-hidden="true"></i> CHAT NOW</button></li>
                  <li className='vertical-divider'></li>
                  <li className='navbar-text'><i className="fa fa-phone" aria-hidden="true"></i> (877) 909-1919</li>
                  <li className='vertical-divider'></li>
                  <li className='navbar-text'><i className="fa fa-map-marker" aria-hidden="true"></i> ZAuto West Hollywood, CA</li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='logo-landing'>
            <img src='https://salesdemo.dropinauto.com/images/logo-landing.png'/>
            <h1>West Hollywood <small>ZAuto</small></h1>
          </div>
        </div>
      <div className='full-width-border'></div>
    </div>
    )
  }
});

module.exports = Navbar;
