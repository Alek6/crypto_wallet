export default function Input({id, placeholder, autoComplete='off', type='text', value=''}) {
    return (
        <input 
            id={id}
            name={id}
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            defaultValue={value} 
            className="py-2 px-4 border text-text border-gray-500 rounded-md mt-2 focus:border-primary" 
            />
    )
}