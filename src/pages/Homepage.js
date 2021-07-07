import React, { Fragment, useState } from 'react'
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

const Homepage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Hero />
        </Fragment>
    )
}

export default Homepage
