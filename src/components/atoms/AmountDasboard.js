export default function AmountDashboard({amount, cryptoAmount}) {
    return (
        <div className="flex w-full rounded-[50px] h-32 bg-bgPrimary p-8 shadow-md">
            <div className="felx flex-col text-white">
                <h1 className="text-3xl font-bold">{amount} USD</h1>
                <h3 className="text-secondary">{cryptoAmount} BTC</h3>
            </div>
            <img className="w-28 absolute ml-[48%]" src="/assets/Gold-bitcoin_nobg.png" alt="bitcoin"/>
        </div>
    )
}