import React from 'react';
import { Button, Field, Form } from '../components';
const ComponentList = [
  {
    component: <Field type="text" placeholder="Search" form="user_search" className="field" />,
  },

  {
    component: <Button type="submit" value="Search" form="user_search" className="button" />,
  },
];

function Search() {
  return (
    <div className="search_wrapper">
      <h1>Search user</h1>
      <Form id="user_search" method="GET">
        {ComponentList.map((obj, index) => (
          <span key={index}>{obj.component}</span>
        ))}
      </Form>
      <div className="search_rezult">
        <p>Results will be displayed here.</p>
      </div>
    </div>
  );
}

export default Search;
