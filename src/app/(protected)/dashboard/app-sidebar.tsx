'use client';

import { usePathname } from 'next/navigation';
import { LayoutDashboard, Bot, Presentation, CreditCard, Plus } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '~/components/ui/sidebar';
import Link from 'next/link';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import Image from 'next/image';
import { use } from 'react';
import useProject from '~/hooks/use-project';
import  setProjectId  from '~/hooks/use-project';

const items = [
    { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Q&A', url: '/qa', icon: Bot },
    { title: 'Meeting', url: '/meetings', icon: Presentation },
    { title: 'Billing', url: '/billing', icon: CreditCard },
];


export function AppSidebar() {
    const pathname = usePathname();
    const {projects, projectId} = useProject();
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="border-b p-4">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="logo" width={40} height={40} />
                    <span className="group-data-[collapsible=icon]:hidden font-semibold">
                        Dionysis
                    </span>
                </Link>
            </SidebarHeader>
            <SidebarContent className="p-4">
                {/* Application Group */}
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                                        <Link
                                            href={item.url}
                                            className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center"
                                        >
                                            <item.icon className="h-4 w-4" />
                                            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Projects Group */}
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Your Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects?.map((project) => (
                                <SidebarMenuItem key={project.name}>
                                    <SidebarMenuButton asChild>
                                        <div onClick = {() => {
                                            setProjectId(project.id)
                                        }}></div>
                                        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
                                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                                                {project.name[0]}
                                            </div>
                                            <span className="group-data-[collapsible=icon]:hidden">{project.name}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="mt-4 group-data-[collapsible=icon]:hidden">
                    <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href="/create">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Project
                        </Link>
                    </Button>
                </div>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}

