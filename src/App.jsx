import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';
import Life from './components/lifecycles';
import User from './components/user';
import Conditional from './components/conditional';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/life">Life</Link>
          <Link to="/conditional">Conditional</Link>
          <Link to="/user">User</Link>
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/life" component={Life} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
