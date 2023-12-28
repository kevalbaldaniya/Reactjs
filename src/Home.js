import React from "react";


class Home extends React.Component{
    render(){
       var a = 10;
       msg = " ";
       
       if(a == 0){
       var msg = "zero";

       }else if(a > 0){
       var msg = "Positive";
       var show = {
            backgroundColor :"green",
        }

       } else {
        var msg = "Negetive";
        var show = {
            backgroundColor :"red",
        }
       }

        return(
           <React.Fragment>
            <h1 style={show}>Value is : {msg}</h1>
           </React.Fragment>
        )
    }
}
export default Home;