import Image from "next/image";
import TNAV from "./components/TopNav";
import Air from "./components/Air";
import SHOES from "./components/Shoes";
import Man from "./components/ManShoes";
import GEAR from "./components/GearUp";
import DONT from "./components/DontMiss";
import ICON from "./components/Icon";
import ESSENTIALS from "./components/Essential";
import Mainshoe from "../../public/mainshoe.png"

export default function Home() {
  return (
    <div>
      <div className="relative z-10">
        <TNAV />
      </div>
      <div className="flex flex-col justify-center items-center mt-2">
        <div className="w-10/12 h-[90vh] relative">
          <Image
            src={Mainshoe} 
            alt="Nike Shoe"
            layout="fill" 
            objectFit="contain" 
          />
        </div>
      </div>
        <Air/>
      <SHOES/>
      <Man/>
      <GEAR/>
      <DONT/>
      <ESSENTIALS/>
      <ICON/>
    </div>
  );
}
