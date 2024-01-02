export default function Label({htmlFor, required = false, children}) {
    return (
        <label className="font-semibold" htmlFor={htmlFor}>
            {children} 
            {required && <span className="text-red-500">*</span>}
        </label>
    )
}