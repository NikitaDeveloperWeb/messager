import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Field, Form } from '../components';

const ComponentList = [
  {
    component: <Field type="e-mail" placeholder="Mail" form="form__sign__in" className="field" />,
  },

  {
    component: <Button type="submit" value="Restore" form="form__restore" className="button" />,
  },
  {
    component: (
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>
    ),
  },
];

function Reset() {
  return (
    <div className="restore_wrapper">
      <h1>Messager</h1>
      <Form id="form__restore" method="GET" title="Restore" className="restore_form">
        {ComponentList.map((obj, index) => (
          <span key={index}>{obj.component}</span>
        ))}
      </Form>
    </div>
  );
}

export default Reset;
