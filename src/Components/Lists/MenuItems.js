import About from "../../Pages/About";
import Projects from "../../Pages/Projects";
import Art from "../../Pages/Art";
import Contact from "../../Pages/Contact";
import WIP from "../../Pages/WIP";

const menuItems = [
    {
        title: 'About',
        path: '/about',
        classes: 'menu-item',
        exact: true,
        main: <About/>,
    },
    {
        title: 'Projects',
        path: '/projects',
        classes: 'menu-item',
        exact: true,
        main: <Projects/>,
    },
    {
        title: 'Art',
        path: '/art',
        classes: 'menu-item art-item',
        exact: true,
        main: <WIP/>,
    },
    {
        title: 'Contact',
        path: '/contact',
        classes: 'menu-item',
        exact: true,
        main: <WIP/>,
    },
]

export default menuItems;