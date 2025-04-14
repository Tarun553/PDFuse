"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void ;
    className?: string;
}
export default function UploadFormInput({onSubmit, className }: UploadFormInputProps ) {
    return (
        <div className="flex items-center justify-center w-full">
          <form onSubmit={onSubmit} className="flex items-center gap-4">
            <Input 
              id="file" 
              name="file" 
              accept="application/pdf" 
              type="file" 
              className="w-[300px]" 
            />
            <Button className="bg-rose-400 hover:bg-rose-600 whitespace-nowrap">
              Upload your PDF
            </Button>
          </form>
        </div>
      );
}
    
  
