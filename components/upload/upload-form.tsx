"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

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
  const [model, setModel] = useState("llama");

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
      const errorMessage =
        validatedFields.error.flatten().fieldErrors.file?.[0] ?? "invalid file";
      toast.error(errorMessage);
      return;
    }

    try {
      //upload the file to upload thing
      const uploadResponse = await startUpload([file]);
      console.log("Upload response:", uploadResponse);
      if (!uploadResponse) {
        toast.error("Your file has not been uploaded successfully");
        return;
      }

      // Get the file URL from the UploadThing response
      const fileUrl = uploadResponse[0]?.ufsUrl;
      if (!fileUrl) {
        console.error("No file URL found in upload response");
        toast.error("Failed to get file URL");
        return;
      }

      console.log("File URL:", fileUrl);

      // Call the summary generation with model selection
      const summaryResponse = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pdfText: fileUrl,
          useGemini: model === "gemini",
        }),
      });

      if (!summaryResponse.ok) {
        const errorData = await summaryResponse.json();
        console.error("Summary generation error:", errorData);
        toast.error(errorData.error || "Failed to generate summary");
        return;
      }

      const summary = await summaryResponse.json();
      console.log("Summary:", summary);

      // Display the summary in a modal
      const summaryModal = document.createElement("div");
      summaryModal.innerHTML = `
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div class="bg-white rounded-lg p-6 max-w-4xl w-full">
            <h2 class="text-2xl font-bold mb-4">Document Summary</h2>
            <div class="prose max-w-none">
              ${summary.summary || summary}
            </div>
            <button 
              class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onclick="document.querySelector('.fixed.inset-0').remove()"
            >
              Close
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(summaryModal);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">Upload PDF</h2>
              <p className="mt-1 text-sm text-gray-500">
                Select a model and upload your PDF to generate a summary
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Model
              </label>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="llama">Llama</SelectItem>
                  <SelectItem value="gemini">Gemini</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <UploadFormInput onSubmit={handelSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
