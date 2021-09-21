import React, { useState } from 'react'
import 'tachyons';
import Page1 from './components/Page1';

function App() {
  
  const [routeState, setRouteState] = useState({
    route:'page1',
    component:null
  });

  // onClickHandler這個function一開始a tag被render的時候就會被執行了
  // 執行的時候，馬上就把route帶進去，例如'page2'
  // 執行完會回傳一個async的function
  // 這個async的function要等onClick被觸發時，會把event帶進e之後才會執行，不然不會執行
  // 當e被觸發丟進去時，這個async function開始執行，先執行e.preventDefault()預防跳轉
  // 再執行一個async的function，叫lazyLoadPage
  // 而且在執行lazyLoadPage的時候需要代一個route進去
  // 不過這時候我們會發現這個async的function的scope裡沒有route被declare，這時候會朝上層的scope去找，找到async上層的route裡面有「對應的」值，這就是closure
  const onClickHandler = (route) => async (e) => {
    e.preventDefault();
    await lazyLoadPage(route)
    return
  }
  
  // route帶進來之後，帶入switch進去判斷條件，並執行相對應的code
  // import進來的component是放在.default裡面
  // import是async的
  const lazyLoadPage = async (route) => {
    switch(route){
      case 'page2':
        const page2 = await import('./components/Page2');
        setRouteState({
          route:route,
          component:page2.default
        })
        break;
      case 'page3':
        const page3 = await import('./components/Page3');
        setRouteState({
          route:route,
          component:page3.default
        })
        break;
      default:
        setRouteState({
          route:route,
          component:null
        })
        break;
    }
  }

  // page 1一開始就import了
  if (routeState.route==='page1'){
    return <Page1 onClickHandler={onClickHandler} />
  } else {

    // import的component可以用這種語法去render出來
    return <routeState.component onClickHandler={onClickHandler} />
  }
}

export default App;
