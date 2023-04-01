"use client"
import Main from "@/app/main";
import Projects from "@/app/projects";
import Medium from "@/app/medium";
import {useState} from 'react';
export default function Home() {
    const testData = "test";
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
        <div className="snap-start  w-screen h-screen">
            <Main />
        </div>
        <div className="snap-start scroll-mt-[64px] w-screen "  style={{height:"calc(100vh - 64px)"}}>
            <Projects />
        </div>
        <div className="snap-start scroll-mt-[64px] w-screen "   style={{height:"calc(100vh - 64px)"}}>
            <Medium />
        </div>
        <div className="snap-start scroll-mt-[64px] w-screen bg-white"   style={{height:"calc(100vh - 64px)"}}>
            asdfmsşaldm
        </div>



    </div>
  )
}
