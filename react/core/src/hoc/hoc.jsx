import React from "react";

function WithBlueBorder(WrappedComponent){
    return function EnhancedComponent(props){
        return (
            <div style={{border:"red", padding:"10px"}}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default WithBlueBorder; 