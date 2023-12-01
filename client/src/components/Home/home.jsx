import React from "react";
import About from "./About/about";
import CardComponent from "./RoleCards/CardComponent";
import FooterSection from "./Footer/footer";
import NavbarComponent from "./Navbar/Navbar";

function Home() {
    return (
        <div>
            <NavbarComponent ShowHomeOptions={true}/>
            <About />
            <CardComponent />
            <FooterSection />
        </div>
    );
}

export default Home;