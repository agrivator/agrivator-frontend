import React from 'react';

/**
 * *CSS imports
 */
import 'bootstrap/dist/css/bootstrap.min.css';


/**Bootstrap Imports */



/**
 * *Components Imports
 */
import Navbar from './compnents/Navbar';
import FormSection from './compnents/FormSection';
import SideBar from './compnents/SideBar'
// import NameForm from './compnents/NameForm';

function App() {
  return (  
    <div className="App">
        <Navbar/>
        <SideBar/>
        <FormSection/>
    </div>
  );
}

export default App;
