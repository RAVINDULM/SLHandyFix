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
      to: '/cus_dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'My Jobs',
      to: '/my_jobs',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    }
]

export default mang_nav;