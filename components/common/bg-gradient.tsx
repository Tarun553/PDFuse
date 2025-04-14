export default function BgGradient({
    children,
    classname,
      }:{
        children?: React.ReactNode;
        classname?: string;
      }) {
        return(
            <div className="fixed inset-0 -z-10 h-full w-full bg-white">
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-rose-100 via-white to-white opacity-50" />
                <div className="absolute bottom-0 right-0 left-0 h-[500px] bg-gradient-to-tr from-red-50 via-white to-white opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffd4d4,transparent)]" />
            </div>
        )
      } 
  