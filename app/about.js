import React, {useState} from 'react'
import profile from "../json/profile.json";
export default function About() {
    const [selectedSocial, setSelectedSocial] = useState('')
    return (
        <div className="px-32 py-5 bg-gray-200">
            <div className="shadow-black shadow-2xl bg-white p-5 rounded-2xl">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <div>
                                <img src={profile.profileImage} alt="Erdoğan Yeşil" className="w-[250px] rounded-2xl"/>
                            </div>
                            <div className="flex flex-col px-4">
                                <div className="mb-2">
                                    <span className="font-bold">Name: </span>
                                    <span >{profile.name}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="font-bold">Job: </span>
                                    <span >{profile.job}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="font-bold">Email:</span>
                                    <a href={"mailto:"+profile.email}>{profile.email}</a>
                                </div>
                                <div className="mb-2">
                                    <span className="font-bold">Social</span>
                                    <div className="flex flex-row">
                                        {profile.socialLinks.map((social, index) => (
                                            <a href={social.link} className="m-1" onMouseOver={()=>setSelectedSocial(social.name)} onMouseLeave={()=>setSelectedSocial('')}>
                                                <img src={social.icon} className="w-10 h-10" alt=""/>
                                            </a>
                                        ))}

                                    </div>
                                    <div>{selectedSocial}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5">
                            <h1 className="text-3xl">Skill</h1>
                            <div className="flex flex-col">
                                {profile.skill.map((skill, index) => (
                                    <div className="flex flex-col my-3">
                                        <h1 className="text-xl mb-2">{skill.name}</h1>
                                        <div className="flex flex-row my-2 flex-wrap">
                                            {skill.list.map((item, index) => (

                                                    <img src={item.icon} alt={item.name +' Erdoğan Yeşil'} className=" h-16 m-1"/>

                                            ))}
                                        </div>
                                        <hr/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>grif 2</div>
                </div>
            </div>
        </div>
    )
}