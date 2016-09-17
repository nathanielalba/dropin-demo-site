var React = require('react');
var Link = require('react-router').Link;

var BoxMenu = require('./boxmenu.jsx');

var Index = React.createClass({

  render: function() {
    return (
      <div className='container main-content'>
        <div className='row'>
          <div className='col-md-4'>
            <div className="thumbnail">
              <img src={this.props.cars[0].images[0]} alt="Card image cap" />
              <div className="caption">
                <h3>{this.props.cars[0].year} - {this.props.cars[0].make} {this.props.cars[0].model}</h3>
                <p>Brand <strong>NEW</strong>!!</p>
                <p>2.5L V4 - Automatic transmission</p>
                <p>Luxury Edition</p>
                <p>{this.props.cars[0].miles} miles!</p>
                <Link to={'/inventory/' + this.props.cars[0].make + '/' +this.props.cars[0].vin + '/' + this.props.cars[0].model }>FIND OUT INTERNET PRICE</Link>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="thumbnail">
              <img src={this.props.cars[1].images[0]} alt="Card image cap" />
              <div className="caption">
                <h3>{this.props.cars[1].year} - {this.props.cars[1].make} {this.props.cars[1].model}</h3>
                <p><strong>Certified</strong> pre-owned!</p>
                <p>2.7L V6 - Automatic transmission</p>
                <p>Standard Sport</p>
                <p>{this.props.cars[1].miles} miles!</p>
                <Link to={'/inventory/' + this.props.cars[1].make + '/' +this.props.cars[1].vin + '/' + this.props.cars[1].model }>FIND OUT INTERNET PRICE</Link>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="thumbnail">
              <img src={this.props.cars[2].images[0]} alt="Card image cap" />
              <div className="caption">
                <h3>{this.props.cars[2].year} - {this.props.cars[2].make} {this.props.cars[2].model}</h3>
                <p><strong>Certified</strong> pre-owned!</p>
                <p>3.6L V6 - Manual transmission</p>
                <p>Rubicon - Sports package w/ offroad tires</p>
                <p>{this.props.cars[2].miles} miles!</p>
                <Link to={'/inventory/' + this.props.cars[2].make + '/' +this.props.cars[2].vin + '/' + this.props.cars[2].model }>FIND OUT INTERNET PRICE</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className="thumbnail">
              <img src={this.props.cars[3].images[0]} alt="Card image cap" />
              <div className="caption">
                <h3>{this.props.cars[3].year} - {this.props.cars[3].make} {this.props.cars[3].model}</h3>
                <p>Brand <strong>NEW</strong>!!</p>
                <p>2.5L V4 - Automatic transmission</p>
                <p>SE-R Spec V</p>
                <p>{this.props.cars[3].miles} miles!</p>
                <Link to={'/inventory/' + this.props.cars[3].make + '/' +this.props.cars[3].vin + '/' + this.props.cars[3].model }>FIND OUT INTERNET PRICE</Link>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="thumbnail">
              <img src={this.props.cars[4].images[0]} alt="Card image cap" />
              <div className="caption">
                <h3>{this.props.cars[4].year} - {this.props.cars[4].make} {this.props.cars[4].model}</h3>
                <p><strong>Certified</strong> pre-owned!</p>
                <p>3.5L V6 - Manual transmission</p>
                <p>SE Limited</p>
                <p>{this.props.cars[4].miles} miles!</p>
                <Link to={'/inventory/' + this.props.cars[4].make + '/' +this.props.cars[4].vin + '/' + this.props.cars[4].model }>FIND OUT INTERNET PRICE</Link>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="thumbnail">
              <img src={this.props.cars[5].images[0]} alt="Card image cap" />
              <div className="caption">
                <h3>{this.props.cars[5].year} - {this.props.cars[5].make} {this.props.cars[5].model}</h3>
                <p><strong>Certified</strong> pre-owned!</p>
                <p>1.8L V4 - Automatic transmission</p>
                <p>LS</p>
                <p>{this.props.cars[5].miles} miles!</p>
                <Link to={'/inventory/' + this.props.cars[5].make + '/' +this.props.cars[5].vin + '/' + this.props.cars[5].model }>FIND OUT INTERNET PRICE</Link>
              </div>
            </div>
          </div>
        </div>
        <BoxMenu />
      </div>
    );
  }
});

module.exports = Index;
