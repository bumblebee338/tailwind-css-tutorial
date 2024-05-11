import {
    HiOutlineViewGrid, 
    HiOutlineCube, 
    HiOutlineShoppingCart, 
    HiUser, 
    HiOutlineLogout, 
    HiMail,
    HiCog
} from "react-icons/hi";


const DASHBOARD_NAVIGATION_ITEMS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineCube />

    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiUser />
    },
    {
        key: 'messages',
        label: 'Messages',
        path: '/messages',
        icon: <HiMail />
    },
    {
        key: 'support',
        label: 'Support',
        path: '/support',
        icon: <HiUser />
    }
]

const FOOTER_NAVIGATION_ITEMS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiCog />
    },
    {
        key: 'logout',
        label: 'Logout',
        path: '/logout',
        icon: <HiOutlineLogout />
    }
]


export { DASHBOARD_NAVIGATION_ITEMS, FOOTER_NAVIGATION_ITEMS };