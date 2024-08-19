import SocialButton from "./SocialButton.jsx";

const ProductCard = ({title, info, detailedInfo, github, liveLink, liveLinkStatus}) => {
    return (
        <>
            <div
                className="flex flex-col text-justify max-w-2xl min-w-[440px] md:min-w-[500px] mb-6 w-auto h-auto min-h-48 shadow-md rounded-lg space-y-4 text-gray-200 border border-neutral-700 p-4 border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-600 hover:dark:bg-neutral-800/30">
                <div className="flex justify-between pt-4">
                    <p className="flex w-auto text-2xl">
                        {title}
                    </p>
                    <p className="flex w-auto text-gray-500 text-sm">
                        01-01-2022
                    </p>
                </div>
                <p className="flex text-justify w-auto text-md pt-2 text-gray-400">
                    {info}
                </p>
                <p className="flex text-justify w-auto text-md text-gray-400">
                    {detailedInfo}
                </p>
                <div className="flex justify-between pt-4" >
                    <a href={github}>github</a>
                    <a href={liveLink}>live</a>
                </div>
            </div>
        </>
    )
}

export default ProductCard;