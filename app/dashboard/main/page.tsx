import { WidgetsGrid } from "@/components";


 
 export const metadata = {
  title: 'Admin dasboard',
  description: 'Admin dasboard',
 };
export default function DashboardMain() {
  return(
    <div className="text-black">
    <h1 className="mt-2 text-3xl">Dashboard</h1>
   <span className="tex-xl">Información general</span>
    <WidgetsGrid />
    
    </div>
  )
}