import React, { Fragment,useState,useEffect } from 'react';
import {useSelector} from 'react-redux'
import { MENUITEMS } from './menu';
import { ArrowRight, ArrowLeft } from 'react-feather';
import {Link} from 'react-router-dom'

const Sidebar = (props) => {

    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [margin, setMargin] = useState(0);
    const wrapper = 'compact-wrapper';
    useEffect(() => {
    const currentUrl = window.location.pathname;
    mainmenu.filter(items => {
        if (items.path === currentUrl)
            setNavActive(items)
        if (!items.children) return false
        items.children.filter(subItems => {
            if (subItems.path === currentUrl)
                setNavActive(subItems)
            if (!subItems.children) return false
            subItems.children.filter(subSubItems => {
                if (subSubItems.path === currentUrl){
                    setNavActive(subSubItems)
                    return true
                }
                else{
                    return false
                }
            })
            return subItems
        })
        return items
    })

     // eslint-disable-next-line
    }, []);

    const setNavActive = (item) => {
      MENUITEMS.filter(menuItem => {
          if (menuItem !== item)
              menuItem.active = false
          if (menuItem.children && menuItem.children.includes(item))
              menuItem.active = true
          if (menuItem.children) {
              menuItem.children.filter(submenuItems => {
                  if (submenuItems.children && submenuItems.children.includes(item)) {
                      menuItem.active = true
                      submenuItems.active = true
                      return true
                  }
                  else{
                      return false
                  }
              })
          }
          return menuItem
      })
      item.active = !item.active
      setMainMenu({ mainmenu: MENUITEMS })
  }
  const toggletNavActive = (item) => {        
    if (!item.active) {
        MENUITEMS.forEach(a => {
            if (MENUITEMS.includes(item))
                a.active = false
            if (!a.children) return false
            a.children.forEach(b => {
                if (a.children.includes(item)) {
                    b.active = false
                }
                if (!b.children) return false
                b.children.forEach(c => {
                    if (b.children.includes(item)) {
                        c.active = false
                    }
                })
            })
        });
    }
    item.active = !item.active
    setMainMenu({ mainmenu: MENUITEMS })
}

  const scrollToRight = () => {
    const elmnt = document.getElementById("mainnav");
    const menuWidth = elmnt.offsetWidth;
    if (menuWidth >= '992') {
        setMargin(-1000)
        document.querySelector(".right-arrow").classList.add("d-none")
        document.querySelector(".left-arrow").classList.remove("d-none")
    }
  }

  const scrollToLeft = () => {
    if (margin === -1000) {
        setMargin(0)
        document.querySelector(".left-arrow").classList.add("d-none")
        document.querySelector(".right-arrow").classList.remove("d-none")
    }
  }

  return (
      <Fragment>
        <header className="main-nav">
          <div className="logo-wrapper">
            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}><img className="img-fluid" src={require("../../assets/images/logo/logo.png")} alt=""/></Link></div>
          <div className="logo-icon-wrapper">
            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}><img className="img-fluid" src={require("../../assets/images/logo/logo-icon.png")} alt=""/></Link></div>
          <nav>
            <div className="main-navbar">
              <div className="left-arrow" onClick={scrollToLeft}><ArrowLeft/></div>
            
              <div id="mainnav" style={wrapper === 'horizontal-wrapper' ?  { 'marginLeft': margin + 'px' } : { margin: '0px' }}>
                <ul className="nav-menu custom-scrollbar" >
                  <li className="back-btn">
                    <div className="mobile-back text-right"><span>Back</span><i className="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                  </li>
                  {
                  MENUITEMS.map((menuItem, i) => 
                  <li className="dropdown" key={i}>
                  {(menuItem.type === 'sub') ?
                    <a  className={`nav-link menu-title  ${menuItem.active ? 'active' : ''}`} href="#javascript" onClick={() => toggletNavActive(menuItem)}>
                      <menuItem.icon/>
                      <span>{menuItem.title}</span>
                      <div className="according-menu">
                        {menuItem.active ?
                          <i className="fa fa-angle-down"></i>
                          : <i className="fa fa-angle-right"></i>
                        }
                      </div>
                    </a>
                    :
                      <Link to={menuItem.path} className={`nav-link menu-title  ${menuItem.active ? 'active' : ''}`} href="#javascript" onClick={() => toggletNavActive(menuItem)}>
                          <menuItem.icon/>
                          <span>{menuItem.title}</span>
                          <div className="according-menu">
                              <i className="fa fa-angle-right"></i>
                          </div>
                      </Link>}
                    {menuItem.children ?
                    
                    <ul className="nav-submenu menu-content"
                        style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {display: "none"}}>
                        
                        {menuItem.children.map((childrenItem, index) => {
                          
                          return(
                          <li key={index}>

                            {(childrenItem.type === 'sub') ?
                                  <a className={`${childrenItem.active ? 'active' : '' }` } href="#javascript" onClick={() => toggletNavActive(childrenItem)}>{childrenItem.title}
                                      <span className="sub-arrow">
                                      <i className="fa fa-chevron-right"></i>
                                      </span>
                                      <div className="according-menu">
                                          {childrenItem.active ?
                                          <i className="fa fa-angle-down"></i>
                                          : <i className="fa fa-angle-right"></i>
                                          }
                                      </div>
                                  </a>
                              :''}

                            {(childrenItem.type === 'link') ?
                              <Link to={childrenItem.path} className={`${childrenItem.active ? 'active' : '' }` } onClick={() => toggletNavActive(childrenItem)}>{childrenItem.title}</Link>
                              :''}

                            {childrenItem.children ?
                              <ul className="nav-sub-childmenu submenu-content"
                                  style={childrenItem.active ? { display: "block" } : {display: "none"}}   
                                  >
                                  {childrenItem.children.map((childrenSubItem, key) =>
                                  <li key={key}>
                                      {(childrenSubItem.type === 'link') ?
                                      <Link to={childrenSubItem.path} className={`${childrenSubItem.active ? 'active' : '' }` } onClick={() => toggletNavActive(childrenSubItem)}>{childrenSubItem.title}</Link>
                                      : ''}
                                  </li>
                                  )}
                              </ul>
                            :""}

                            </li>
                            )
                          })}
                    </ul>
                    : ''}
                  </li>
                  )}
                </ul>
              </div>
              <div className="right-arrow" onClick={scrollToRight}><ArrowRight/></div>
            </div>
          </nav>
        </header>  
      </Fragment>
  );
}

export default Sidebar;