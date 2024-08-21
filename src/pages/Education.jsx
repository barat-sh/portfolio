import {useEffect} from "react";

const Education = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="mb-32">
            <div className="flex flex-col text-justify md:max-w-2xl mt-4 py-2 space-y-4">
                <p className="flex font-mono w-auto pt-6 text-xl text-neutral-300">
                    my education
                </p>
                <p className="flex text-justify w-auto pb-4 pt-2 text-stone-300">
                    On a mission to build products developers love, and along the way, teach the next generation of
                    developers. Heres a summary of my work so far.
                </p>
            </div>
            <div style={{borderTop: '1px solid gray', margin: '10px 0'}}/>
            <div
                className="flex justify-between text-justify mt-6 max-w-2xl min-w-[440px] md:min-w-[500px] mb-6 w-auto h-auto min-h-32 shadow-md rounded-lg space-y-4 text-gray-200 border border-stone-700 p-4 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-600 hover:dark:bg-neutral-800/30">
                <div>
                    <p className="flex w-auto pt-6 text-xl text-neutral-300">
                        Woolf University
                    </p>
                    <p className="flex w-auto text-sm text-gray-500">
                        Masters in Computer Science
                    </p>
                </div>
                <span className="text-neutral-400">90 credits</span>
            </div>
            <div
                className="flex justify-between text-justify max-w-2xl min-w-[440px] md:min-w-[500px] mb-6 w-auto h-auto min-h-32 shadow-md rounded-lg space-y-4 text-gray-200 border border-stone-700 p-4 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-600 hover:dark:bg-neutral-800/30">
                <div>
                    <p className="flex w-auto pt-6 text-xl text-neutral-300">
                        BIT - Erode
                    </p>
                    <p className="flex w-auto text-sm text-gray-500">
                        Bachelors in Electronics and Instrumentation. (spec: Machine Coding)
                    </p>
                </div>
                <span className="text-neutral-400">120 credits</span>
            </div>
            <div style={{borderTop: '1px solid gray', margin: '10px 0'}}/>
            <div className="flex space-x-4 my-10">
                <a
                    href="https://x.com/_barat_tw"
                    className="flex p-3 px-5 md:px-8 rounded-lg border border-neutral-800 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-600 hover:dark:bg-neutral-800/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-[1.2rem] mt-[0.4rem] mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                    <span className="">follow me</span>
                </a>
            </div>

        </main>
    )
}

export default Education;