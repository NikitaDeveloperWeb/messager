import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Field, Form } from '../components';

const ComponentList = [
  {
    component: <Field type="text" placeholder="Username" form="form__sign__in" className="field" />,
  },
  {
    component: <Field type="e-mail" placeholder="Mail" form="form__sign__in" className="field" />,
  },
  {
    component: <Field type="date" placeholder="Date" form="form__sign__in" className="field" />,
  },
  {
    component: (
      <Field type="password" placeholder="Password" form="form__sign__in" className="field" />
    ),
  },
  {
    component: (
      <Field
        type="password"
        placeholder="Repeat password"
        form="form__sign__up"
        className="field"
      />
    ),
  },
  {
    component: <Button type="submit" value="Sign Up" form="form__sign__up" className="button" />,
  },
  {
    component: (
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/reset">Restore access</Link>
        </li>
      </ul>
    ),
  },
];

function SingUp() {
  return (
    <div className="signUp_wrapper">
      <h1>Messager</h1>
      <Form id="form__sign__up" method="GET" title="Sign Up" className="signUp_form">
        {ComponentList.map((obj, index) => (
          <span key={index}>{obj.component}</span>
        ))}
      </Form>
    </div>
  );
}

export default SingUp;
