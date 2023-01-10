import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Dropmenu() {
  return (
    <div>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Something 3else</Dropdown.Item>
     
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default Dropmenu;