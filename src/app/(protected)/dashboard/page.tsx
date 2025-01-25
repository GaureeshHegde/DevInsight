'use client';

import { useUser } from '@clerk/nextjs';

export default function DashboardPage() {
    const { isLoaded, user } = useUser();
    const { project} = useProject()
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Welcome back, {user?.firstName}!</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Add your dashboard content here */}
            </div>
        </div>
    );
}

