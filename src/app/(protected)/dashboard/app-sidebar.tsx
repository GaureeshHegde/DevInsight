'use client';

import { useState } from 'react'; // Add useState
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Bot, Presentation, CreditCard, Menu } from 'lucide-react';
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
} from '~/components/ui/sidebar';
import Link from 'next/link';
import { cn } from '~/lib/utils';
import { Button } from '~/components/ui/button';
import Image from 'next/image';

const items = [
    { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Q&A', url: '/qa', icon: Bot },
    { title: 'Meeting', url: '/meetings', icon: Presentation },
    { title: 'Billing', url: '/billing', icon: CreditCard },
];

const projects = [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
];

export function AppSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false); // Local state management
    const pathname = usePathname();

    return (
        <Sidebar
            className={cn(
                'fixed inset-y-0 left-0 z-40 border-r bg-background transition-all duration-300 ease-in-out',
                {
                    'w-20': isCollapsed, // Collapsed width
                    'w-64': !isCollapsed, // Expanded width
                }
            )}
        >
            <SidebarHeader className="p-4 border-b">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="logo" width={40} height={40} />
                    {!isCollapsed && (
                        <h1 className="text-xl font-bold leading-none tracking-tight">Dionysis</h1>
                    )}
                </div>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)} // Toggle the state using setIsCollapsed
                    className="absolute -right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-white shadow-lg"
                >
                    <Menu className={cn('w-4 h-4', { 'rotate-180': !isCollapsed })} />
                </button>
            </SidebarHeader>
            <SidebarContent className="p-4">
                {/* Application Group */}
                <SidebarGroup>
                    <SidebarGroupLabel className={cn('text-sm font-medium text-muted-foreground', {
                        hidden: isCollapsed,
                    })}
                    >
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className={cn(
                                                'flex items-center gap-3 p-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                                                { 'bg-accent text-accent-foreground': pathname === item.url }
                                            )}
                                        >
                                            <item.icon className="w-5 h-5" />
                                            {!isCollapsed && <span>{item.title}</span>}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Projects Group */}
                <SidebarGroup>
                    <SidebarGroupLabel className={cn('text-sm font-medium text-muted-foreground', {
                        hidden: isCollapsed,
                    })}
                    >
                        Your Projects
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projects.map((project) => (
                                <SidebarMenuItem key={project.name}>
                                    <SidebarMenuButton asChild>
                                        <div
                                            className={cn(
                                                'flex items-center gap-3 p-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground'
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    'rounded-full w-6 h-6 flex items-center justify-center text-sm bg-primary text-primary-foreground'
                                                )}
                                            >
                                                {project.name[0]}
                                            </div>
                                            {!isCollapsed && <span>{project.name}</span>}
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <div className="h-4"></div>
                            <SidebarMenuItem>
                                <Link href="/create">
                                    <Button size="sm" variant="outline" className={cn('w-full', {
                                        hidden: isCollapsed,
                                    })}
                                    >
                                        Create Project
                                    </Button>
                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}