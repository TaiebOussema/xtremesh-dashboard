import { AiOutlineDashboard, AiFillDashboard, AiOutlineGold, AiFillGold, AiOutlineTool, AiFillTool } from 'react-icons/ai';
import {  RiAlertLine, RiAlertFill, RiFileChartFill, RiFileChartLine, RiUserSettingsFill, RiUserSettingsLine, RiLogoutCircleLine } from 'react-icons/ri';

import Dashboard from './pages/Dashboard';
import SpeedAir from './pages/SpeedAir';
import Alerts from './pages/Alerts';
import Configuration from './pages/Configuration';
import Analysis from './pages/Analysis';
import Profile from './pages/Profile';






const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: <AiOutlineDashboard/>,
    activeIcon: <AiFillDashboard/>,
    component: Dashboard()
  },
  {
    label: "SpeedAir Panel",
    path: "/speedair",
    icon: <AiOutlineGold/>,
    activeIcon: <AiFillGold/>,
    component: SpeedAir
  },
  {
    label: "Alerts",
    path: "/alerts",
    icon: <RiAlertLine/>,
    activeIcon: <RiAlertFill/>,
    component: Alerts
  },
  {
    label: "Configuration",
    path: "/configuration",
    icon: <AiOutlineTool/>,
    activeIcon: <AiFillTool/>,
    component: Configuration
  },
  {
    label: "Analysis",
    path: "/analysis",
    icon: <RiFileChartLine/>,
    activeIcon: <RiFileChartFill/>,
    component: Analysis
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <RiUserSettingsLine/>,
    activeIcon: <RiUserSettingsFill/>,
    component: Profile
  },
  {
    label: "Sign-Out",
    path: "/sign-out",
    icon: <RiLogoutCircleLine/>,
    activeIcon: <RiLogoutCircleLine/>,
  },
  
];

export default routes;