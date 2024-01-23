import MainLayout from '@layouts/MainLayout';
import { Link } from 'react-router-dom';
import AmountDashboard from "@atoms/AmountDasboard";
import Header from "@molecules/Header";
import Send from "@icons/Send";
import Receive from "@icons/Receive";

export default function Market() {
    return (
        <>
            <MainLayout header={<Header type="main" title="Market" />} >
                <AmountDashboard amount="1.234" cryptoAmount="0,000043"/>
                <div className="flex flex-col">
                    
                </div>
                <div className="flex p-4 justify-around gap-x-4 mt-6">
                    <Link to="/wallet/send" className="flex flex-col justify-content items-center w-[50%]">
                        <button className="flex justify-center shadow-lg px-4 py-2 rounded-xl w-full mb-2">
                            <Send/>
                        </button>
                        Buy
                    </Link>
                    <Link to="/wallet/receive" className="flex flex-col justify-content items-center w-[50%]">
                        <button className="flex justify-center shadow-lg px-4 py-2 rounded-xl w-full mb-2">
                            <Receive/>
                        </button>
                        Sell
                    </Link>
                </div>
            </MainLayout>
        </>
    )
}