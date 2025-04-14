import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter, UploadThingError  } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({pdf: {maxFileSize: "32MB"}}).middleware(async({req}) => {
    console.log("Upload middleware running");
    try {
      const user = await currentUser();
      console.log("User authentication:", user ? "Authenticated" : "Not authenticated");
      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    } catch (error) {
      console.error("Authentication error:", error);
      throw error;
    }
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log("Upload complete:", metadata, file);
    return { userId: metadata.userId, file: file.customId };
  })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
