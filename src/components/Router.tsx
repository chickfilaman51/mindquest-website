import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState, useRef, useEffect } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import { SignInButton } from '~/components/home/SignInButton';
import { SignOutButton } from '~/components/home/SignOutButton';
import { useAuthState } from '~/components/home/UserContext';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'; // Import User type from firebase/auth
import { useAuth } from "~/lib/firebase";
import { setupFirebase } from '~/lib/firebase';

setupFirebase();

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const HomeScreen = lazy(() => import('~/components/home/Home'));
const Page404Screen = lazy(() => import('~/components/home/404'));
const PlacementTest = lazy(() => import('~/components/placement/PlacementTest'));
const PlacementResults = lazy(() => import('~/components/placement/PlacementResults'));

function Layout() {
  const { state } = useAuthState();
  // Explicitly define the state type to include User or null
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!useAuth()) {
      console.log('Firebase Auth is not initialized yet.');
      return;
    }

    const unsubscribe = onAuthStateChanged(useAuth(), (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [useAuth()]);

  return (
    <div>
      <nav className="p-4 flex items-center justify-between">   
        <div className="p-4 text-left">
          <span className='text-2xl font-bold'>Mindquest</span>
        </div>
        <div className="p-4 text-right">
          <span className='pr-5'>Welcome, {user?.displayName ?? 'Guest'}!</span>
          {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomeScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
        {
          path: '/placementtest',
          element: <PlacementTest />,
        },
        {
          path: '/placementresults',
          element: <PlacementResults />,
        }
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};