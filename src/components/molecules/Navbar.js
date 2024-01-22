import NavLink from "@molecules/NavLink";
import Wallet from "@icons/Wallet";
import Market from "@icons/Market";
import Profile from "@icons/Profile";

export default function Navbar() {
    return (
        <nav className="flex justify-between w-full rounded-[30px] bg-bgPrimary px-8 py-4 text-sm shadow-lg">
            <NavLink 
                to="/wallet" 
                icon={<Wallet fill="fill-white"/>} 
                text="WALLET"/>
            <NavLink 
                to="/wallet/send" 
                icon={<Market fill="fill-white"/>} 
                text="MARKET"/>
            <NavLink 
                to="/wallet/receive" 
                icon={<Profile fill="fill-white"/>} 
                text="PROFILE"/>
        </nav>
    )
}