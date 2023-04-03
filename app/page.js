"use client"
import Main from "@/app/main";
import Projects from "@/app/projects";
import Medium from "@/app/medium";
import Contact from "@/app/contact";
import About from "@/app/about";
import {useEffect, useState} from "react";
import api from "@/api";
export default function Home({}) {
    const [profile, setProfile] = useState({});
    useEffect(() => {

        api.getData().then((data) => {
            setProfile(data)
        })
    }, []);
  return (
    <div className="snap-y scroll-smooth snap-mandatory h-screen overflow-scroll">
        <div className="snap-start  w-screen h-screen" id="home">
            <Main profile={profile} textList={profile.textList} />
        </div>
        <div className="snap-start scroll-mt-[64px] w-screen " id="projects"  style={{height:"calc(100vh - 64px)"}}>
            <Projects profile={profile} />
        </div>
        <div className="snap-start scroll-mt-[64px] w-screen "   id="medium"  style={{height:"calc(100vh - 64px)"}}>
            <Medium profile={profile} />
        </div>
        <div className="snap-start scroll-mt-[64px] w-screen bg-white"  id="contact"   style={{height:"calc(100vh - 64px)"}}>
            <Contact profile={profile} />
        </div>
        <div className="snap-start scroll-mt-[64px] w-screen bg-white"  id="about"   style={{height:"calc(100vh - 64px)"}}>

            <About profile={profile} />
        </div>



    </div>
  )
}
