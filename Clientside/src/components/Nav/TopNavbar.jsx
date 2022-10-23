import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import Logo from '../../assets/brand/LogoWhite.png'

import Axios from "axios";
Axios.defaults.withCredentials = true;
import { useNavigate } from "react-router-dom";

export default function TopNavbar() {
  
  const navigate = useNavigate()

  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const logoutUser = ()=>{
    console.log("");
      Axios.get('http://localhost:5000/api/v1/user/logout',{ withCredentials: true }).then((res) =>{
        console.log(res.data)       
        if(res.data.error) {
          alert(res.data.error);
          navigate("/")
          window.location.reload(false);
        }
        else{ 
        alert("User log out sucessfully!");                       
        navigate("/")
        window.location.reload(false);
         }
      })
     }
     var dashboardlink;
     if(logggedusertype=="manager"){
       dashboardlink = "#/mang_dashboard";
     }
     else if(logggedusertype=="admin"){
       dashboardlink ="#/sysAdmin_Dashboard";
     }
     else if (logggedusertype=="serviceProvider"){
       dashboardlink ="#/servPro_Dashboard";
     }
     else {
       dashboardlink ="#/cus_dashboard";
     }

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}> 
            {/* <LogoIcon />
            {/* <img src={Logo} class="rounded w-50 p-1 pointer flexNullCenter" style={{ marginLeft: "-15px" }} alt="..."></img> */}
            <h1 style={{ marginLeft: "15px" }} className="font25 extraBold">
              SLHandyFix
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font20 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Services
              </Link>
            </li>
            <li className="semiBold font20 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Jobs
              </Link>
            </li>
            {/**<li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Blog
              </Link>
            </li>**/}
            {/*<li className="semiBold font20 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Post a Job
              </Link>
            </li>*/}
            <li className="semiBold font20 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact Us
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">

          {(() => { if (loggeduserid == undefined)
           return(
            <li className="semiBold font20 pointer">           
              <a href='/#/login' style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>              
            </li>
           )
            else {
              return(
              <>
            <li className="semiBold font20 pointer">           
            <a onClick={logoutUser} href='' style={{ padding: "10px 30px 10px 0" }}>
             Log out
            </a>              
            </li>
           
            <li className="semiBold font15 pointer flexCenter">
              <a href={dashboardlink} className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Dashboard
              </a>
            </li>
            </>
            )}  
            })()}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


