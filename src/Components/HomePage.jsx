import React from 'react'
import { Blackbox } from './Blackbox/Blackbox';
import { Footer } from './footer/Footer';
import { Partners } from './Partners/Partners';
import Slideshow from './slideshow/Slideshow';

const HomePage = () => {
    return (
        <>
            <Slideshow />
            <Partners />
            <Blackbox />
            <Footer/>   
        </>
    )
}

export { HomePage };
