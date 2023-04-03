import api from "../api";
import {useEffect, useState} from "react";
import {AiFillGithub} from "react-icons/ai";
import {BiLinkExternal} from "react-icons/bi";
export default function Detail({item,setItem}) {
    const [detail, setDetail] = useState(null)
    const baseUrl = process.env.PHOTO_URL
    useEffect( () => {
        if(item){
            api.getProject(item).then((data)=>{
                console.log(item,data)
                setDetail(data)
            })


        }
    }, [item])
    return (
        <div className="flex flex-col">
            <span className="border-b w-full border-gray-200 pb-2 text-2xl">{item} Projects</span>
            <div className=" justify-center grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3  overflow-auto"  style={{height:"calc(100vh - 200px)"}}>

                {!!detail && detail.map((project, index) => (
                    <div key={index} className="flex flex-col m-5 shadow-lg shadow-gray-400 col-span-1 rounded-xl">
                        <div className="flex flex-col">
                            <div className="mb-1 relative">
                                {project.image &&
                                    <img src={baseUrl + project.image} alt={project.name +' Erdoğan Yeşil'}
                                         className="rounded-t-xl hover:rounded-xl transition-all ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" />
                                }
                            </div>
                            <div className="flex flex-col p-4">
                                <h1 className="text-xl">{project.name}</h1>
                                <div className="flex flex-row items-center justify-between mt-2">
                                    <div className={"flex flex-row items-center"}>

                                        <a href={project.github} target="_blank" className="text-sky-600">
                                            <AiFillGithub className="inline-block text-sky-600 hover:text-sky-800 text-4xl"/>
                                        </a>
                                        <span className="ml-2">{project.visible}</span>
                                    </div>

                                    <a href={project.url} target="_blank" className="text-sky-600">
                                        <BiLinkExternal className="inline-block text-sky-600  hover:text-sky-800 text-4xl"/>
                                    </a>
                                </div>
                                <hr className="my-1"/>
                                <p className="text-sm">{project.description}</p>

                                <div className="flex flex-row p-1 overflow-auto pb-3">
                                    {project.category.map((tag, index) => (
                                        <span key={index} onClick={()=>setItem(tag)} className={`${tag === item ?'bg-slate-600 text-white':'bg-gray-200'}  cursor-pointer  rounded-xl px-3 text-xs p-1 m-1 whitespace-nowrap`}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}