import React, { useState } from 'react'
import "./Sidebar.css"
import {
    FaBars,
    FaRegChartBar,
    FaShoppingBag,
    FaTh,
    FaUserAlt,
} from "react-icons/fa"
import { NavLink } from 'react-router-dom'



function Sidebar({ children }) {


    const [isOpen, setisOpen] = useState(false)
    const toggle = () => setisOpen(!isOpen)

    const menuItem = [
        {
            path: "/userprofile/dashboard",
            name: "Dashboard",
            icon: <FaUserAlt />
        },
        {
            path: "/userprofile/payments",
            name: "Payments",
            icon: <FaTh />
        },
        {
            path: "/userprofile/products",
            name: "Products",
            icon: <FaShoppingBag />
        },
        {
            path: "/userprofile/marketview",
            name: "Charts",
            icon: <FaRegChartBar />
        },

    ]


    return (
        <div id='container'>
            <div style={{ width: isOpen ? "100px" : "45px" }} id='sidebar'>
                <div id='top_section'>
                    <div style={{ marginLeft: isOpen ? "45px" : "-5px" }} id='bars'>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} id="link" activeclassName="active">
                            <div id='icon'>{item.icon}</div>
                            <div id='link_text' style={{ fontSize: "10px" }}>{item.name}</div>

                        </NavLink>
                    ))
                }

                
            </div>

        </div>
    )
}

export default Sidebar  