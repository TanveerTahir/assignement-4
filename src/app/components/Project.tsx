import Image from "next/image";


const Project = ( ) => {

    return(
        <div className="w-full">
            <div className="flex justify-center px-64 gap-4">
            <div className="w-[672px] h-[411px]">
                <h1 className="text-7xl font-bold">Project <br /> Management</h1> <br />
                <p className="text-lg">Images, videos, PDFs and audio files are supported. Create math expressions and
                diagrams directly from the app. Take photos with the mobile app and save them to a note.</p> <br />
                <button className="bg-boxcols text-white rounded-md text-xs py-3  px-7 font-thin">Get Started -&gt; </button>
            </div>
            <div className="flex justify-center ">
            <Image src={"/images/image-container2.png"} alt="project" width={748} height={547}/>
            

            </div>
                
            </div>
            
{/* 2nd bottom part of project page */}


<div className="flex justify-center px-64 gap-4">
            <div className="w-[672px] h-[411px]">
                <h1 className="text-7xl font-bold">Work together</h1> <br />
                <p className="text-lg">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                    </p> <br />
                <button className="bg-boxcols text-white rounded-md text-xs py-3  px-7 font-thin">Get Started -&gt; </button>
            </div>
            <div className="flex justify-center ">
            <Image src={"/images/Work Together Image.png"} alt="project" width={748} height={547}/>
            

            </div>
                
            </div>



        </div>
    )
}

export default Project;