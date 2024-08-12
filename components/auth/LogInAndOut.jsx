'use client';

import { useAuth } from '@/hooks/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LogInAndOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push('/login');
  };

  return (
    <div>
      {auth ? (
        <>
          <span className="px-1"> Hello, {auth?.email}</span>
          <span>
            <a
              className="cursior-pointer py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center"
              onClick={logout}
            >
              Logout
            </a>
          </span>
        </>
      ) : (
        <Link href={'/login'}>Login</Link>
      )}
    </div>
  );
};

export default LogInAndOut;
