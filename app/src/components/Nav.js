import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
const MenuLink = ({label, to, onlyExactWhenActive}) => {
    return (<Route path={to} exact={onlyExactWhenActive} children={({ match }) => {
        var active = match ? 'active' : ''
        return (
            <li className={`nav-item ${active}`}>
                <Link to={to} exact={onlyExactWhenActive} className="nav-link">{label}</Link>
            </li>
        )
    }} />)
}

const menus = [
    {
        to: "/",
        name: "Trang chủ",
        exact: true
    },
    {
        to: "/setting_text",
        name: "Text Sizing",
        exact: false
    },
    {
        to: "/todolist",
        name: 'To do list',
        exact: false
    },
    {
        to: "/todolist_redux",
        name: 'To do list(Redux)',
        exact: false
    },
    {
        to: "/shopcart",
        name: 'Shop Cart',
        exact: false
    },
    {
        to: "/productlist",
        name: 'Product List(Call API)',
        exact: false
    }
]

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item">
                            <NavLink to="/" className="nav-link" href="#">Trang chủ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/setting_text" className="nav-link" href="#">TextSizing</NavLink>
                        </li> */}
                        {this.showMenu(menus)}
                    </ul>
                </div>
            </nav>
        )
    }
    showMenu = (menus) => {
        var result = null
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return <MenuLink key={index} to={menu.to} label={menu.name} onlyExactWhenActive={menu.exact} />
            })
        }
        return result
    }
}
