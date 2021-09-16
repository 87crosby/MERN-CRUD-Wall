import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';
import OneNinja from './components/OneNinja';
import Edit from './components/Edit';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {


  
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Wall of Ninjas</h1>
      <Link className="bth btn-info mr-3" to="">Home</Link>
      <Link className="btn btn-success" to="/new">Create a New Ninja</Link>
      <Switch>
        <Route exact path="/">
          <AllNinjas></AllNinjas>
        </Route>
        <Route exact path="/new">
          <NewNinjaForm></NewNinjaForm>
        </Route>
        <Route exact path="/ninja/:idParam">
          <OneNinja></OneNinja>
        </Route>
        <Route exact path="/ninja/edit/:idParam">
          <Edit></Edit>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
