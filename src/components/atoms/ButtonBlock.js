import { Link } from 'react-router-dom';
import ArrowRight from '@icons/ArrowRight';
import Logout from '@icons/Logout';

export default function ButtonBlock({to='#', type='secondary', children}) {
    const styles = {
        secondary: 'bg-bgSecondary',
        accent: 'bg-bgDanger'
    }
    return (
        <Link to={to} className={"h-16 px-6 text-lg text-pageTitle hover:text-black hover:opacity-90 shadow-lg flex justify-between items-center rounded-2xl " + styles[type]}>
            {children}
            {(type === 'secondary') ? <ArrowRight/> : <Logout/>}
        </Link>
    )
}