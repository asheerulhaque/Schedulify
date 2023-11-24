import { Footer } from 'flowbite-react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from '../../static/logo/logo.png';

const theme = {
  backgroundColor: 'white',
  color: 'black',
}

function FooterSection() {
  return (
    <Footer style={theme} container >
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
                  style={{height:'auto', maxWidth:'12rem'}}
                  src={Logo}
                  alt="Schedulify Logo"
            />
             
           
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Follow us" style={theme}/>
              <Footer.LinkGroup style={theme} col>
                <Footer.Link href="https:/github.com/asheerulhaque/schedulify">Github</Footer.Link>
                <Footer.Link href="https://instagram.com/asheerulhaque">Instagram</Footer.Link> 
                <Footer.Link href="https://x.com/_asheerulhaque">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="about" style={theme}/>
              <Footer.LinkGroup style={theme} col>
                <Footer.Link href="#">Schedulify</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            
            <div>
              <Footer.Title title="Legal" style={theme} />
              <Footer.LinkGroup style={theme} col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Schedulify™" year={2023} style={theme} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            
            <Footer.Icon href="https://instagram.com/asheerulhaque" icon={BsInstagram} style={theme}/>
            <Footer.Icon href="https://x.com/_asheerulhaque" icon={BsTwitter} style={theme}/>
            <Footer.Icon href="https:/github.com/asheerulhaque/schedulify" icon={BsGithub} style={theme}/>
            
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterSection;