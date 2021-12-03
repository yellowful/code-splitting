import React,{useState,useEffect} from 'react'

// asyncLoadFunction吞了一個function，然後會return一個AsyncComponent
// 一個重點，componentState如果要存一個function或是component，就要把這個component放在function裡。
const asyncLoadFunction = (importComponent) => {
    // 這是要回傳的component，這裡的importComponent對AsyncComponent來說靠side effect進去的
    const AsyncComponent = ({onClickHandler}) => {
        const [componentState,setComponentState] = useState(null);
        useEffect(()=> {
            // useEffect的部份用一個Immediately Invoked Function Expression來立即執行async的importComponent
            (async () => {
                const {default:component} = await importComponent();
                // componentState如果要存一個function或是component，就要把這個component放在function裡。
                setComponentState(()=>component)
            })()
        },[])

        // Component開頭需要大寫
        const Component = componentState
       
        return Component ? <Component onClickHandler={onClickHandler} /> : null
    }
    return AsyncComponent
}

export default asyncLoadFunction
