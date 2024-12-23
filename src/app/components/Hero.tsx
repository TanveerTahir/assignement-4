import Image from "next/image"

const Hero = () => {
    return (
        <div className="bg-myblue  h-screen mt-20 p-40 flex justify-center items-center">
            
            {/* left - section */}
            <div className="w-1/2  ">
                <h1 className="text-5xl text-white font-bold">Get More Done with whitepace</h1>
                <br />
                <p className="text-sm text-white">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <br />
                <button className="bg-boxcols text-white rounded-md text-xs p-3">Try Whitespace free -&gt; </button>

            </div>

            {/* right - section */}
         
            <Image src={"/images/image-container.png"}alt="image-container" width={500} height={500} className="w-1/2" />
            
            
            
        </div>
    )
}

export default Hero