import { useCallback, useState } from 'react';
import reactLogo from '../assets/react.svg';
import styles from './index.module.css';

export default function Home() {
  const [count, setCount] = useState(0);
  const handleCountClick = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div className="flex justify-center h-screen w-screen items-center text-center">
      <div className="flex flex-col w-5/6 h-5/6 sm:w-4/6 sm:h-4/6">
        <div className="grid grid-cols-2 justify-items-center">
          <a
            className="justify-self-end p-5 mr-5"
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${styles.logo} hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.67)]`}
              src="/vite.svg"
              alt="Vite logo"
            />
          </a>
          <a
            className="justify-self-start p-5"
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${styles.logo} hover:drop-shadow-[0_0_2em_rgba(97,218,251,0.67)] animate-spin-react`}
              src={reactLogo}
              alt="React logo"
            />
          </a>
          <h1 className="col-span-2 text-5xl leading-10 my-10 font-medium">Vite + React</h1>
        </div>
        <div className="mb-10">
          <button
            className="font-mono rounded-lg bg-neutral-900 p-3 mb-10"
            onClick={handleCountClick}
          >
            count is {count}
          </button>
          <p className="font-mono text-base">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-slate-400 text-base">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}
