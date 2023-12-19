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
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MessageIcon from '@mui/icons-material/Message';
// import AuthService from "../../services/kc-auth";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  
  {
    path: "/file-manager",
    name: "Courses",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/Home",
        name: "Add course ",
        icon: <FaBookOpen />
      },
      {
        path: "/Assessment",
        name: "Assessment",
        icon: <AssessmentOutlinedIcon/>
      },
      {
        path:"/Discussion",
        name:"Discussion",
        icon: <MessageIcon/>
      },
      {
        path: "/Announcement",
        name: "Announcement",
    },
    {
      path: "/bigbluebutton",
      name: "bigbluebutton",
    },
      {
        path: "/Settings",
        name: "Syllabus",
        icon: <FaBookOpen />
      },
      // {
      //   path:"/https://mui.com/",
      //   name: "Bigbluebutton",
      // },

      {
        path: "/Assignment",
        name: "Assignments",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BsFillBarChartFill />,
  },
  {
    path: "/users",
    name: "Team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  
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
  {
    path: "/saved",
    name: "Support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
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

            <div className="bars"  onClick={toggle} >
              <FaBars  />
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
