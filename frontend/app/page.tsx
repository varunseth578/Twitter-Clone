import { Inter } from "next/font/google";
import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
const inter = Inter({ subsets : ["latin"]});
interface TwitterSidebarButton{
 title:string;
 icon:React.ReactNode;
}
const sidebarMenuButton:TwitterSidebarButton[]=[
  {
    title:"Home",
    icon:<BiHomeCircle/>
  },
  {
    title:"Explore",
    icon:<BiHash/>
  },
  {
    title:"Notifications",
    icon:<BsBell/>
  },
  {
    title:"Messages",
    icon:<BsEnvelope/>
  },
  {
    title:"Bookmarks",
    icon:<BsBookmark/>
  },
  {
    title:"Profile",
    icon:<BiUser/>
  },
]

export default function Home() {
  return (
    <div className={inter.className}>
     <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 pt-8 px-4 ">
        <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
          <BsTwitter/>
        </div>
        <div className="mt-4 text-2xl pr-4 ">
          <ul>
          {sidebarMenuButton.map((item) => (
            <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer " key={item.title}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
          </ul>
          <div className=" mt-5 px-3">
          <button className="bg-[#1d9bf0] font-semibold text-lg p-4 rounded-full w-full">Tweet</button>
          </div>
        </div>
        </div>
      <div className="col-span-6  border-r-[1px] border-l-[1px] border-gray-600 "></div>
      <div className="col-span-3"></div>
      </div>
    </div>
  );
}
