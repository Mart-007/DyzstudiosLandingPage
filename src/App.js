import React  from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Contact from './Components/Contact';
import Services from './Components/Services';
import Nav from './Components/Nav';
import Hero from './Components/Hero';



function App () {
 return (
      <Router>
       <div className="App">

           <Nav />
      <Switch>
            <Route path="/Contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/hero" componets={Hero} />
      </Switch>
     
      </div>
      </Router>

 );

 }

 export default App;

