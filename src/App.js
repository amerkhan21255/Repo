import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Router>

      <div className='container'>
          <Nav />

          
            <Route exact path='/' component={Home} />
            <Route exact path='/components/SignIn' component={SignIn} />
            <Route path = '/components/SignUp' component ={SignUp} />
           </div>
            </Router>
    );
          }
        }

//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;