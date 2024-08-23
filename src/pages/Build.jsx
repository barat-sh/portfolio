import ProductCard from "../components/ProductCard.jsx";
import ProjectList from "../stores/Projects.jsx";
import {useEffect} from "react";

const Build = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="mb-32">
            <div className="flex flex-col text-justify md:max-w-2xl mt-4 py-2 space-y-4 text-gray-200">
                <p className="flex font-mono w-auto pt-6 text-xl text-neutral-300">
                    read my projects
                </p>
                <p className="flex text-justify w-auto pb-4 pt-2 text-stone-300">
                    On a mission to build products developers love, and along the way, teach the next generation of
                    developers. Heres a summary of my work so far.
                </p>
            </div>
            {ProjectList.map((item, index) => {
                return (
                    <div key={index}>
                        <ProductCard title={item.projectName} info={item.projectInfo}
                                     detailedInfo={item.projectDetailedInfo} github={item.github}
                                     liveLink={item.liveLink}/>
                    </div>
                )
            })}
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
                    <span className="font-mono">follow me</span>
                </a>
            </div>
        </main>
    )
}

export default Build;