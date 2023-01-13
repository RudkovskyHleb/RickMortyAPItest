import React, { useContext } from 'react'
import About from './pages/About'
import Characters from './pages/Characters'
import {Routes, Route, Navigate} from 'react-router-dom'
import CharactersId from './pages/CharactersId'
import {AuthContext} from './context'
import Loader from '../src/UI/Loader'
import Auth from "./pages/Auth";
import UserInfo from "./pages/UserInfo";

const AppRouter= ()=>{
  const {isAuth, isLoading} = useContext(AuthContext);
  if (isLoading){
    return <Loader/>
  }
  return(
    isAuth
    ? <Routes>

      <Route path="/about" element={<About/>}>
         </Route>
         <Route exact path="/" element={<Characters/>}>
              </Route>
      <Route exact path="/characters" element={<Characters/>}>
              </Route>
      
      <Route exact path="/characters/:id" element={<CharactersId/>}>     
      </Route>
<Route exact path="/login" element={<Characters/>}>     
      </Route>
            <Route exact path="/userinfo" element={<UserInfo/>}>
            </Route>
    </Routes>
    :<Routes>
      <Route exact path="/" element={<Characters/>}>
              </Route>
      <Route path="/about" element={<About/>}>
         </Route>
    
      <Route exact path="/characters" element={<Characters/>}>
              </Route>
      
      <Route exact path="/characters/:id" element={<Navigate to='/login'/>}>   
              </Route>
                          <Route exact path="/registration" element={<Auth/>}>
            </Route>
            <Route exact path="/login" element={<Auth/>}>
            </Route>
            <Route exact path="/userinfo" element={<Auth/>}>
            </Route>

      </Routes>
    
  )
}
export default AppRouter;