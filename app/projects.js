import React, {useState,useEffect} from 'react'
import Detail from "@/app/projects/detail";
import api from "./api";
export default function Projects() {
    const [profile, setProfile] = useState({
        socialLinks: [],
        skill: []
    })
    const [detailItem, setDetailItem] = useState("Vue.js")
    useEffect(async () => {
        setProfile(await api.getData())
    }, [])
    return (
        <div className="px-4 md:px-20 py-5 bg-gray-200">
            <div className="shadow-gray-100 shadow-2xl bg-white p-5 rounded-2xl">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 flex flex-col">

                        <div className="flex flex-col mt-5">
                            <h1 className="text-3xl">Skill</h1>
                            <div className="flex flex-col">
                                {profile.skill.map((skill, index) => (
                                    <div key={index} className="flex flex-col my-1">
                                        <h1 className="text-xl mb-2">{skill.name}</h1>
                                        <div className="flex flex-row my-1 flex-wrap">
                                            {skill.list.map((item, index2) => (

                                                <div className={`${detailItem === item.name ?'bg-gray-200':''} p-2 rounded-xl`}>
                                                    <img key={index2} onClick={()=>setDetailItem(item.name)}
                                                         src={item.icon} alt={item.name +' Erdoğan Yeşil'}
                                                         className={` h-14`}/>
                                                </div>

                                            ))}
                                        </div>
                                        <hr/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2  lg:col-span-1 px-1">
                        <Detail item={detailItem} setItem={setDetailItem} />
                    </div>
                </div>
            </div>
        </div>
    )
}