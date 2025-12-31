import {
  Award,
  Building2,
  CarFront,
  Gift,
  MapPin,
  Plane,
  Star,
  TramFront,
  User,
  Zap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Building2,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Plane,
  },
  {
    title: "Calendar",
    url: "#",
    icon: TramFront,
  },
  {
    title: "Search",
    url: "#",
    icon: CarFront,
  },
  {
    title: "Settings1",
    url: "#",
    icon: Star,
  },
  {
    title: "Settings2",
    url: "#",
    icon: Gift,
  },
  {
    title: "Settings3",
    url: "#",
    icon: MapPin,
  },
  {
    title: "Settings4",
    url: "#",
    icon: Zap,
  },
  {
    title: "Settings5",
    url: "#",
    icon: Award,
  },
  {
    title: "Settings6",
    url: "#",
    icon: User,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarTrigger className="h-12 w-15.5 flex items-center" />
      <SidebarContent className="w-auto">
        <SidebarGroup className="p-3.25">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="gap-3 w-auto h-13">
                  <SidebarMenuButton tooltip={item.title} asChild>
                    <a href={item.url}>
                      <item.icon size={32} color="#FC811A" strokeWidth={2.5} />
                      <span className="group-data-[state=collapsed]:hidden">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
