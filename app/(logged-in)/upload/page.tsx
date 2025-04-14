
import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";
import BgGradient from "@/components/common/bg-gradient";

export default function Page() {
  return (
    <>
    <section className="min-h-screen">
   <BgGradient/>
   <div className="mx-auto max-w-6xl px-6 py-24">
    <div className="flex flex-col items-center justfiy-center gap-5 text-center">
      <UploadHeader/>
      <UploadForm/>

    </div>
   </div>
    </section>
    </>
  );
}
