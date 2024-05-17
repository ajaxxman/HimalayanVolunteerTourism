import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './stylesSignUp.css';

const SignUp = () => {
  return (
    <div className='SignUp-container'>
        <div className="Signup-header">
          <div className="row text-align=center">
             <div className="row">
                <div className="col-12">
                   <h6> Himalayan Volunteer Tourism</h6>
                 </div>
              </div>
          </div>
        </div>
      <div class="row g-3">
          <div class="col">
          <label for="inputFirstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id='inputFirstName' aria-label="First name"></input>
          </div>
          <div class="col">
          <label for="inputLastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id='inputLastName' aria-label="Last name"></input>
          </div>
      </div>
      <div class="row g-3">
          <div class="col-md-6">
                <label for="Gender" class="form-label">Gender</label>
                <select class="form-control" id="Gender">
                    <option selected>Choose...</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputAge" class="form-label">Age</label>
                <input type="Number" class="form-control" id="inputAge"></input>
              </div>
              </div>
          <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4"></input>
              </div>
              <div class="col-md-6">
                <label for="inputNumber" class="form-label">Mobile Number</label>
                <input type="Number" class="form-control" id="inputNumber"></input>
              </div>
              <div class="row g-3 align-items-center">
                  <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Create Password</label>
                  </div>
                  <div class="col-auto">
                    <input type="password" placeholder='Must be 8-20 characters long.' id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"></input>
                  </div>
              </div>
              <div class="col-8">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
              </div>
              <div class="col-md-4">
                <label for="Country" class="form-label">Country</label>
                <input type="text" class="form-control" id="Country"></input>
              </div>
              
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity"></input>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip"></input>
              </div>
              
              <div class="input-group mb-3">
                  <input type="file" class="form-control" id="inputGroupFile02"></input>
                  <label class="input-group-text" for="inputGroupFile02">Upload Resume</label>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                  <label class="form-check-label" for="gridCheck">
                    Declaration: I hereby declare that everything mention above is true about me and I will
                    be responsible for any false information provided by me. Also I will follow the volunteer policy.
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign Up</button>
              </div>
          </form>
    </div>
  
   
  );
}

export default SignUp;