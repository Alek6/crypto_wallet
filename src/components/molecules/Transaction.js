import ArrowDown from "@icons/ArrowDown";
import ArrowUp from "@icons/ArrowUp";

export default function Transaction({type, date, amount, btc}) {
    let amountColor = {
        'Received': 'text-received',
        'Sent': 'text-sent'
    }
    
    return (
        <li className="flex">
            {(type === 'Received') ? <ArrowDown fill="fill-received"/> : <ArrowUp fill="fill-sent"/>}
            <div className="flex justify-between w-full ml-2">
                <div className="flex flex-col">
                        <h2 className="text-pageTitle text-xl font-semibold">{type}</h2>
                        <p className="text-text font-light">{date}</p>
                </div>
                <div className="flex flex-col">
                    <h2 className={"text-xl font-semibold " + amountColor[type]}>{(type === 'Received') ? '+' : '-'} {amount} USD</h2>
                    <p className="flex justify-end text-text font-light">{btc} BTC</p>
                </div>
            </div>
        </li>

        /*(type === 'Received') ? 
        <li className="flex">
            <ArrowDown fill="fill-received" />
            <div className="flex justify-between w-full ml-2">
                <div className="flex flex-col">
                        <h2 className="text-pageTitle text-xl font-semibold">{type}</h2>
                        <p className="text-text font-light">{date}</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-received">+ {amount} USD</h2>
                    <p className="flex justify-end text-text font-light">{btc} BTC</p>
                </div>
            </div>
        </li>
        :
        <li className="flex">
            <ArrowUp fill="fill-sent" />
            <div className="flex justify-between w-full ml-2">
                <div className="flex flex-col">
                        <h2 className="text-pageTitle text-xl font-semibold">{type}</h2>
                        <p className="text-text font-light">{date}</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-sent">- {amount} USD</h2>
                    <p className="flex justify-end text-text font-light">{btc} BTC</p>
                </div>
            </div>
        </li>*/
    )
}