import { Dialog } from '@headlessui/react';
import { SignInButton } from '~/components/home/SignInButton';
import { SignOutButton } from '~/components/home/SignOutButton';
import { Head } from '~/components/home/Head';
import { PlacementButton } from '~/components/home/PlacementButton';
import { ThemeContext } from '../App';
import React, { useContext } from 'react';

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Head title="TOP PAGE" />
      {/* Adjusted layout to include the sign-in button at the top right */}
      <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'invert' : ''}`}>
        
        <div className="flex-grow hero">
          <div className="text-center hero-content">
            <div>
              <h1 className="text-[15vh] font-bold leading-none">
                Mindquest
              </h1>
              <p className="mt-4 mb-5 text-lg">
                A new type of math learning for autistic students to grow
              </p>
              <PlacementButton/>
              <button onClick={toggleTheme} className="btn bg-blue-500 hover:bg-blue-700 normal-case text-white my-4 font-bold">
                Toggle Theme
              </button>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Home;