"use client";
import './globals.css'
import Header from "@/app/header";
import Head from "@/app/head";
import {useEffect, useState} from "react";
import api from "@/api";
export default function RootLayout({children}) {
  const [profile, setProfile] = useState({});
  useEffect(() => {

    api.getData().then((data) => {
      setProfile(data)
    })
  }, []);
  return (
    <html lang="en">
    <Head />

      <body className="overflow-x-hidden">
      <Header profile={profile} />
      {children}

      </body>
    </html>
  )
}
