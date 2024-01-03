export default function Input({id, placeholder, autoComplete='off', type='text', value='', width='large', maxLength=''}) {
    const measures = {
        large: 'w-full',
        short: 'w-[50%]'
    };

    return (
        <input 
            id={id}
            name={id}
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            defaultValue={value}
            maxLength={maxLength}
            className={"py-2 px-4 border text-text border-gray-500 rounded-md mt-2 focus:border-primary " + measures[width]}
            />
    )
}