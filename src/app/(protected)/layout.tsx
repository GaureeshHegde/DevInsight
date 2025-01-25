'use client';

import { UserButton } from '@clerk/nextjs';
import { AppSidebar } from './dashboard/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar';
import { cn } from '~/lib/utils';

type Props = {
    children: React.ReactNode;
};

const SidebarLayout: React.FC<Props> = ({ children }) => {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AppSidebar />
                <SidebarInset className="flex-1">
                    {/* Header with UserButton */}
                    <header className="flex h-16 items-center gap-4 px-6 border-b">
                        <SidebarTrigger />
                        <div className="ml-auto">
                            <UserButton />
                        </div>
                    </header>
                    {/* Main content */}
                    <main className="flex-1 p-6 w-full">
                        <div className="border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-auto min-h-[calc(100vh-7rem)] w-full p-4">
                            {children}
                        </div>
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
};

export default SidebarLayout;

