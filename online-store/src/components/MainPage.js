import React from 'react'
import Navigationbar from '../components/Navigationbar'
import Contents from '../components/Contents'

const MainPage = () => {
    return (
        <>
            <Navigationbar/>
            <Contents items={["hello", "hendlo", "hend", "yes", "hehe",
            "haha", "helo", "helo", "helo", "haha", "helo", "helo", "helo",
            "haha", "helo", "helo", "helo", "haha", "helo", "helo", "helo"
            ]}/>
        </>
    )
}
export default MainPage
