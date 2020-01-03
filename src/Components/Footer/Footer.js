import React from "react";
import PanaLogo from "./../../images/logo.png";

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <div style={{backgroundColor:"#12232F",height:"20%",padding:"2% 1px 2% 1px"}}>
                    <center><span style={{color:"white",fontSize:"12px"}} >© 2019 PIAIC. All rights reserved.</span>
                    <img  src={PanaLogo} style={{width:"10%",height:"4%",float:"right",marginTop:"-1.8%"}}/>
                    </center>
                </div>
             
            </div>
        )
    }
}