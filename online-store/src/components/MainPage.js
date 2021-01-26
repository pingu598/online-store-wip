import React from 'react'
import Navigationbar from '../components/Navigationbar'
import Contents from '../components/Contents'

const MainPage = () => {
    return (
        <>
            <Navigationbar/>
            <Contents items={["testObj","testObj","testObj","testObj",
            "testObj","testObj","testObj","testObj",
            "testObj","testObj","testObj","testObj",
            "testObj","testObj","testObj","testObj",
            "testObj","testObj","testObj","testObj", "testObj",
            ]}/>
        </>
    )
}
export default MainPage
