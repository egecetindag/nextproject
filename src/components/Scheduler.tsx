
import { ScheduleContext } from "@/app/context";
import { useContext } from "react";
import { Button } from "./ui/button"
import { toast } from "./ui/use-toast"

const Scheduler = () => {
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
export default Scheduler;