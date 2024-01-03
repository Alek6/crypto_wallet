export default function Header({title}) {
    function renderPageTitle() {
        if (title) {
            return (
                <h1 className="text-[32px] mt-5">
                    <span className="text-secondary">{title[0]}</span>{title.slice(1)}
                </h1>
            )
        }
    }

    return (
        <header className="text-center">
            <img className="w-full max-w-[200px] mx-auto" src="/assets/CryptoWallet-logo_nobg.png" alt="Crypto Wallet Logo" />
            { renderPageTitle() }
        </header>
    )
}