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
var ReactRouter = require('react-router');
var { browserHistory } = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Layout = require('../public/views/layout.jsx');
var Index = require('../public/views/index.jsx');
var CarDetail = require('../public/views/cardetail.jsx');
var CreditAplication = require('../public/views/creditapp.jsx');


// something like local:8000/new-cars/toyota/${car-vin}/red-2016-prius

var routes = module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Index} />
            <Route path='inventory'>
              <Route path=':make/:vin/:model' component={CarDetail} />
            </Route>
            <Route path='credit-application' component={CreditAplication} />
        </Route>
    </Router>
);
