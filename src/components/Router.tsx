import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState, useRef, useEffect,useContext } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import { SignInButton } from '~/components/home/SignInButton';
import { SignOutButton } from '~/components/home/SignOutButton';
import { useAuthState } from '~/components/home/UserContext';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'; // Import User type from firebase/auth
import { useAuth } from "~/lib/firebase";
import { setupFirebase } from '~/lib/firebase';
import 'index.css';
setupFirebase();

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const HomeScreen = lazy(() => import('~/components/home/Home'));
const Page404Screen = lazy(() => import('~/components/home/404'));
const PlacementTest = lazy(() => import('~/components/placement/PlacementTest'));
const PlacementResults = lazy(() => import('~/components/placement/PlacementResults'));
const Dashboard = lazy(() => import('~/components/game/Dashboard'));
const Lesson = lazy(() => import('~/components/game/Lesson'));
const Questions = lazy(() => import('~/components/game/Questions'));
const TestOut = lazy(() => import('~/components/game/Test'));
const TestResults = lazy(() => import('~/components/game/TestResults'));
import { ThemeContext } from "./App";
function Layout() {
  const { state } = useAuthState();
  const [user, setUser] = useState<User | null>(null);
  const { theme, setTheme } = useContext(ThemeContext); // Use setTheme 

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
          <span className="ml-4 text-black">Theme:</span>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} className="ml-2 bg-blue-500 text-white rounded px-4 py-2">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
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
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionIndex: number]: number }>({});

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
          element: <PlacementTest selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />,
        },
        {
          path: '/placementresults',
          element: <PlacementResults selectedAnswers={selectedAnswers} />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/lesson',
          element: <Lesson />,
        },
        {
          path: '/questions',
          element: <Questions />,
        },
        {
          path: '/test',
          element: <TestOut />,
        },
        {
          path: '/testresults',
          element: <TestResults />,
        },
        
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