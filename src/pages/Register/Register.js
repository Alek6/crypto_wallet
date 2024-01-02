import Form from "@organisms/Form"

export default function Register() {
    return (
        <div className="h-screen bg-bgLight flex flex-col justify-between p-8">
            <header className="text-center">
                <img className="w-full max-w-[200px] mx-auto" src="/assets/CryptoWallet-logo_nobg.png" alt="Crypto Wallet Logo" />
                <h1 className="text-[32px] mt-5">
                    <span className="text-secondary">R</span>egister
                </h1>
            </header>
            <Form />
        </div>
    )
}