import Label from "@atoms/Label";
import Input from '@atoms/Input';

export default function FormInput({id, text, placeholder, type='text', value='', required='false', width='large', maxLength='', rock='text', accept='image/*, .pdf', min='', max='', pattern}) {
    const styles = {
        text: 'text-left',
        card: 'text-center bg-bgSecondary border-transparent '
    }

    return (
        <div className={"flex flex-col w-full " + styles[rock]}>
            <Label required={required}>{text} </Label>
            <Input 
                id={id} 
                placeholder={placeholder} 
                type={type} 
                width={width}
                maxLength={maxLength}
                pattern={pattern}
                min={min}
                max={max} />
        </div>
    )
}