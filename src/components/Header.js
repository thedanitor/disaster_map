import { Icon } from "@iconify/react";
import nasaIcon from '@iconify-icons/simple-icons/nasa';


const Header = () => {
    return (
        <header className="header">
            <h1>Disaster Map (Powered by <Icon icon={nasaIcon} />)</h1>
        </header>
    )
}

export default Header
