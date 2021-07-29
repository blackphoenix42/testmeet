import React, {useState} from 'react';

import './Header.css';









const Header = ({currentUser}) => {
    
    let time = new Date().toLocaleTimeString();
    const date1 = new Date().toDateString();
    const [ctime, setctime] = useState(time);
    const updatetime = () => {
        time = new Date().toLocaleTimeString();
        setctime(time);
    }; 
   
    setInterval(updatetime, 1000);
    
    return (
        <div>
            <div className="d-flex">
       <div className="bg-success time float-left">
                <h4 className="text-light text-center">
                    &nbsp;&nbsp;{ctime}
                    <br></br>
                    {date1}
                </h4>
            </div>
            <div className="container">
    
             <img className="logo mt-4" height="130" src="ab.jpg"></img>

                    <div class="vertical float-left mt-4">
                        <h1 className=" mt-3  pl-3 pt-2">Meet</h1>
                    </div>
                </div>
  

        </div>
        </div>
    );
}

export default Header;