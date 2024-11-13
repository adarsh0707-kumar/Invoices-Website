import React, { useRef, useState } from 'react';
import '../Register/Register.css'
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password, name)

    createUserWithEmailAndPassword(auth, email, password)
      .then(newUser => {
        console.log(newUser);
      })
      .catch(err => {
        console.error(err);
    })


  }


  return (
    <div
      className='register'>

      <div
        className="register__container">

        <h2>Register</h2>

        <form
          onSubmit={submitHandler}
          className='register__container__form'>


          <input
            className='register__container__form__input'
            type="text"
            required
            onChange={
              (e) => {
                setName(e.target.value)
              }}
            placeholder='Company Name' />

          <input
            className='register__container__form__input'
            type="email"
            required
            onChange={
              (e) => {
                setEmail(e.target.value)
              }}
            placeholder='Email' />

          <input
            className='register__container__form__input'
            required
            type="password"
            onChange={
              (e) => {
                setPassword(e.target.value)
              }}
            placeholder='Password' />

          <input
            className='register__container__form__input'
            type="file"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
            required />

          <input
            className='register__container__form__btn'
            type="button"
            style={{ background: '#e7e2e293' }}
            onClick={handleFileSelect}
            value={selectedFile ? selectedFile.name : 'Select your logo'} />

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