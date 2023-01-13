import React, { useContext } from 'react'
import { AuthContext } from '../context'

const Navbar = () =>{

  const{isAuth, setIsAuth}=useContext(AuthContext)
  const logout = ()=>{
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return(

  <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/characters">Home</a>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
                    <a className="nav-link" href="/registration">Registration</a>
          <a className="nav-link" href="/userInfo" >Userinfo</a>
                  </div>
      </div>
    </div>
    <button className="btn btn-outline-success" type="submit" onClick={logout}>Logout</button>
  </nav>


  )

}
export default Navbar;

