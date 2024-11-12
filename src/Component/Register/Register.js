import React from 'react';
import '../Register/Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div
      className='register'>

      <div
        className="register__container">

        <h2>Register</h2>

        <form
          className='register__container__form'>


          <input
            className='register__container__form__input'
            type="email"
            required
            placeholder='Email' />

          <input
            className='register__container__form__input'
            required
            type="password"
            placeholder='Password' />

          <input
            className='register__container__form__btn'
            type="submit"
            value='Register' />

          <h4
          >
            Already have an account?
            <Link
              style={{ marginLeft: '5px' }}
              to='/login'>
              Login
            </Link>
          </h4>

        </form>





      </div>



    </div>
  )
}

export default Register