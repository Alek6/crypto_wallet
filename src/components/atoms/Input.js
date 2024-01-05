export default function Input({id, placeholder, autoComplete='off', type='text', value='', width='large', maxLength='', min='', max='', pattern}) {
    const measures = {
        large: 'py-2 px-4 w-full text-text',
        short: 'py-2 px-4 w-[50%] text-text',
        code: 'w-10 h-10 px-3 py-1 text-xl text-center text-primary'
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
            min={min}
            max={max}
            pattern={pattern}
            className={"border border-gray-500 rounded-md mt-2 focus:border-primary " + measures[width]}
            />
    )
}