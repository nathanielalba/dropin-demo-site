var React = require('react');

var BoxMenu = React.createClass({
  render: function() {
    return (
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
    );
  }
});

module.exports = BoxMenu;
