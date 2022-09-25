import React from 'react';
import { Link } from "react-router-dom";

export default function NavItem(props) {
    const lineColor = props.lineColor
    return (
        <div className='navigation-bar--item'>
            <Link to={props.url}> 
                <p style={{color:props.titleColor}} className='navigation-bar--item-label'>{props.title}</p>
            </Link>
            <span style={{backgroundColor:lineColor}} className='navigation-bar--item-animation'></span>
        </div>
    );
};


