import React from 'react';

//TODO:  Style the following list component

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r._id}>
      {r.restaurant_name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions