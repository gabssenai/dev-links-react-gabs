import { useState } from "react";
import Profile from "../componets/profile/profile";
import Switch from "../componets/switch/switch";
import Links from "../componets/links/link";
import SocialLinks from "../componets/social-Links/social-Links";

import "./App.css";

import imgDarkMode from "../img/amongescuro.png";
import imgLightMode from "../img/amongclaro.webp";
import Footer from "../componets/footer/footer";

const App = () => {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleMode = () => {
        setIsLightMode((prevMode) => !prevMode)
    };

    const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
    const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"

    return (
        <div id="App" className={isLightMode ? "light" : ""}>
            <div id="container">
                <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@Gabs</Profile>
                <Switch mode={toggleMode} infoButton={isLightMode} />
                <div id="links">
                    <ul>
                        <Links link={"https://github.com"}>GitHub</Links>
                        <Links link={"#"}>Instagram</Links>
                        <Links link={"#"}>Portifólio</Links>
                        <Links link={"#"}>Projetos</Links>
                    </ul>
                </div>

                <div id="socialLinks">
                    <SocialLinks href={"#"} icon={"logo-github"} />
                    <SocialLinks href={"#"} icon={"logo-instagram"} />
                    <SocialLinks href={"#"} icon={"logo-facebook"} />
                    <SocialLinks href={"#"} icon={"logo-twitter"} />
                </div>
                <Footer link={"#"}>@Gabs</Footer>
            </div>
        </div>
    );
};

export default App;