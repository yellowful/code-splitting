import React, { useState } from 'react'
import 'tachyons';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  
  const [routeState, setRouteState] = useState('page1');

  const onClickHandler = (route) => (e) => {
    e.preventDefault();
    setRouteState(route);
}

  switch (routeState){
    case 'page1':
      return <Page1 onClickHandler={onClickHandler} />
    case 'page2':
      return <Page2 onClickHandler={onClickHandler} />
    case 'page3':
      return <Page3 onClickHandler={onClickHandler} />
    default:
     return <Page1 onClickHandler={onClickHandler} />
  }

}

export default App;
