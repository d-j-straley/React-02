import { Children } from "react";
import { logo } from "./banner.module.css";

const subtitleStyle = {
    fontSize: "x-large",
    color: "coral",
    fontStyle: "italic",
};

const Banner = ({children}) => {
    return (
        <header className="row mb-4">
            <div className="col-5"> 
            <img src="./GloboLogo.png" alt="logo" className={logo} />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                {children}
            </div>
        </header>
    );
};

export default Banner;