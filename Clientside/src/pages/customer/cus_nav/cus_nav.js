import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBell,
  cilBookmark,
  cilBriefcase,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilMenu,
  cilNotes,
  cilPaperclip,
  cilParagraph,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilUserPlus,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const mang_nav = [
    {
      component: CNavTitle,
      name: 'Customer',
    },
    {
      component: CNavItem,
      name: 'My Dashboard',
      to: '/cus_dashboard',
      icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'My Profile',
      to: '/cus_profile',
      icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'My Services',
      to: '/cus_services',
      icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    },
    // {
    //   component: CNavItem,
    //   name: 'Edit Profile',
    //   to: '/cus_editprofile',
    //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // },
    // {
    //   component: CNavItem,
    //   name: 'Service Provider Details',
    //   to: '/cus_viewSPprofile',
    //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // },
    {
      component: CNavItem,
      name: 'Place jobs',
      to: '/cus_placeJobs',
      icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Post job advertisements',
      to: '/cus_postAD',
      icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Job Advertisement',
      to: '/cus_jobAD',
      icon: <CIcon icon={cilPaperclip} customClassName="nav-icon" />,
    },
    // {
    //   component: CNavItem,
    //   name: 'Recently placed jobs',
    //   to: '/cus_recentJob',
    //   icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
    // },


    {
      component: CNavItem,
      name: 'Recently place job',
      to: '/cus_recentJob',
      icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
    },

    // {
    //   component: CNavItem,
    //   name: 'Review',
    //   to: '/cus_doReview',
    //   icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    // },
    // {
    //   component: CNavItem,
    //   name: 'View Advertisement',
    //   to: '/cus_viewOwnAD',
    //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    // },
    // {
    //   component: CNavItem,
    //   name: 'My Jobs',
    //   to: '/my_jobs',
    //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // }
]

export default mang_nav;