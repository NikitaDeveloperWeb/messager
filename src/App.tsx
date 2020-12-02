//libs
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//pages
import { Home, Reset, SingIn, SingUp } from './pages';
function App() {
  return (
    <div className="App__wrapper">
      <Switch>
        {/* Вход */}
        <Route exact path="/" component={SingIn} />
        {/* Регистрация */}
        <Route exact path="/registration" component={SingUp} />
        {/* Домашняя страница */}
        <Route exact path="/home" component={Home} />
        {/* Восстановление доступа */}
        <Route exact path="/reset" component={Reset} />
      </Switch>
    </div>
  );
}

export default App;
