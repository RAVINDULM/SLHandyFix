import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const mang_nav = [
    {
      component: CNavTitle,
      name: 'System Admin',
    },
    {
      component: CNavItem,
      name: 'SysAdmin_Dashboard',
      to: '/sysAdmin_Dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Create Account',
      to: '/Create_Account',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    }
]

export default mang_nav;