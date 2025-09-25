"use client";
import * as React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {logout} from "@/config/axios-config.js";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { deletion } from "@/features/tokenSlice.js"

export function NavSecondary({
  items,
  ...props
}) {
  const token = useSelector(state => state.token)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const response = await logout(token);
      console.log(response);
      dispatch(deletion());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <SidebarGroup {...props}>
          <SidebarGroupContent className="bg-[#F8F6F3]">
            <SidebarMenu>
              {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild onClick={handleLogOut}>
                      <div>
                        <item.icon/>
                        <span>{item.title}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
    );
  }
