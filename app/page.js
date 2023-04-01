"use client"
import Main from "@/app/main";
import Projects from "@/app/projects";
import Medium from "@/app/medium";
import {useState} from 'react';
export default function Home() {
  return (
    <div>
        <Main />
        <Projects />
        <Medium />
    </div>
  )
}
