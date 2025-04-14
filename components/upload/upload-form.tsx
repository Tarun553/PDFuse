"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from 'sonner';
import { generatePdfSummary } from "@/actions/upload-actions";

const schema = z.object({
  file: z
    .instanceof(File, { message: "invaild file" })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "file size must be less than 20mb",
    })
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a pdf"
    ),
});

export default function UploadForm() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.success("Your file has been uploaded successfully");
    },
    onUploadError: (error) => {
      toast.error("Your file has not been uploaded successfully");
    },
    onUploadBegin: (fileName: string) => {
      toast.info("Your file is being uploaded");
    },
  });

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }

    console.log("submitted");
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    //validating the feilds
    const validatedFields = schema.safeParse({ file });
    console.log(validatedFields);

    if (!validatedFields.success) {
      console.log(
        validatedFields.error.flatten().fieldErrors.file?.[0] ?? "invalid file"
      );
      return;
    }

    //upload the file to upload thing
    const uploadResponse = await startUpload([file]);
    console.log(uploadResponse);
    if (!uploadResponse) {
      toast.error("Your file has not been uploaded successfully");
      return;
    }
    //parse the pdf using langchain
    const summary = await generatePdfSummary(res);

    console.log({summary})

    //summaries the pdf using ai
    // save the summary to the neonDB
    // redirect to [id] summary page
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-2xl mx-auto mt-[-40px]">
      <UploadFormInput onSubmit={handelSubmit} />
    </div>
  );
}
