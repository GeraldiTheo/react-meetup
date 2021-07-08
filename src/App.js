// Component
// import Todo from './components/Todo'
import MainNavigation from './components/Layout/MainNavigation';

import AllMeetups from './Pages/AllMeetups';
import Favorites from './Pages/Favorites';
import NewMeetup from './Pages/NewMeetup';

import Layout from './components/Layout/Layout';

// Route
import { Route, Switch } from 'react-router-dom'

function App(){
  return (
    <>
      {/* <h1>My Todos</h1>

      <Todo text="Learn React" />
      <Todo text="Master Reacr" />
      <Todo text="Learning by doing is fun!:)" /> */}

      {/* <MainNavigation /> */}

      <Layout>

        <Switch >
          <Route path='/' exact={true} >
            <AllMeetups />
          </Route>

          <Route path='/new-meetup'>
            <NewMeetup />
          </Route>

          <Route path='/favorites'>
            <Favorites />
          </Route>
        </Switch>      

      </Layout>

    </>
  );
}

export default App;