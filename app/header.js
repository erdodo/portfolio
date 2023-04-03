"use client"
import {useEffect,useState} from "react";
import {IoLanguage} from "react-icons/io5";
export default function Header({profile}) {
    const [langVisible, setLangVisible] = useState(false);
    useEffect(() => {

        document.addEventListener("click", function(e){
            if(e.target.className?.indexOf("langVisibleEl") === -1){
                setLangVisible(false);
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
                    {!!profile.headerLinks && profile.headerLinks.map((item, index) => {
                        return(
                            <a key={index} className="text-white hover:bg-white/30 rounded-lg p-2 mx-1" href={item.link}>{item.name}</a>
                        )
                    }) }
                    <div className="hover:bg-white/30 rounded-lg p-2 mx-1 cursor-pointer relative langVisibleEl" onClick={()=>setLangVisible(!langVisible)}>
                        <IoLanguage className="text-white langVisibleEl" />
                        {langVisible &&
                            <div className="absolute bg-white right-0 mt-4 p-2 rounded-lg flex flex-col langVisibleEl">
                                <a href="/?lang=tr" className="px-4 hover:bg-gray-300 text-lg p-1 rounded" >Türkçe</a>
                                <a href="/?lang=en" className="px-4 hover:bg-gray-300 text-lg p-1 rounded">English</a>
                            </div>}
                    </div>

                </div>
            </div>

        </div>
    )
}