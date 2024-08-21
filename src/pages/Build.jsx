import ProductCard from "../components/ProductCard.jsx";
import ProjectList from "../stores/Projects.jsx";
import {useEffect} from "react";

const Build = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
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
        </>
    )
}

export default Build;