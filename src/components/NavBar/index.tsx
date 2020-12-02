import React from 'react';
import ReactDOM from 'react-dom';

import { Field, Form, Menu, Dialogs } from '..';
import gamburger from '../../assets/img/menu.png';
import gamburgerClose from '../../assets/img/closeMenu.png';
const ComponentList = [
  {
    component: (
      <Field type="text" placeholder="Search" form="Search_form" className="search_field" />
    ),
  },
];

function Navigation() {
  const [open, setOpen] = React.useState(false);

  const handleOpenMenu = (arg: boolean) => {
    setOpen(!arg);

    switch (arg) {
      case true:
        ReactDOM.render(<Menu />, document.getElementById('navPanel'));
        break;
      case false:
        ReactDOM.render(<Dialogs />, document.getElementById('navPanel'));
        break;
    }
  };

  return (
    <nav>
      <div className="nav_intro">
        <img
          src={open === false ? gamburger : gamburgerClose}
          alt="Menu"
          onClick={() => handleOpenMenu(open)}
        />
        <Form method="GET" id="Search_form">
          {ComponentList.map((obj, index) => (
            <span key={index}>{obj.component}</span>
          ))}
        </Form>
      </div>

      <div className="nav_panel" id="navPanel">
        <Dialogs />
      </div>
    </nav>
  );
}

export default Navigation;
