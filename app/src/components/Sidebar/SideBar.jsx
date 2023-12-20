import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { BsFillBarChartFill } from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import MessageIcon from "@mui/icons-material/Message";
import GroupsIcon from "@mui/icons-material/Groups";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import HelpIcon from "@mui/icons-material/Help";
import SourceIcon from "@mui/icons-material/Source";
import HomeIcon from "@mui/icons-material/Home";
// import AuthService from "../../services/kc-auth";
import Img from "../../assets/image/site_logo.png";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    path: "/file-manager",
    name: "Curriculum",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/courses",
        name: "Courses",
        icon: <FaBookOpen />,
      },
      {
        path: "/outcomes",
        name: "Outcomes",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Assessment",
        name: "Assessment",
        icon: <AssessmentOutlinedIcon />,
      },
      {
        path: "/Discussion",
        name: "Discussion",
        icon: <MessageIcon />,
      },
      {
        path: "/Announcement",
        name: "Announcement",
        icon: <FaMoneyBill />,
      },
      {
        path: "/Assignment",
        name: "Assignments",
        icon: <FaMoneyBill />,
      },

      {
        path: "/collaboration",
        name: "Collaboration",
        icon: <GroupsIcon />,
      },
    ],
  },
  {
    path: "/resources",
    name: "Resources",
    icon: <SourceIcon />,
  },
  {
    path: "/support",
    name: "Support",
    icon: <HelpIcon />,
    cName: "nav-text",
  },

  // {
  //   path: "/users",
  //   name: "Team",
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: "nav-text",
  // },
  // {
  //   path: "/messages",
  //   name: "Messages",
  //   icon: <MdMessage />,
  // },

  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "Logout",
  //       icon: <FaLock />,
  //       onclick: AuthService.logout,
  //     },

  //   ],
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "just",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            {isOpen && (
              <img src={Img} style={{ height: "32px", width: "32px" }} />
            )}
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {/* EduModeler */}
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars" onClick={toggle}>
              <FaBars />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  // activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
