'use client';

import { useUser } from '@clerk/nextjs';
// import { AppSidebar } from './app-sidebar';

const DashboardPage = () => {
    const { isLoaded, user } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>; // Show a loading state while user data is being fetched
    }

    return (
      <div>
        {/* <AppSidebar /> */}
        <div>
          <div>{user?.firstName}</div>
          <div>{user?.lastName}</div>
        </div>
      </div>
    );
};

export default DashboardPage;