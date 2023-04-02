import {useState,useEffect} from 'react'
import api from "@/app/api";
export default function Contact() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [profile, setProfile] = useState({});
    useEffect(() => {
        api.getData().then((data) => {
            setProfile(data);
        });
    }, [])
    return (
        <div className="px-4 md:px-20 py-5 bg-gradient-to-r  from-green-500 to-sky-500 overflow-auto flex flex-col justify-center" style={{height:"calc(100vh - 64px)"}}>
            <div className="shadow-gray-100 shadow-2xl bg-white p-5 rounded-2xl overflow-auto">
                <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-2 lg:col-span-1 flex flex-col">
                        <div className="flex flex-col mt-5">
                            <h1 className="text-3xl">Email</h1>
                            <hr className="my-2"/>
                            <div className="flex flex-col my-1">
                                <div className="flex flex-col my-1 ">
                                    <span className="text-lg mb-1">Title</span>
                                    <input type="text" onChange={(e)=>setTitle(e.target.value)} className="p-2 px-4 border border-gray-400 rounded-lg" placeholder="Your email title"/>
                                    <span className="mt-3 mb-1">Message</span>
                                    <textarea className="p-2 px-4 border border-gray-400 rounded-lg" onChange={(e)=>setMessage(e.target.value)} rows="10" placeholder="Your email body"></textarea>
                                    <div className="flex flex-row justify-end">
                                        <a href={`mailto:${profile.email}?subject=${title}&body=${message}`}
                                           className="bg-gray-800 text-white p-2 px-4 rounded-lg mt-3">Send me an email</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                <div className="col-span-2 lg:col-span-1 flex flex-col">
                    <div className="flex flex-col mt-5">
                        <h1 className="text-3xl">Social Media</h1>
                        <hr className="my-2"/>
                        <div className="flex flex-col my-1">
                            {profile.socialLinks && profile.socialLinks.map((social) => {
                                return(
                                    <div className={`flex flex-row my-1 opacity-90 hover:opacity-100 cursor-pointer p-4 rounded-lg`}
                                         style={{color:social.color,backgroundColor:social.bgColor}}
                                            onClick={()=>window.open(social.link)}>
                                        <img src={social.icon} alt={social.name +' Erdoğan Yeşil'} className="w-16 h-16 rounded"/>
                                        <div className="flex flex-col mx-5">
                                            <span className="text-2xl">{social.username}</span>
                                            <span className="">{social.name}</span>
                                        </div>
                                    </div>
                            )})
                            }

                        </div>

                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}