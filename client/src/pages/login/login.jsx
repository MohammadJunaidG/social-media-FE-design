import './login.css'

function login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">private-social</h3>
          <span className="loginDesc">
          Connect with your friends and world around you privately on private-social.
          </span>
        </div>
        <div className="loginRight">
          <form action="" className="loginBox">
            <input placeholder='Email' type='Email' required className="loginInput" />
            <input placeholder='Password' required minLength="6" className="loginInput" />
            <button className="loginButton" type="submit">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" type="submit">Create A New Account</button>
          </form>
         </div>
      </div>
      
    </div>
  )
}

export default login


