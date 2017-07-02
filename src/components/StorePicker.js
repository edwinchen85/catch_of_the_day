import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    // Can use JS comment format here
    return (
      <form className="store-selector">
        { /* JSX Comment */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;
