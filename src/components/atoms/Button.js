import { Link } from 'react-router-dom';

export default function Button({to = '#', children, type='primary'}) {
    const styles = {
        primary: 'bg-bgPrimary',
        secondary: 'bg-bgSecondary',
        tertiary: 'bg-bgTertiary'
    } 

    return (
        <button className="w-48">
            <Link to={to} className={"w-full bg-bgPrimary shadow-xl text-secondary flex justify-center items-center py-3 rounded-3xl text-2xl font-bold uppercase " + styles[type]}>{children}</Link>
        </button>
    )
}