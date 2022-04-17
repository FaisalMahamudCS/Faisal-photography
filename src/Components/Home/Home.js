import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Work></Work>
            <Footer></Footer>
        </div>
    );
};

export default Home;