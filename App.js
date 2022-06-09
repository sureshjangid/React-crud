import React from 'react';
import './App.css';
import Home from './componets/page/Home';
import About from './componets/page/About';
import Contact from './componets/page/Contact';
import { Navbar } from './componets/layout/Navbar';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"; 
import { NotFound } from './componets/page/NotFound';
import {User} from './componets/page/User';
import { EditUser } from './componets/page/EditUser';
import { ViewUser } from './componets/page/ViewUser';
import LoadingBar from 'react-top-loading-bar';
import { News } from './News/News';

function App() {
  const [progress, setProgress] = React.useState(0)

  return (
   <>
   <Router>
   <Navbar/>
   <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

     <Switch>
       {/* <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/user" component={User} />
       <Route exact path="/edituser/:id" onClick={() => setProgress(100)} component={EditUser} />
       <Route exact path="/viewUser/:id" onClick={() => setProgress(100)} component={ViewUser} />
       <Route  component={NotFound} /> */}
     </Switch>
   </Router>
   <News />
   </>
  );
}

export default App;
