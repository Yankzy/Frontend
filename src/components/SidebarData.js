import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import * as Io from 'react-icons/io';
import * as Fc from "react-icons/fc";
import './Navbar.css';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Ai.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Time Portal',
    path: '/timesheet',
    icon: <Fc.FcAlarmClock />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Fa.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <Io.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Fa.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Fc.FcDecision />,
    cName: 'nav-text'
  },

  {
    title: 'Employee',
    path: '/employee',
    icon: <Io.IoMdPeople />,
    cName: 'nav-text'
  }
];