import React from "react";
import {useNavigate} from "react-router-dom";

const NavBar = ({children}) => {
    const navigate = useNavigate();
    return (
        <main className="flex min-h-screen flex-col items-center px-[0.3rem] md:px-24 py-10">
            <div className="z-10 w-full max-w-3xl items-center justify-between font-mono text-sm lg:flex">
                <a className="shake-button fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-900/80 lg:static lg:w-auto from-inherit lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30"
                href="https://barat.tech/">
                    <code className="font-mono font-bold">barat.tech</code>
                </a>
                <div
                    className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none space-x-2 lg:space-x-6">
                    <button className="flex place-items-center p-5 sm:p-8 lg:pointer-events-auto lg:p-0 hover:text-neutral-300" onClick={()=>{
                        navigate("/", { state: { from: 'MyComponent' }, replace: true })
                    }}>
                        home
                    </button>
                    <button className="flex place-items-center p-5 sm:p-8 lg:pointer-events-auto lg:p-0 hover:text-neutral-300" onClick={()=>{
                        navigate("/work", { state: { from: 'MyComponent' }, replace: true })
                    }}>
                        work
                    </button>
                    <button className="flex place-items-center p-5 sm:p-8 lg:pointer-events-auto lg:p-0 hover:text-neutral-300" onClick={()=>[
                        navigate("/education", { state: { from: 'MyComponent' }, replace: true })
                    ]}>
                        education
                    </button>
                    <button className="flex place-items-center p-5 sm:p-8 lg:pointer-events-auto lg:p-0 hover:text-neutral-300" onClick={()=>{
                        navigate("/build", { state: { from: 'MyComponent' }, replace: true })
                    }}>
                        build
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