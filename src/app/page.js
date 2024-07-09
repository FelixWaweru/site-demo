import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-tr from-purple-400 to-pink-600">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to My Site
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="mb-8">
          <input type="email" placeholder="Enter your email" className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105">
            Submit
          </button>
        </div>
      </div>  
    </main>
  );
}