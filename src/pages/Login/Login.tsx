import { useState } from 'react';
import GreenButton from '../../components/Btn/GreenButton';
import './login.scss';


const Login = () => {
  const[isLogin, setIsLogin] = useState(false)

  return (
    <div className="login">
      <div className="login__body">

        {isLogin ?
          <form className="login__form">
            <label htmlFor="name" className="login__label"></label>
            <input type="text" className='login__input' name='name' placeholder='Name' />
            <label htmlFor="email" className="login__label"></label>
            <input type="email" className='login__input' name='email' placeholder='Email' />
            <label htmlFor="nik" className="login__label"></label>
            <input type="text" className='login__input' name='nik' placeholder='User Nik Name' />
            <label htmlFor="pass" className="login__label"></label>
            <input type="text" className='login__input' name='pass' placeholder='Password' />
            {/* <GreenButton>Login</GreenButton> */}
            {/* <div  onClick={() => {setIsLogin(true)}}> */}
              <GreenButton>Register</GreenButton>
            {/* </div> */}
        </form>
        :

        <form className="login__form">
          <label htmlFor="name" className="login__label"></label>
          <input type="text" className='login__input' name='name' placeholder='User' />
          <label htmlFor="pass" className="login__label"></label>
          <input type="text" className='login__input' name='pass' placeholder='Password' />
          <GreenButton>Login</GreenButton>
          <div onClick={() => {setIsLogin(true)}}>
            <GreenButton>Register</GreenButton>
          </div>
        </form>
        }
      </div>
    </div>
  );
}
 
export default Login;