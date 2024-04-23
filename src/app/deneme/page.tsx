import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
export default function deneme(){
  
    return (<div>
      <h1>routing example</h1>
      <Link className="text-blue-600 hover:underline" href="/">Go back</Link>
      </div>)
}