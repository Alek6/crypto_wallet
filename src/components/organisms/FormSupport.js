import Button from '@atoms/Button';
import Label from "@atoms/Label";

export default function FormSupport({required}) {
    return (
        <form className="flex flex-1 flex-col justify-between mt-6">
            <div className="flex flex-col justify-center gap-y-5">
                <div className="flex flex-col">
                    <Label required={required} htmlFor="problem">Problem </Label>
                    <select name="problem" className="border-2 border-gray-500 rounded-md mt-2 focus:border-primary py-3 px-4 w-full text-text">
                        <option value="">Choose your problem</option>
                        <option value="login">I can't login to my profile</option>
                        <option value="data-update">My profile data were not updated</option>
                        <option value="no-sent-money">Money not sent</option>
                        <option value="conversion-error">Conversion error</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <Label required={required} htmlFor="problem-description">Description </Label>
                    <textarea 
                        id="problem-description" 
                        name="problem description" 
                        placeholder="Describe your problem"
                        rows="7" 
                        cols="50"
                        className="border-2 border-gray-500 rounded-md mt-2 focus:border-primary py-3 px-4 w-full text-text" />
                </div>
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/profile" type="primary">confirm</Button>
            </div>
        </form>
    )
}