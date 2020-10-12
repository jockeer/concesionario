import React from 'react'
import SideBar from './layout/SideBar'
import Header from './layout/Header'

const Home = () => {
    return ( 
        <div className="container-app">
            <SideBar />
            <div className="container-principal">
                <Header titulo='' />
            </div>
        </div>
     );
}
 
export default Home;