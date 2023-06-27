import React, { useState } from 'react';
import Demo from './demo';
import Drawer from './drawer';

const App = () => {
  const [filterValue, setFilterValue] = useState([]);
  const [TagerVisible, setTagerVisible] = useState(true);
  const [DrawerVisible, setDrawerVisible] = useState(false);
  const tagChange = (data) => {
    if (Object.keys(data).length !== 0) {
      setFilterValue(data);
      setTagerVisible(false);
    } else {
      setFilterValue(data);
      setTagerVisible(true);
    }
  };
  const handleTagClick = (isVisible) => {
    setDrawerVisible(isVisible);
  };
  const handleDrawerClose = (isVisible) => {
    setDrawerVisible(isVisible);
  };
  console.log("app.filterValue",filterValue);
  return (
    <>
      <Demo
        filterValue={filterValue}
        TagerVisible={TagerVisible}
        onTagClick={handleTagClick}
      />

      <Drawer
        onValueChange={tagChange}
        DrawerVisible={DrawerVisible}
        onCloseDrawer={handleDrawerClose}
        filterValue={filterValue}
      />
    </>
  );
};
export default App;
