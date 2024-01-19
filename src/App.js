//import logo from './logo.svg';
import './App.css';
 import React from 'react';
 import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
 import Authentication from './pages/authentication/authentication'
 import Home from './pages/home/home'
 import FourOFour from './pages/four-o-four/four-o-four';
function App() {
  return (
    
   <Router>
     <Switch>
        <Route path="/" exact Component={Authentication}/>
         <Route path="/home/" Component={Home}/>
         <Route  Component={FourOFour}/>
     </Switch>

   </Router>

  );
}

export default App;
