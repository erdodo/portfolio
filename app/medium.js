import {useEffect, useState} from "react";
import api from "@/app/api";
import moment from "moment";

export default function Medium() {
    const [medium, setMedium] = useState([])
    useEffect(async () => {
        api.getData().then((data) => {
            setMedium(data.medium)
        })

    }, [])
    return(
        <div className="bg-[#FDF0E2] w-screen h-[100vh]">
            <div className="flex flex-col px-4 md:px-32 lg:px-60 xl:px-72 2xl:px-96 py-10">
                <div className="flex flex-row justify-between pb-3 border-b border-gray-300 mb-4">
                    <h1 className="text-3xl">My Medium Stories</h1>
                    <a href="https://erdodo.medium.com/" target="_blank" className="text-xl text-gray-500">View All</a>
                </div>
                <div className=" mt-6">
                    <div className="flex flex-col  ">
                        {medium.map((item, index) => (
                           <div className="flex flex-row justify-between pb-4 border-b border-gray-300 mb-5 ">
                               <div className="flex flex-col px-3 " style={{width: "-webkit-fill-available"}}>
                                   <span className=" text-gray-500">{moment(item.date).fromNow()}</span>
                                   <a href={item.url} target="_blank" className="text-3xl mb-2 hover:text-black text-gray-600 cursor-pointer">{item.title}</a>
                                   <p className="text-md text-gray-600">{item.content}</p>
                                   <div className="flex flex-row overflow-auto mt-4">
                                       {item.category.map((tag, index) => (
                                           <div className="bg-[#EBDED1] p-1 hover:bg-[#d8cdbf] px-4 rounded-xl mr-2">
                                               <span className="text-sm whitespace-nowrap">{tag}</span>
                                           </div>
                                       ))}
                                   </div>
                               </div>
                               <div className="flex flex-col  !w-[180px]">
                                   <img src={item.image} alt="Erdoğan Yeşil" className="h-[180px] w-[180px] rounded"/>
                               </div>
                           </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}