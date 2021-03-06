import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BaseLayout from './Components/BaseLayout';
import AddMovie from './Components/AddMovie';
import MovieDetails from './Components/MovieDetails';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
            <Route component = {App} path = "/" exact />
            <Route component = {AddMovie} path = "/add-movie" />
            <Route component = {MovieDetails} path = "/movies/:movieId" />

        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
