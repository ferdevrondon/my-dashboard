import { SimpleWidget } from "@/components";

export default function DashboardMain() {
  return(
    <div className="text-black">
    <h1 className="mt-2 text-3xl">Dashboard</h1>
   <span className="tex-xl">Información general</span>

    <div className="flex flex-wrap-p-2">
      <SimpleWidget />
    </div>
    </div>
  )
}