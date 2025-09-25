import * as React from "react"


import {
  IconCamera,
  IconMessageCircle,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconLogout,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "",
      icon: IconDashboard,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: IconListDetails,
    },
    {
      title: "Chat",
      url: "/chat",
      icon: IconMessageCircle,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "/team",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Log Out",
      icon: IconLogout,
    }
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="flex flex-row justify-start items-center gap-0 bg-[#F8F6F3]">
        <img src="../src/assets/logo.png" alt="Logo for Karyaflow" className="h-12 w-12" />
        <p className="text-base font-black">karyaflow</p>
      </SidebarHeader>
      <SidebarContent className="bg-[#F8F6F3]">
        <NavMain items={data.navMain}/>
        <NavSecondary
          items={data.navSecondary.map(item => ({
            ...item,
          }))}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter className="bg-[#F8F6F3]">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
