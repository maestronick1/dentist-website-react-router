import React from "react";
import './App.css';
import Home from './Home'
import Contact from  "./Contact"
import Procedures from './Procedures'
import WidgetShow from  "./WidgetShow"
import Bio from './Bio'
import Donor from './Donor'
import Locations from './Locations'

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



function App() {
  const procedures = [
    "cleaning",
    "surgery",
    "crowns",
    "implants",
    "fillings"
  ]
  return (
    <Router>

    <div className="App">
    <nav>
      <Link to="/">Go back to home</Link>{' '}
      <Link to="/procedures">Go to Procedures</Link>{' '}
      <Link to="/contact">Go to Contact</Link>{' '}
      <Link to="/bio">bio</Link>{' '}
      <Link to="/donors">donors</Link>{' '}
      <Link to="/locations">Locations</Link>{' '}

      
      
    </nav>
      <h1>Nick Dental</h1>
      <p>here for your dental need</p>
      <Route path= "/" component={Home} />
      <Route path="/procedures" render={() => <Procedures procedures={procedures} />} />
      <Route path= "/Contact" component={Contact} />
      <Route path= "/Widget/:id" render={(props)=> <WidgetShow procedures={procedures} {...props}/>} />
      <Route path="/bio" component={Bio}/>
      <Route path="/donors" component={Donor}/>
      <Route path="/Locations" component={Locations}/>
    </div>
    </Router>
  );
}

export default App;
