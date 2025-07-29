import { useState } from 'react';
import MenuAndFooter from '../Homepage/ComponentShow/MenuAndFooter';
import { Outlet } from 'react-router-dom';
import Footer from '../Homepage/ComponentShow/Footer';

const Mainlayout = (props) => {
    
    return (
        <>
        <MenuAndFooter />
        <Outlet classname="relative" />
        <Footer />
        </>
    );
};
export default Mainlayout;