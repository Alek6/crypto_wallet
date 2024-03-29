import NavLink from "@molecules/NavLink";
import Wallet from "@icons/Wallet";
import Market from "@icons/Market";
import Profile from "@icons/Profile";

export default function Navbar() {
    return (
        <nav className="flex gap-x-9 fixed bottom-8 rounded-[30px] bg-bgPrimary px-8 py-4 text-sm shadow-lg">
            <NavLink 
                to="/wallet" 
                icon={<Wallet fill="fill-white"/>} 
                text="WALLET"/>
            <NavLink 
                to="/market" 
                icon={<Market fill="fill-white"/>} 
                text="MARKET"/>
            <NavLink 
                to="/profile" 
                icon={<Profile fill="fill-white"/>} 
                text="PROFILE"/>
        </nav>
    )
}