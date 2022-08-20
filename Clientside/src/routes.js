import React from 'react'
//=====================================================================================================================================================
// ===================================================== Project related routes =======================================================================
//=====================================================================================================================================================


// Customer routes
const Cus_Dashboard = React.lazy(() => import('./pages/customer/cus_dashboard/cusDashboard'))
const MyJobs = React.lazy(() => import('./pages/customer/myjobs'))
const Cus_Profile = React.lazy(() => import('./pages/customer/cusProfile'))
const Cus_EditProfile = React.lazy(() => import('./pages/customer/cusEditProfile'))
const Cus_Services = React.lazy(() => import('./pages/customer/cusServices'))
const Cus_viewSPprofile = React.lazy(() => import('./pages/customer/cusViewSPprofile'))
const Cus_placeJob = React.lazy(() => import('./pages/customer/cusPlaceJob'))
const Cus_jobAD = React.lazy(() => import('./pages/customer/cusJobAD'))
const Cus_postAD = React.lazy(() => import('./pages/customer/cusPostAdvertisement'))
const Cus_viewOwnAD = React.lazy(() => import('./pages/customer/cusViewOwnAD'))
const Cus_doReview = React.lazy(() => import('./pages/customer/cusDoReview'))

// Manager routes
const Mang_Dashboard = React.lazy(() => import('./pages/manager/mang_dashboard/mangDashboard'))
const Acc_Req = React.lazy(() => import('./pages/manager/mang_req/mangAccreq'))
const Complain = React.lazy(() => import('./pages/manager/mang_req/mangComplain'))
const Services = React.lazy(() => import('./pages/manager/mang_req/mangService'))
const SerReports = React.lazy(() => import('./pages/manager/mang_req/mangSerReport'))
const MonReports = React.lazy(() => import('./pages/manager/mang_req/mangMonReport'))
const Advertisments = React.lazy(() => import('./pages/manager/mang_req/mangAdd'))
const ServiceProvider = React.lazy(() => import('./pages/manager/mang_req/mangSP'))
const Customer = React.lazy(() => import('./pages/manager/mang_req/mangCus'))
const AccAdd = React.lazy(() => import('./pages/manager/mang_form/mangAccAdd'))
const SerAdd = React.lazy(() => import('./pages/manager/mang_form/mangSerAdd'))
const AdvAdd = React.lazy(() => import('./pages/manager/mang_form/mangAdvAdd'))
const SerView= React.lazy(() => import('./pages/manager/mang_form/serview'))
const SerUpdate= React.lazy(() => import('./pages/manager/mang_form/serupdate'))

// System admin routes
const SysAdmin_Dashboard = React.lazy(() => import('./pages/sysAdmin/sysDashboard'))

// Service provider
const ServPro_Dashboard = React.lazy(() => import('./pages/serviceProvider/servPro_dashboard/servProDashboard'))



//=====================================================================================================================================================
// ===================================================== Template related routes =======================================================================
//=====================================================================================================================================================

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Employees = React.lazy(() => import('./views/employees/Employees'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' }, // this must be changed 

  // Customer paths
  { path: '/cus_dashboard', name: 'My Dashboard', element: Cus_Dashboard },
  { path: '/cus_services', name: 'My Services', element: Cus_Services },
  { path: '/cus_profile', name: 'My Profile', element: Cus_Profile },
  { path: '/cus_editprofile', name: 'Edit Profile', element: Cus_EditProfile },
  { path: '/cus_viewSPprofile', name: 'Service Provider Details', element: Cus_viewSPprofile },
  { path: '/cus_placeJobs', name: 'Place job', element: Cus_placeJob },
  { path: '/cus_jobAD', name: 'Job Advertisements', element: Cus_jobAD },
  { path: '/cus_postAD', name: 'Post job advertisements', element: Cus_postAD },
  { path: '/cus_viewOwnAD', name: 'View Advertisement', element: Cus_viewOwnAD },
  { path: '/cus_doReview', name: 'Review', element: Cus_doReview },

  // Manager paths
  { path: '/mang_dashboard', name: 'Manager Dashboard', element: Mang_Dashboard },
  { path: '/acc_req', name: 'Account Requests', element: Acc_Req },
  { path: '/complaints', name: 'Complaints', element: Complain },
  { path: '/services', name: 'Services', element: Services },
  { path: '/reports/servicereports', name: 'Service Reports', element: SerReports },
  { path: '/reports/monthlyreports', name: 'Monthly Reports', element: MonReports },
  { path: '/advertisments', name: 'Advertisments', element: Advertisments },
  { path: '/serviceproviders', name: 'Service Providers', element: ServiceProvider },
  { path: '/customers', name: 'Customers', element: Customer},
  { path: '/acc_req/addaccount', name: 'Add New Account', element: AccAdd},
  { path: '/services/addservice', name: 'Add New Service', element: SerAdd},
  { path: '/advertisments/addAdvertisement', name: 'Accept Advertisment', element: AdvAdd},
  { path: '/serviceproviders/viewserviceproviders', name: 'View Service Providers', element: SerView },
  { path: '/serviceproviders/updateserviceproviders', name: 'Update Service Providers', element: SerUpdate },

   // Service provider paths
   { path: '/servPro_Dashboard', name: 'Service provider Dashboard', element: ServPro_Dashboard },

  // System admin paths
  { path: '/sysAdmin_Dashboard', name: 'System Admin Dashboard', element: SysAdmin_Dashboard },

  
  // Templates path elements 
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/employees', name: 'Employees', element: Employees },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
