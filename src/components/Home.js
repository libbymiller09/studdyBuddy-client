import React from 'react';
import './Home.css';
import '../float.grid.css';

// import { Link } from 'react-router-dom';
// import MeetupPage from './MeetupPage/meetupPage';

class Home extends React.Component {
  render() {
    return (
      <div className="landingContainer">
        <header>
          <h2>How to use this app!</h2>
        </header>
        <div>
          <p>  Finding people to study with is hard.</p>
          
          <p>  With this application, easily find and connect with 'Study Buddies' near you!</p>
        
          <h3> You can... </h3>

          {/* <h2>Checkout the Map!</h2>

          <p>  See if there are any peers meeting in your area! Meetups are shown with handy markers. </p> */}

          <h2> Checkout the listed meetups!</h2> 
          
          <p> To find study sessions in your area!</p>

          <h2> Or create your own custom meetup! </h2>

          <p> Select your own time, place, and subject you want to study. </p>

          <h2>Look for a Buddy now!</h2>

          <p> Start by clicking the login button!  Then head over to Meetups.</p>

          <h2> Don't have a google account yet? </h2>

          <p> No problem, use this demo account to try out the app! </p> 

          <h4>Username: demoTesting2019000@gmail.com</h4>  
          <h4>Password: DemoTester</h4>
        

        </div>
      </div>
    );
  }
}

export default Home;