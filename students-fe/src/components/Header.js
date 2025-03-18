import React, { Component } from "react";

class Header extends Component{
    render(){
        return (
            <div className="text-center">
                <img
                  src="https://e1.pngegg.com/pngimages/682/434/png-clipart-wordcons-todo-text-art.png"
                  alt="imguploading"
                  width="300"
                  className="img-thumbnail"
                  style={{marginTop : "20px"}}
                />
                <hr/>
                <h5>
                    <i>Presents</i>
                </h5>
                <h1>TODO crud  with React + Django</h1>  
            </div>
        );
    }
}

export default Header;