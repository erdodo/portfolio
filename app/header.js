"use client"
import {useEffect,useState} from "react";
import {IoLanguage} from "react-icons/io5";
import {BsList} from "react-icons/bs";
export default function Header({profile}) {
    const [langVisible, setLangVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    useEffect(() => {

        document.addEventListener("click", function(e){
            if(e.target.className?.indexOf("langVisibleEl") === -1){
                setLangVisible(false);
            }
            if(e.target.className?.indexOf("menuVisibleEl") === -1){
                setMenuVisible(false);
            }
        })
    }, [])

    return (
        <div className=" px-4 md:px-32  bg-black/80 fixed w-screen z-20 ">
            <div className="flex flex-row justify-between">
                <div  className="w-16 h-16 p-2">
                    <img src={profile.logo} alt={"Erdoğan Yeşil"} />
                </div>
                <div className="flex flex-row items-center ">
                   <div className=" flex-row items-center hidden md:flex">
                       {!!profile.headerLinks && profile.headerLinks.map((item, index) => {
                           return(
                               <a key={index} className="text-white hover:bg-white/30 rounded-lg p-2 mx-1" href={item.link}>{item.name}</a>
                           )
                       }) }
                   </div>
                    <div className="hover:bg-white/30 rounded-lg p-2 mx-1 cursor-pointer relative langVisibleEl" onClick={()=>setLangVisible(!langVisible)}>
                        <IoLanguage className="text-white langVisibleEl" />
                        {langVisible &&
                            <div className="absolute bg-white right-0 mt-4 p-2 rounded-lg flex flex-col langVisibleEl">
                                <a href="/?lang=tr" className="px-4 hover:bg-gray-300 text-lg p-1 rounded" >Türkçe</a>
                                <a href="/?lang=en" className="px-4 hover:bg-gray-300 text-lg p-1 rounded">English</a>
                            </div>}
                    </div>
                    <div className="relative md:hidden">
                        <span className="text-white hover:bg-white/30 rounded-lg p-2 mx-1 flex flex-row items-center menuVisibleEl" onClick={()=>setMenuVisible(true)}>
                            <BsList className="text-white text-xl" />
                        </span>

                        {menuVisible &&
                        <div className="absolute right-0 w-[200px] mt-2 origin-top-right rounded-md shadow-lg menuVisibleEl">
                            <div className="py-1 bg-white rounded-md shadow-xs menuVisibleEl">
                                {!!profile.headerLinks && profile.headerLinks.map((item, index) => {
                                    return(
                                <a href={item.link}  key={index}
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">{item.name}</a>
                                    )
                                }) }
                            </div>
                        </div>
                        }
                    </div>


                </div>
            </div>

        </div>
    )
}