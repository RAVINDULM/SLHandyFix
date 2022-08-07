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
      name: 'Manager',
    },
    {
      component: CNavItem,
      name: 'Mang_Dashboard',
      to: '/cus_dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Job Request',
      to: '/my_jobs',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    }
]

export default mang_nav;