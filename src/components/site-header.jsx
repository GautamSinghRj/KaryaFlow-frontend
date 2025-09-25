import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header
      className="bg-[#F8F6F3] flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-base font-medium">{window.location.pathname=="/dashboard"?
            (window.location.pathname.substring(1,2).toUpperCase()+window.location.pathname.substring(2))
            :(window.location.pathname.substring(11,12).toUpperCase()+window.location.pathname.substring(12))}</h1>
      </div>
    </header>
  );
}
