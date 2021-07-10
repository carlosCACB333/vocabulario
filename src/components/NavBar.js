import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {

    const index = useSelector(state => state.vocabulario.active.index);
    return (
        <ul className="nav justify-content-between shadow p-1">
            <div></div>
            <h3 className='text-white'>vocabulario { index+1}</h3>
           <div className='d-flex'>
                {/* <li className="nav-item">
                    <button className="btn btn-primary mx-1">Active</button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-success mx-1">Active</button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-danger mx-1">Active</button>
                </li>
                <li className="nav-item">
                    <button className="btn btn-warning mx-1">Active</button>
                </li> */}
           </div>
            
        </ul>
    )
}

export default NavBar
