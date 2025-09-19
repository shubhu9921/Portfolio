/* eslint-disable */
import { BiCodeAlt, BiServer, BiMobileAlt } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiMongodb } from "react-icons/si"; // Added valid DB icons

export const servicesData = [
    {
        id: 1,
        title: 'Frontend Development',
        icon: <FaReact />
    },
    {
        id: 2,
        title: 'Backend Development',
        icon: <BiServer />
    },
    {
        id: 3,
        title: 'Java & Spring Boot Development',
        icon: <FaJava />
    },
    {
        id: 4,
        title: 'REST API Development',
        icon: <BsCodeSlash />
    },
    {
        id: 5,
        title: 'Database Management (MySQL, MongoDB)',
        icon: <SiMysql /> // you can swap with <SiMongodb /> if you prefer
    },
    {
        id: 6,
        title: 'MERN Stack Development',
        icon: <FaNodeJs />
    },
    {
        id: 7,
        title: 'Responsive Web Design',
        icon: <BiMobileAlt />
    },
    {
        id: 8,
        title: 'Custom Web Applications',
        icon: <BiCodeAlt />
    }
]
