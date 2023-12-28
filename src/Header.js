import React from "react"

class Header extends React.Component{
    render() {
        var a = 2;
        msg = " ";

        if(a % 2 == 0){
        var  msg = "Even number" ;
        var show = {
            backgroundColor:"green",
        };
        }else {
        var msg = "Odd numbar";
       var show ={ backgroundColor:"red",
        }
    }
        return(
           <h1 style={show}>value is: {msg}</h1>
            
        )
    
    }
}
export default Header;