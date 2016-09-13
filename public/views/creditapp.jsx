var React = require('react');

var CreditApp = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <div className='container'>
        <div className='credit-app'>
          <form onSubmit={this.onSubmit}>
            <h4 className='credit-app-header'>Personal Information</h4>
            <div className='form-group'>
              <div className='row'>
                <div className='col-md-6'>
                  <input type='text' placeholder='First Name*' className='form-control custom-border' />
                </div>
                <div className='col-md-6'>
                  <input type='text' placeholder='Last Name*' className='form-control custom-border' />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-9'>
                  <input type='text' placeholder='Address*' className='form-control custom-border' />
                </div>
                <div className='col-md-3'>
                  <input type='text' placeholder='Telephone #*' className='form-control custom-border' />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-3'>
                  <input type='text' placeholder='City*' className='form-control custom-border' />
                </div>
                <div className='col-md-3'>
                  <input type='text' placeholder='State/Zip*' className='form-control custom-border' />
                </div>
                <div className='col-md-6'>
                  <input type='email' placeholder='Email*' className='form-control custom-border' />
                </div>
              </div>
              <h4 className='credit-app-header'>Employment Info</h4>
              <div className='row'>
                <div className='col-md-6'>
                  <input type='text' placeholder='Company Name*' className='form-control custom-border' />
                </div>
                <div className='col-md-6'>
                  <input type='text' placeholder='Telephone #*' className='form-control custom-border' />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-7'>
                  <input type='text' placeholder='Business Address*' className='form-control custom-border' />
                </div>
                <div className='col-md-5'>
                  <input type='text' placeholder='Position Held*' className='form-control custom-border' />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <input type='text' placeholder='Time in Position*' className='form-control custom-border' />
                </div>
                <div className='col-md-6'>
                  <input type='text' placeholder='Salary' className='form-control custom-border' />
                  <label>
                    <input type='checkbox' /> Hourly
                    <input type='checkbox' /> Monthly
                  </label>
                </div>
              </div>
            </div>
            <button type='submit' className='btn btn-default'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = CreditApp;
