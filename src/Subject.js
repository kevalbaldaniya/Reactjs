import React from "react";
class Subject extends React.Component {
    render() {
        var HTML = 70;
        var css = 60;
        var js = 48;
        var react = 65;
        var php = 13;
        var sum = (HTML + css + js + react + php);
        var a1 = sum / 5;
        var msg;

        if (HTML < 18 || css < 18 || js < 18 || react < 18 || php < 18) {
            var myColor = {
                backgroundColor: "red"
            }
             msg = "Failed";
        } else {

            var myColor = {
                backgroundColor: "green",

            }
            msg = a1;
        }
        return (
            <>
                <h2>HTML : 70</h2>
                <h2>CSS : 60</h2>
                <h2>JS : 48</h2>
                <h2>React : 65</h2>
                <h2>Php : 13</h2>
                <h1 style={myColor}>This is a :{msg}</h1>
            </>

        )
    }
}
export default Subject;