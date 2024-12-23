import Image from "next/image";


const Footer =() => {
    return (
        <div className="bg-myblue w-full ">

            <div className="flex justify-center ">
            <div className="pl-10">


<div className=" pt-20 justify-center flex text-white">


<div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
<Image src={"/images/Logo.png"} alt="icon" width={191} height={34} />
<p className="text-white text-md leading-5 font-thin">
whitepace was created for
 the new ways we live and
 work. We make a better 
 workspace around the world</p>
</div>

<div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
<ul>
    <li>Product</li>
    <li className="tex-xs font-thin">Overview</li>
    <li className="tex-xs font-thin">Pricing</li>
    <li className="tex-xs font-thin">Customer stories</li>
</ul>
</div>

<div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
<ul>
    <li>Resources</li>
    <li className="tex-xs font-thin">Blog</li>
    <li className="tex-xs font-thin">Guides & tutorials</li>
    <li className="tex-xs font-thin">Help center</li>
</ul>

</div>

<div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
<ul>
    <li>Company</li>
    <li className="tex-xs font-thin">About us</li>
    <li className="tex-xs font-thin">Career</li>
    <li className="tex-xs font-thin">Media kit</li>
</ul>
</div>
</div>


<br />            
<hr className="opacity-55 "/>

<div>
<p className="text-center text-white text-xs py-5">©2021 Whitepace LLC.</p>
</div>
</div>
            </div>

                       
    </div>
    )
}

export default Footer;