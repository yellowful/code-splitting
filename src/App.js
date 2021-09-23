import React, { useState, lazy, Suspense } from 'react'
import 'tachyons';
import Page1 from './components/Page1';
const Page2 = lazy(() => import('./components/Page2'));
const Page3 = lazy(() => import('./components/Page3'));

function App() {

  const [routeState, setRouteState] = useState('page1');

  const onClickHandler = (route) => (e) => {
    e.preventDefault();
    setRouteState(route);
  }

  switch (routeState) {
    case 'page1':
      return <Page1 onClickHandler={onClickHandler} />
    case 'page2':
      return (
        <Suspense fallback={<div>Loading... </div>}>
          <Page2 onClickHandler={onClickHandler} />
        </Suspense>
      )
    case 'page3':
      return (
        <Suspense fallback={<div>Loading... </div>}>
          <Page3 onClickHandler={onClickHandler} />
        </Suspense>
      )
    default:
      return <Page1 onClickHandler={onClickHandler} />
  }

}

export default App;
