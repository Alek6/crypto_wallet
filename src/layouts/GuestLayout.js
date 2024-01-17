import Header from "@molecules/Header"

export default function GuestLayout({children, title}) {
    return (
        <div className="h-screen bg-bgLight flex flex-col justify-between p-8">
            <Header type="intro" title={title}/>
            {children}
        </div>
    )
}