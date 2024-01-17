import { useState } from 'react';
import FormInput from '@molecules/FormInput';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';

export default function InputPassword({id, text, placeholder}) {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type==='password'){
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    return (
        <div className='flex w-full'>
            <FormInput
                id={id}
                type={type}
                text={text}
                placeholder={placeholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
            />
            <span className="flex justify-around items-center" onClick={handleToggle}>
                <Icon className="absolute mr-10 pt-8" icon={icon} size={25}/>
            </span>
        </div>
    )
}