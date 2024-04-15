import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await fetch('/api/user'); // Check if user is logged in
        if (!response.ok) {
          router.push('/login'); // Redirect to login if not logged in
        }
      } catch (error) {
        console.error('Authentication error:', error);
        router.push('/login'); // Redirect to login if there's an error
      }
    };

    checkLoggedIn();
  }, []);
  return <div>{children}</div>;
};

export default Layout;
