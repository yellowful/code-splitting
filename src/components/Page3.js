import React from 'react'
import OneOOne from '../101.jpg'

const Page3 = ({onClickHandler}) => {
    
    return (
        <div className="w-100 vh-100 flex flex-column items-center bg-moon-gray pt5">
            <div className="tc w5 mv2">
                <img src={OneOOne} alt="101" />
            </div>
            <div className="tc mv2">
                This is page 3
            </div>

            <div className="w-100 mv2 tc">
                <a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray mh4" href="#0" onClick={onClickHandler('page1')} >page 1</a>
                <a className="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray mh4" href="#0" onClick={onClickHandler('page2')}>page 2</a>
                <span className={`f6 ph3 pv2 mb2 dib white bg-silver mh4`} >page 3</span>
            </div>
        </div>
    )
}

export default Page3