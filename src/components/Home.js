import React,{Component} from 'react';
import Feedback from './Feedback.js'
class Home extends Component {
    render () {
        return (
           <div className= 'maincontainer'>
                <div className="banner">
                    <div className="container">
                        <h1 className="logo-font">conduit</h1>
                        <p>A place to share your knowledge.</p>
                    </div>
                </div>
            
               <Feedback />
            </div>
            
        )
    }
}

export default Home;