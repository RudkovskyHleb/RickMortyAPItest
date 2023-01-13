import About from "../pages/About";
import Characters from "../pages/Characters";
import CharactersId from "../pages/CharactersId";
const isAuth = true;
export const privateRoutes = [
  {path: '/about', element:<About/>, exact: true},
  {path: '/', element:<Characters/>, exact: true},
  {path:'/characters', element:<Characters/>, exact:true},
  {path:'/characters/:Id', element:<CharactersId/>, exact:true}
]
export const publicRoutes = [
  {path: '/about', element:<About/>, exact: true},
 


]