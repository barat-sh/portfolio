import React from "react";
import {useNavigate} from "react-router-dom";

const NavBar = ({children}) => {
    const navigate = useNavigate();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-10 md:px-24 py-10">
            <div className="z-10 w-full max-w-3xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold">barat.io</code>
                </p>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none lg:space-x-6">
                    <button className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" onClick={()=>{
                        navigate("/", { state: { from: 'MyComponent' }, replace: true })
                    }}>
                        home
                    </button>
                    <button className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" onClick={()=>{
                        navigate("/work", { state: { from: 'MyComponent' }, replace: true })
                    }}>
                        work
                    </button>
                    <button className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" onClick={()=>[
                        navigate("/education")
                    ]}>
                        education
                    </button>
                    <button className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" onClick={()=>{
                        navigate("/build")
                    }}>
                        build
                    </button>
                    <button className="flex place-items-center text-green-600 gap-2 p-8 lg:pointer-events-auto lg:p-0" onClick={()=>{
                        navigate("/contact")
                    }}>
                        dev-Note
                    </button>
                </div>
            </div>

            <div className="mt-4">
                {children}
            </div>
        </main>
    );
}

export default NavBar;