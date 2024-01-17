import { Link } from "react-router-dom";

export default function TransactionsHeader() {
    return (
        <div className="flex justify-between text-xl font-semibold my-6">
            <h2>Last Transactions</h2>
            <Link to="/movements" className="text-primary underline">View All</Link>
        </div>
    )
}