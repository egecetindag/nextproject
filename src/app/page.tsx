"use client"
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster"
import {Button } from "@/components/ui/button"
import {Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import Scheduler  from "@/components/Scheduler"
import { createContext, useContext, useState } from 'react';
import Link from "next/link";
export const ScheduleContext = createContext({txt:''});
export default function Home() {
  const { toast } = useToast()
  const [txt, setTxt] = useState('');
  return (
    <div className="p-3">
      <h1>Pineapp</h1>
      <Link className="mt-3 mb-3 text-blue-600 hover:underline" href="/deneme">Routing example</Link>
      <Toaster/>
      <div className="mb-3">Enter toast description: </div>
      <Input className="w-80" value={txt} onChange={e=>setTxt(e.target.value)}></Input>
      
      <ScheduleContext.Provider value={{ txt }}>
        <Scheduler />
      </ScheduleContext.Provider>
    </div>
  );
}
