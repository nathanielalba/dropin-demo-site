/*-------------------------------------------------------------------------------------------------------------------*\
 |  Copyright (C) 2015 PayPal                                                                                          |
 |                                                                                                                     |
 |  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
 |  with the License.                                                                                                  |
 |                                                                                                                     |
 |  You may obtain a copy of the License at                                                                            |
 |                                                                                                                     |
 |       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
 |                                                                                                                     |
 |  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
 |  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
 |  the specific language governing permissions and limitations under the License.                                     |
 \*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function render() {

        return (
            <html>
                <head>
                    <meta charSet='utf-8' />
                    <title>{this.props.title}</title>
                    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' />
                    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' />
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.6/assets/owl.carousel.min.css' />
                    <link rel='stylesheet' href='http://lvh.me:8000/app.min.css' />
                </head>
                <body>
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
                    {this.props.children}
                    <footer>
                      <div className='row'>
                        <div className='col-md-offset-3 col-md-6'>
                          <div className='col-md-3 text-center footer-image'>
                            <img src='https://salesdemo.dropinauto.com/images/logo-landing.png' />
                          </div>
                          <div className='col-md-3 text-center'>
                            <ul>
                              <li><strong>INVENTORY</strong></li>
                              <li>New Vehicles</li>
                              <li>Pre-Owned Vehicles</li>
                            </ul>
                          </div>
                          <div className='col-md-3 text-center'>
                            <ul>
                              <li><strong>FINANCING</strong></li>
                              <li>Credit Application</li>
                            </ul>
                          </div>
                          <div className='col-md-3 text-center'>
                            <ul>
                              <li><strong>CONTACT</strong></li>
                              <li>(877) 909-1919</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </footer>
                  </div>
                  <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
                  <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
                  <script src='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.6/owl.carousel.min.js'></script>
                  <script src='http://lvh.me:8000/bundle.js'></script>
                </body>
            </html>
        );
    }
});
