import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Message } from '..';
import { Search, Setting } from '../../pages';
import avatar from '../../assets/img/avatar.jpg';
const routeList = [
  {
    route: <Link to="/">Message</Link>,
  },
  {
    route: <Link to="/">Search user</Link>,
  },
  {
    route: <Link to="/">Setting</Link>,
  },
];

function Menu() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeItem, setActivItem] = React.useState(0);

  const onSelectItem = (index: number) => {
    setActivItem(index);

    switch (index) {
      case 0:
        ReactDOM.render(<Message />, document.getElementById('wrapper'));
        break;
      case 1:
        ReactDOM.render(<Search />, document.getElementById('wrapper'));
        break;
      case 2:
        ReactDOM.render(<Setting />, document.getElementById('wrapper'));
        break;
    }
  };

  return (
    <div>
      <div className="nav_profile_intro">
        <div className="avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="profile_data">
          <h3>Missaki Audzava</h3>
          <p>@missa</p>
        </div>
      </div>
      <Router>
        <ul>
          {routeList.map((obj, index) => (
            <li key={`${obj}_${index}`} onClick={() => onSelectItem(index)}>
              {obj.route}
            </li>
          ))}
        </ul>
      </Router>
    </div>
  );
}

export default Menu;
