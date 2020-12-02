import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Field, Form } from '../components';

const ComponentList = [
  {
    component: <Field type="text" placeholder="Username" form="form__sign__in" className="field" />,
  },
  {
    component: (
      <Field type="password" placeholder="Password" form="form__sign__in" className="field" />
    ),
  },
  {
    component: <Button type="submit" value="Sign In" form="form__sign__in" className="button" />,
  },
  {
    component: (
      <ul>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/reset">Restore access</Link>
        </li>
      </ul>
    ),
  },
];

function SingIn() {
  return (
    <div className="signIn_wrapper">
      <h1>Messager</h1>
      <Form id="form__sign__in" method="GET" title="Sign In" className="signIn_form">
        {ComponentList.map((obj, index) => (
          <span key={index}>{obj.component}</span>
        ))}
      </Form>
    </div>
  );
}

export default SingIn;
