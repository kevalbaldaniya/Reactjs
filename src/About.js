import React from "react";

import Header from "./Header";
import Footer from "./Footer";

class About extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                   <h1>I am page content</h1>
                <Footer/>
            </div>
        )
    }
}
export default About;