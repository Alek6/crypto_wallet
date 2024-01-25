import { NavLink as Link } from "react-router-dom";
import LinkName from "@atoms/LinkName";

export default function NavLink({ to="#", icon, text}) {
    return (
        <Link to={to} className={({ isActive }) => isActive ? 'flex flex-col item-center text-white font-bold' : 'flex flex-col items-center text-white opacity-70'}>
            {icon}
            <LinkName className={({ isActive }) => isActive ? 'mt-1 text-white' : 'mt-1 opacity-70'}>{text}</LinkName>
        </Link>
    )
}