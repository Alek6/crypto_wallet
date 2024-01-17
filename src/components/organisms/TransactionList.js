import Transaction from "@molecules/Transaction";
import transactions from "./../../data/json/transactions.json";

/*const transactions = [
    {
        id: 'T000',
        type: 'Received',
        date: '01/01/2023',
        amount: '250,00',
        btc: '0,011'
    },
    {
        id: 'T001',
        type: 'Sent',
        date: '30/12/2022',
        amount: '1200,00',
        btc: '0,052'
    },
    {
        id: 'T002',
        type: 'Received',
        date: '11/11/2022',
        amount: '192,00',
        btc: '0,0064'
    }
];*/

export default function TransactionList({num}) {
    let transactions3 = [];
    if (!num) {
        transactions3 = transactions.slice(0, 3);
        return (
            <ul className="flex flex-col gap-y-3">
                {
                    transactions3.map( tr => {
                        return <Transaction key={tr.id} type={tr.type} date={tr.date} amount={tr.amount} btc={tr.btc} />
                    })
                }
            </ul>
        )
    } else {
        return (
            <div className="overflow-y-scroll max-h-96">
                <ul className="flex flex-col gap-y-3">
                    {
                        transactions.map( tr => {
                            return <Transaction key={tr.id} type={tr.type} date={tr.date} amount={tr.amount} btc={tr.btc} />
                        })
                    }
                </ul>
            </div>
        )
    }
}