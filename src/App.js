import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Roadmap from './containers/Roadmap';
import Contact from './containers/Contact';
import NoMatch from './containers/NoMatch';
import Subscribe from './containers/Subscribe';
import SubscribeError from './containers/SubscribeError';
import SubscribeSuccess from './containers/SubscribeSuccess';
import MailerError from './containers/MailerError';
import MailerSuccess from './containers/MailerSuccess';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/contact" component={Contact} />
          <Route path="/subscribe" component={Subscribe} />
          <Route path="/subscribe-error" component={SubscribeError} />
          <Route path="/subscribe-success" component={SubscribeSuccess} />
          <Route path="/email-error" component={MailerError} />
          <Route path="/email-success" component={MailerSuccess} />
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
