import React from "react";
import { Navbar } from "keep-react";
import Logo from "../../../static/logo/logo.png"
import GithubLogo from "@mui/icons-material/GitHub"
import { useNavigate } from "react-router-dom";
import HomeLogo from "../../../static/icons/home.gif";
import LogOutIcon from "@mui/icons-material/Logout";
import config from "../../../config";

function NavbarComponent({ ShowHomeOptions, ShowLoginOptions, ShowDashboardOptions }) {
  const navigation = useNavigate();

  const Home = () => {
    navigation("/");
    window.scrollTo(0, 0);
  }
  
  const handleLogout = () => {
    localStorage.removeItem(config.USERNAME_KEY);
    localStorage.removeItem(config.EMAIL_KEY);
    localStorage.removeItem(config.TOKEN_KEY);
    localStorage.removeItem(config.USER_ID_KEY);
    localStorage.removeItem(config.IS_LOGGED_IN_KEY);
  }


  return (
    <Navbar fluid={true} rounded={true} bordered={true} className="!py-5">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <img
            src={Logo}
            alt="Schedulify Logo"
            width="50%"
            onClick={Home}
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>


        <Navbar.Container tag="ul" className="lg:flex items-center justify-between gap-8">

          {ShowHomeOptions ? (
            <Navbar.Container tag="li" className="flex items-center justify-between gap-8">
              <Navbar.Link
                href="https:/github.com/asheerulhaque/schedulify"
                icon={<GithubLogo sx={{ fontSize: '2em' }} />}
                
                iconAnimation={false}
                />
            </Navbar.Container>
          ) : null}

          {ShowLoginOptions ? (
            <Navbar.Container tag="li" className="flex items-center justify-between gap-8">
              <span className="flex items-center justify-between gap-1" >
                <Navbar.Link icon={<img src={HomeLogo} style={{ width: '1.3em' }} alt="Home" />} href="/" iconAnimation={false} />
                <a href="/" className="text-gray-700 font-bold hover:text-gray-900">HOME</a>
              </span>
            </Navbar.Container>

          ) : null}


          {ShowDashboardOptions ? (
            <Navbar.Container tag="li" className="flex items-center justify-between gap-8">
              <span className="flex items-center justify-between gap-1" >
                <Navbar.Link icon={<LogOutIcon/>} href="/user/logout" iconAnimation={false} onClick={handleLogout()} />
                <a href="/user/logout" className="text-gray-700 font-bold hover:text-gray-900" onClick={handleLogout()}>Log Out</a>
              </span>
            </Navbar.Container>
          ) : null
          }


        </Navbar.Container>


      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarComponent;