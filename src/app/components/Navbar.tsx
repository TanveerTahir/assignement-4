import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav>
            <div className="w-full h-20 flex justify-evenly items-center bg-myblue">
            {/* left-side logo */}
                <Image src={"/images/Logo@2x.png"} width={191} height={34} alt="logo"/>
                
                <div className=" text-white space-x-20 text-sm">
                <Link href={"/Products"}>Products</Link> 
                    <Link href={"/Solutions"}>Solutions</Link>
                    <Link href={"/Resources"}>Resources</Link>
                    <Link href={"/Pricing"}>Pricing</Link>
                    
                    <button className="bg-butcol py-3  px-5 rounded text-black">login</button>

                    
                </div>
                
            </div>
        </nav>
    )
}
export default Navbar;