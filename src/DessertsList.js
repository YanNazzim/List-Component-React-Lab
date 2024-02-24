// DessertsList.js
import React from 'react';

function DessertsList(props) {
  // Extracting the data prop
  const { data } = props;

  // Filtering and sorting desserts
  const filteredDesserts = data
    .filter(dessert => dessert.calories <= 500)
    .sort((a, b) => a.calories - b.calories);

  // Rendering the component
  return (
    <ul>
      {filteredDesserts.map(dessert => (
        <li key={dessert.name}>
          {`${dessert.name} - ${dessert.calories} cal`}
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;
