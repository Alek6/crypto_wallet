import { Link } from 'react-router-dom';
import Back from "@icons/Back";

export default function Header({type, title, message='Welcome, ', mt, backTo=''}) {
    function renderPageTitle() {
        if (title) {
            let styles = {
                sm: 'mt-5',
                lg: 'mt-12'
            }
            return (
                <h1 className={"text-primary text-[32px] " + styles[mt]}>
                    <span className="text-secondary">{title[0]}</span>{title.slice(1)}
                </h1>
            )
        }
    }

    if (type === 'intro') {
        return (
            <header className="text-center">
                <img className="w-full max-w-[200px] mx-auto" src="/assets/CryptoWallet-logo_nobg.png" alt="Crypto Wallet Logo" />
                { renderPageTitle() }
            </header>
        )
    } else if (type === 'main') {
        return (
            <header className="flex justify-between mb-8">
                    <div className="felx flex-col">
                        <h1 className="text-4xl text-pageTitle font-bold">{title}</h1>
                        <h2 className="text-2xl text-text font-light">{message} <span className="font-semibold">Arnold</span></h2>
                    </div>
                    <img className="h-12 w-12" src="/assets/Arnold.png" alt="user"/>
            </header>
        )
    } else if (type === 'action') {
        return (
            <header className="flex justify-between mb-8">
                <Link to={backTo}>
                    <button className="flex justify-center shadow-lg rounded-full w-full mb-2">
                        <Back/>
                    </button>
                </Link>
                { renderPageTitle() }
                <img className="h-12 w-12" src="/assets/Arnold.png" alt="user"/>
            </header>
        )
    }
    
}