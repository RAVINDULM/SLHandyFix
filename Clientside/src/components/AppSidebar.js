import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

import { logoNegative } from "src/assets/brand/logo-negative";
import { sygnet } from "src/assets/brand/sygnet";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Logo from "../assets/brand/LogoWhite.png";
// sidebar nav config

import navigation from "../_nav";
import manag_nav from "../pages/manager/mang_nav/mang_nav";
import servPro_nav from "../pages/serviceProvider/servProv_nav/servProv_nav";
import cus_nav from "../pages/customer/cus_nav/cus_nav";
import sysAdmin_nav from "../pages/sysAdmin/sysAdmin_nav/sysAdmin_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  // return(
  //   <CSidebar
  //     position="fixed"
  //     unfoldable={unfoldable}
  //     visible={sidebarShow}
  //     onVisibleChange={(visible) => {
  //       dispatch({ type: 'set', sidebarShow: visible })
  //     }}
  //   >
  //     <CSidebarBrand className="d-none d-md-flex" to="/">
  //       <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
  //       <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
  //     </CSidebarBrand>
  //     <CSidebarNav>
  //       <SimpleBar>

  //         <AppSidebarNav items={navigation} />

  //       </SimpleBar>
  //     </CSidebarNav>
  //     <CSidebarToggler
  //       className="d-none d-lg-flex"
  //       onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
  //     />
  //   </CSidebar>
  // )
  if (logggedusertype == "manager") {
    return (
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: "set", sidebarShow: visible });
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CIcon className="sidebar-brand-full" icon={Logo} height={35} />
          <img src={Logo} class="rounded w-100 p-3 " alt="..."></img>
          <CIcon className="sidebar-brand-narrow" icon={Logo} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={manag_nav} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() =>
            dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        />
      </CSidebar>
    );
  } else if (logggedusertype == "admin") {
    return (
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: "set", sidebarShow: visible });
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CIcon className="sidebar-brand-full" height={35} />
          <img src={Logo} class="rounded w-100 p-3 " alt="..."></img>
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={sysAdmin_nav} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() =>
            dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        />
      </CSidebar>
    );
  } else if (logggedusertype == "serviceProvider") {
    return (
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: "set", sidebarShow: visible });
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CIcon className="sidebar-brand-full" height={35} />
          <img src={Logo} class="rounded w-100 p-3 " alt="..."></img>
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={servPro_nav} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() =>
            dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        />
      </CSidebar>
    );
  } else if (logggedusertype == "customer") {
    return (
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: "set", sidebarShow: visible });
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CIcon className="sidebar-brand-full" height={35} />
          <img src={Logo} class="rounded w-100 p-3 " alt="..."></img>
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={cus_nav} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() =>
            dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        />
      </CSidebar>
    );
  } else {
    alert("User type not found!");
  }
};

export default React.memo(AppSidebar);
