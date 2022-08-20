import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilUser,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilPeople,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const admin_nav = [
    {
      component: CNavTitle,
      name: 'System Admin',
    },
    {
      component: CNavItem,
      name: 'Dashboard',
      to: '/sysAdmin_Dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Create Account',
      to: '/Create_Account',
      icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'List Of Service Providers',
      to: '/SPList',
      icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'List Of Customers',
      to: '/customerList',
      icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    },

]

export default admin_nav;