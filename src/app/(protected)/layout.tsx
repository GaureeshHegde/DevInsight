'use client';

import { SidebarProvider } from '~/components/ui/sidebar'; // Assuming SidebarProvider is available
import { UserButton } from '@clerk/nextjs';
import { AppSidebar } from './dashboard/app-sidebar'; // Import the updated AppSidebar
import { cn } from '~/lib/utils';

type Props = {
    children: React.ReactNode;
};

const SidebarLayout: React.FC<Props> = ({ children }) => {
    return (
        <SidebarProvider>
            <div className="flex w-screen min-h-screen">
                {/* Render AppSidebar without passing props */}
                <AppSidebar />
                {/* Main Content */}
                <main className=" flex-1 p-4">
                    <div className="flex items-center gap-2 border-sidebar-border bg-sidebar border shadow rounded-md p-2 px-4">
                        <div className="ml-auto">
                            <UserButton />
                        </div>
                    </div>
                    <div className="h-4"></div>
                    {/* Main content area */}
                    <div className="border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
};

export default SidebarLayout;