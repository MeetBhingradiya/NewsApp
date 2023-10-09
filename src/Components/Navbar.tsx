import { NavLink } from "react-router-dom"
import React from "react"
import {
    Home,
    Settings,
    Category,
    Close,
    Groups
} from "@mui/icons-material"
import {
    Slide,
    Dialog,
    DialogActions,
    DialogTitle,
    Button,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import NotInterestedIcon from '@mui/icons-material/NotInterested';
import BusinessIcon from '@mui/icons-material/Business';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import SportsIcon from '@mui/icons-material/Sports';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Navbar({ isCategoryMenuOpen, SetCategoryMenuOpen }) {

    const Links = [
        {
            link: "/Home",
            label: "Home",
            icon: <Home />
        },
        {
            Component: (<div onClick={() => SetCategoryMenuOpen(true)} className={"cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} aria-current="page">
                <Category />
                Categories
            </div>),
        },
        {
            link: "/Settings",
            label: "Settings",
            icon: <Settings />
        }
    ]

    const Categorys = [
        {
            value: "general",
            label: "General",
            icon: Groups
        },
        {
            value: "business",
            label: "Business",
            icon: BusinessIcon
        },
        {
            value: "entertainment",
            label: "Entertainment",
            icon: NotInterestedIcon
        },
        {
            value: "health",
            label: "Health & Safety",
            icon: HealthAndSafetyIcon
        },
        {
            value: "science",
            label: "Science",
            icon: ScienceIcon
        },
        {
            value: "sports",
            label: "Sports",
            icon: SportsIcon
        }
    ]


    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <NavLink to="/Home" className="flex items-center">
                        <img src="/favicon.jpg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">News</span>
                    </NavLink>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <ul className="select-none flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                Links.map((link, index) => {
                                    if (link.link) {
                                        return (
                                            <li key={index}>
                                                <NavLink to={link?.link ? link.link : ""} className={(Link) => `flex gap-2 ${(Link.isActive === true) ? "flex gap-2 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}`} aria-current="page">
                                                    {link?.icon}
                                                    {link.label}
                                                </NavLink>
                                            </li>
                                        )
                                    } else if (link.Component) {
                                        return (
                                            <li key={index}>
                                                {link.Component}
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li key={index}>
                                                [ERROR]
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>

            <Dialog open={isCategoryMenuOpen} onClose={SetCategoryMenuOpen} fullWidth maxWidth={"xs"} TransitionComponent={Transition}>
                <DialogTitle className="select-none">News Categorys</DialogTitle>
                <Divider />
                <List>
                    {
                        Categorys.map((category, index) => {
                            return (
                                <ListItem disablePadding key={index}>
                                    <NavLink to={`/Category/${category.value}`} style={(isActive) => { return { width: "100%", background: isActive.isActive === true ? "rgb(17 24 39)" : ""} }} onClick={() => SetCategoryMenuOpen(false)}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <category.icon className={"dark:text-white"} sx={{ color: "rgb(20 184 166)" }} />
                                            </ListItemIcon>
                                            <ListItemText primary={category.label} />
                                        </ListItemButton>
                                    </NavLink>
                                </ListItem>
                            )
                        })
                    }
                </List>
                <Divider />
                <DialogActions>
                    <Button
                        onClick={() => SetCategoryMenuOpen(false)}
                        color='error'
                        sx={{ display: "flex", gap: "0.2rem", lineHeight: "1.5rem" }}
                    >
                        <Close />
                        Dismiss
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Navbar