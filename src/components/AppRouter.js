import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { AppLista } from './AppLista'
import { Formulario } from './Formulario'
import { NavBar } from './NavBar'
export const AppRouter = () => {
    return (
       <Router>
       <div className="contain">
           <div className="item1">
               <NavBar />
           </div>
           <div className="item2">
               <Switch>
                   <Route exact path="/" component={AppLista}/>
                   <Route exact path="/formulario" component={Formulario}/>
                   <Redirect to="/" />
               </Switch>
           </div>
        </div>
       </Router>
    )
}
