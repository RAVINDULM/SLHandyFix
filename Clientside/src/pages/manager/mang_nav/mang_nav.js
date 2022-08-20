import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilReportSlash,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilUser,
  cilUserFollow,
  cilUserX,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const mang_nav = [
    {
      component: CNavTitle,
      name: 'Manager',
    },
    {
      component: CNavItem,
      name: 'Dashboard',
      to: '/mang_dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    // {
    //   component: CNavItem,
    //   name: 'Job Request',
    //   to: '/my_jobs',
    //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // },
    {
      component: CNavItem,
      name: 'Account Request',
      to: '/acc_req',
      icon: <CIcon icon={cilUserFollow} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Reports',
      to: '/my_jobs',
      icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    }
    ,
    {
      component: CNavItem,
      name: 'Complaints',
      to: '/complaints',
      icon: <CIcon icon={cilReportSlash} customClassName="nav-icon" />,
    }
    ,
    {
      component: CNavItem,
      name: 'Services',
      to: '/services',
      icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    }
    ,
    {
      component: CNavItem,
      name: 'Advertisements',
      to: '/advertisments',
      icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    }
    ,
    {
      component: CNavItem,
      name: 'Service Providers',
      to: '/serviceproviders',
      icon: <CIcon icon={cilUserX} customClassName="nav-icon" />,
    }
    ,
    {
      component: CNavItem,
      name: 'Customers',
      to: '/customers',
      icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    }
]

export default mang_nav;