
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {useSelector} from "react-redux"

import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Dashboard() {
  const navigate=useNavigate();
  const token=useSelector(state => state.token);
  useEffect(()=>{
    if(token==null)
    { 
      navigate("/login");
    }
  },[token,navigate]);

  if(token==null)return null;
  return (
      <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col bg-[#F8F6F3]">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <Outlet />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
