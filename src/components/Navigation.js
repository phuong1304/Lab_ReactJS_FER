import React from "react"

// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Icon from '@mui/material/Icon';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import { Link } from "react-router-dom";
;
//style={{ backgroundColor: theme.backgroundColor, color: theme.color }}  style={{ color: theme.color }}

export default function Navigation() {
    return (

        <div className="header">

            <nav >
                <a class="logo">
                    <img src="assets/logo/logo.png" class="logo-img" alt="" />
                    <p>PHIM PHE PHA</p>
                </a>
                <ul >
                    <li><Link to="/" ><Icon className="menu-icon"><HomeSharpIcon /></Icon>Home</Link></li>
                    <li to="/about"><Link to="/about"><Icon className="menu-icon"><InfoSharpIcon /></Icon>About</Link></li>
                    <li to="/news"><Link to="/news"><Icon className="menu-icon"><NewspaperSharpIcon />drv</Icon>News</Link></li>
                    <li to="/contact" ><Link to="/contact"><Icon className="menu-icon"><ContactPhoneSharpIcon />contacts</Icon>Contact</Link></li>
                </ul>

            </nav>
        </div >

        // <div className="header">
        //     <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color}} >
        //         <ul>
        //             <li><a className="active" href="#home" style={{ color: theme.color}} >Home</a></li>
        //             <li><a href="#news" style={{ color: theme.color}}>News</a></li>
        //             <li><a href="#about" style={{ color: theme.color}}>About</a></li>
        //             <li><a href="#contact" style={{ color: theme.color}}>Contact</a></li>
        //             <li></li>
        //         </ul>
        //         {<div style={{ position: 'relative' }}>
        //             <a className='switch-mode' href='#' onClick={toggle}
        //                 style={{
        //                     backgroundColor: theme.backgroundColor,
        //                     color: theme.color,
        //                     outline: 'none'
        //                 }} data-testid="toggle-theme-btn"
        //             >
        //                 Switch Nav to {!dark ? 'Dark' : 'Light'} mode
        //             </a>
        //         </div> }
        //     </nav>
        // </div>


    )

}

