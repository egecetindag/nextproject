"use client"
import { Toaster } from "@/components/ui/toaster"
import {Input } from "@/components/ui/input"
import Scheduler  from "@/components/Scheduler"
import { createContext, useState } from 'react';
import Link from "next/link";
import { ScheduleContext } from "./context";

export default function Home() {
  const [txt, setTxt] = useState('');
  return (
    <ScheduleContext.Provider value={{ txt }}>
    <div className="p-3">
      <h1>Pineapp</h1>
      <Link className="mt-3 mb-3 text-blue-600 hover:underline" href="/deneme">Routing example</Link>
      <Toaster/>
      <div className="mb-3">Enter toast description: </div>
      <Input className="w-80" value={txt} onChange={e=>setTxt(e.target.value)}></Input>
      <Scheduler />
    </div>
    </ScheduleContext.Provider>
  );
}
