
import { Navbar } from "keep-react";
import Logo from "../../../static/logo/logo.png"
// import GithubIcon from "../../../static/icons/github_icon.svg";
import GithubLogo from "@mui/icons-material/GitHub"
import { useNavigate } from "react-router-dom";
import HomeLogo from "../../../static/icons/home.gif";

function NavbarComponent({ShowMenuOptions}) {
  const navigation = useNavigate();

  const Home = () => {
    navigation("/");
    window.scrollTo(0, 0);
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
          <Navbar.Container tag="li" className="flex items-center justify-between gap-8">
          {ShowMenuOptions ? (
            
            <span className="flex items-center justify-between gap-1" >
              <Navbar.Link icon={<img src={HomeLogo} style={{width:'1.3em'}} alt="Home" />}  href="/" iconAnimation={false} />
              <a href="/" className="text-gray-700 font-bold hover:text-gray-900">HOME</a>
              </span>
            
          ) : (
            
              <Navbar.Link
                href="https:/github.com/asheerulhaque/schedulify"
                icon={<GithubLogo sx={{ fontSize: '2em' }} />}
              
                iconAnimation={false}
              />
              
          )}
          </Navbar.Container>
        </Navbar.Container>

        
      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarComponent;