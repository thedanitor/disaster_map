import { Icon } from "@iconify/react";
import nasaIcon from '@iconify-icons/simple-icons/nasa';

const Header = () => {
    return (
        <header className="header">
            <h1>Disaster Map </h1>
            <span className="nasa-header">data by </span>
            <Icon icon={nasaIcon} className="nasa-icon" />
        </header>
    )
}

export default Header
