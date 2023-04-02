import api from "../api";
import {useEffect, useState} from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
export default function Dialog({item,setItem,show, setShow}) {
    const [detail, setDetail] = useState(null)
    const baseUrl = process.env.BACKEND_URL
    useEffect( () => {
        if(item){
            api.getProject(item).then((data)=>{
                setDetail(data)
            })


        }
    }, [item])
    return (
        <div className={`${show?'':'hidden'} relative`}>
            <div className="fixed top-0 left-0 w-screen h-screen z-20 bg-white p-6">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <span className="border-b w-full border-gray-200 pb-2 text-2xl">{item} Projects</span>
                        <span onClick={()=>setShow(false)} className="cursor-pointer text-2xl text-gray-400">X</span>
                    </div>
                    <div className=" justify-center grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3  overflow-auto h-[90vh]"  >

                        {detail && detail.map((project, index) => (
                            <div key={index} className="flex flex-col m-5 shadow-lg shadow-gray-400 col-span-1 rounded-xl">
                                <div className="flex flex-col">
                                    <div className="mb-4 relative">
                                        {project.image &&
                                        <img src={baseUrl + project.image} alt={project.name +' Erdoğan Yeşil'}
                                             className="rounded-t-xl hover:rounded-xl transition-all ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" />
                                        }
                                    </div>
                                    <div className="flex flex-col p-4">
                                        <h1 className="text-xl">{project.name}</h1>
                                        <a href={project.url} target="_blank" className="text-sky-600">{project.url}</a>
                                        <a href={project.github} target="_blank" className="text-sky-600">Github Page ({project.visible})</a>
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
            </div>
        </div>
    )
}