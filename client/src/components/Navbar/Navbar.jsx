
import { Navbar } from "keep-react";
// import { CaretDown } from "phosphor-react";
import Logo from "../../static/logo/logo.png"
import GithubIcon from "../../static/icons/github_icon.svg";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} rounded={true} bordered={true} className="!py-5">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Brand>
          <img
            src={Logo}
            alt="Schedulify Logo"
            width="50%"
          />
        </Navbar.Brand>
        {/* This is a responsive navbar for sidemenu options opened on click of the hamburger icon. */}
        {/* <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 xl:!w-1/6 lg:!w-2/6 md:!w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link
              linkName="Home"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link
              linkName="Projects"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link
              linkName="Blogs"
              icon={<CaretDown size={20} />}
              className="!py-0"
            />
            <Navbar.Link linkName="News" className="!py-0" />
            <Navbar.Link linkName="Resources" className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse> */}
        
        <Navbar.Container className="flex gap-1">
               <a href="https:/github.com/asheerulhaque/schedulify">
                        <img src={GithubIcon} alt="Github Icon" width="40" title="Source Code" />  
               </a>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
