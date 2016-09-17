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

var Navbar = require('./navbar.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({

    render: function render() {

        return (
            <html>
                <head>
                    <meta charSet='utf-8' />
                    <title>ZAuto | West Hollywood</title>
                    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' />
                    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' />
                    <link rel='stylesheet' href='http://lvh.me:8000/app.min.css' />
                </head>
                <body>
                  <div>
                    <Navbar />
                    {this.props.children}
                    <Footer />
                  </div>
                  <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
                  <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
                  <script src='http://lvh.me:8000/bundle.js'></script>
                </body>
            </html>
        );
    }
});
