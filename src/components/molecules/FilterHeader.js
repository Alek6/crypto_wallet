export default function FilterHeader() {
    return (
        <div className="flex justify-between text-xl font-semibold">
            <h2>Filter: </h2>
            <div className="flex gap-x-4">
                <button className="bg-bgSecondary text-white font-medium rounded-full px-4">Sent</button>
                <button className="bg-bgSecondary text-white font-medium rounded-full px-4">Received</button>
            </div>
        </div>
    )
}