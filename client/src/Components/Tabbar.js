import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Tabbar() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="Tabbar"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
      </Tab>
      <Tab eventKey="profile" title="Profile">
      </Tab>
      <Tab eventKey="contact" title="Contact">
      </Tab>
    </Tabs>
  );
}

export default Tabbar;