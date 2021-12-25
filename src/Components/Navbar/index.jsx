import React from 'react'
import './styles.css';
import logo from '../../assets/logo.png'
const navItems = [
    {
        key: 1,
        title: "Home",
        path:"home"
    },
    {
        key: 2,
        title: "About",
        path:"about"
    },
    {
        key: 3,
        title: "Services",
        path:'services'
    },
    {
        key: 4,
        title: "Portfolio",
        path:'portfolio'
    },
    {
        key: 5,
        title: "Skills",
        path:'skills'
    },
    {
        key: 6,
        title: "Experience",
        path:'experince'
    },
    {
        key: 7,
        title: "Blog",
        path:'blog'
    },
    {
        key: 8,
        title: "Testimonial",
        path:'testimonial'
    },
    {
        key: 9,
        title: "Contact",
        path:'contact'
    },
]
function Navbar() {
    return (
        <div className='sidebar'>
            <img src={logo} alt="logo" width={150} className='img-fluid' />
            <ul className='list-unstyled mt-4'>
                {navItems.map(item => (
                    <li className='list_item my-2' key={item.key}><a href={item.path}>{item.title}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar
