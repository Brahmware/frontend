import {
    DashboardIcon,
    AboutUsIcon,
    PricingIcon,
    ServicesIcon,
    WorksIcon,
    CareerIcon,
    LeadsIcon,
    UsersIcon
} from "../../assets/icons";

import Home from "../../pages/MissionControl/Home";
import Leads from "../../pages/MissionControl/Leads";
import Users from "../../pages/MissionControl/Users";

import AboutUs from "../../pages/MissionControl/AboutUs";
import Career from "../../pages/MissionControl/Career";
import Pricing from "../../pages/MissionControl/Pricing";
import Services from "../../pages/MissionControl/Services";
import Works from "../../pages/MissionControl/Works";

export const drawerItems = [
    {
        name: 'Home',
        icon: <DashboardIcon />,
        component: Home,
        path: ''
    },
    {
        name: 'Leads',
        icon: <LeadsIcon />,
        component: Leads,
        path: '/leads'
    },
    {
        name: 'Brahmnauts',
        icon: <UsersIcon />,
        component: Users,
        path: '/brahmnauts'
    },
];

export const editContents = [
    {
        name: 'About',
        icon: <AboutUsIcon />,
        component: AboutUs,
        path: '/about'
    },
    {
        name: 'Pricing',
        icon: <PricingIcon />,
        component: Pricing,
        path: '/pricing'
    },
    {
        name: 'Services',
        icon: <ServicesIcon />,
        component: Services,
        path: '/services'
    },
    {
        name: 'Works',
        icon: <WorksIcon />,
        component: Works,
        path: '/works'
    },
    {
        name: 'Career',
        icon: <CareerIcon />,
        component: Career,
        path: '/career'
    },
];