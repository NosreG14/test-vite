import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import { LogoProps } from "../constants";

function Logo({ type, link }: LogoProps) {
    return (<a href={link} target="_blank">
        <img src={type === 'react' ? reactLogo : viteLogo} className={`logo ${type}`} alt={`${type} logo`} />
    </a>);
}

export default Logo;
