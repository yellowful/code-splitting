import React, { useState } from 'react'
import 'tachyons';
import Page1 from './components/Page1';

import asyncLoadFunction from './asyncLoadFunction';

function App() {

  const [routeState, setRouteState] = useState('page1');

  // 相對於route level，component level不是在這邊lazy load其它component
  const onClickHandler = (route) => (e) => {
    e.preventDefault();
    setRouteState(route);
  }

  // 要小心，component開頭需要是大寫，React才會認為是jsx
  switch (routeState) {
    case 'page2':
      // asyncLoadFunction是一個function，這個function會回傳一個component
      // 為什麼要透過一個asyncLoadFunction來傳component呢？是因為route符合時，這個asyncLoadFunction才會被執行。
      // 為什麼要透過`()=>import('./components/Page2')`來傳`import('./components/Page2')`？
      // 是因為我們不想要`import('./components/Page3')`就執行而得到Page2，而是希望asyncLoadFunction被執行後，這個`()=>import('./components/Page3')`才會被執行，然後才去import page2
      // asyncLoadFunction吞了一個function，然後會return一個AsyncComponent
      const AsyncPage2 = asyncLoadFunction(()=>import('./components/Page2'))
      return <AsyncPage2 onClickHandler={onClickHandler} />
    case 'page3':
      const AsyncPage3 = asyncLoadFunction(()=>import('./components/Page3'))
      return <AsyncPage3 onClickHandler={onClickHandler} />
    default:
      return <Page1 onClickHandler={onClickHandler} />
  }
}

export default App;
