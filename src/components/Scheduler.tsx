import { ScheduleContext } from "@/app/page";
import { useContext } from "react";
import { Button } from "./ui/button"
import { toast } from "./ui/use-toast"

export default function scheduler(){
    const {txt} = useContext(ScheduleContext);
    return (
      <div className="mt-5">
        <Button disabled={!txt} onClick={()=>toast({
            title: "Scheduled: Catch up",
            description: `${txt}`,
        })}>Open toaster</Button>
      </div>
    )
}