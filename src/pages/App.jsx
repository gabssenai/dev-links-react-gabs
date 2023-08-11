import { useState } from "react";
import Profile from "../componets/profile/profile";
import Switch from "../componets/switch/switch";

import "./App.css";

import imgDarkMode from "../img/amongescuro.png";
import imgLightMode from "../img/amongclaro.webp";

const App = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
    const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
    return (
        <div id="container">
            <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@Gabs</Profile>
            <Switch></Switch>
        </div>
    )
}

export default App;