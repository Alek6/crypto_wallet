import Button from '@atoms/Button';
import InputUploadFile from '@molecules/InputUploadFile';

export default function FormUploadDocuments() {
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col items-center justify-center gap-5 mt-6">
                <InputUploadFile htmlFor="document" label="Upload your ID" message="Click to upload your ID card" />
                <InputUploadFile htmlFor="photo" label="Upload your Photo" message="Click to upload your photo" />
            </div>
            <div className="text-center flex flex-col items-center mb-6">
                <Button to="/login" type="primary">next</Button>
            </div>
        </form>
    )
}