import SocialButton from "./SocialButton.jsx";

const ProductCard = ({title, info, detailedInfo, github, liveLink, liveLinkStatus}) => {
    return (
        <>
            <div
                className="flex flex-col text-justify max-w-2xl w-auto mb-6 h-auto min-h-48 shadow-md rounded-lg space-y-4 text-gray-200 border border-stone-700 p-4 px-5 py-4 transition-colors hover:border-gray-600 hover:bg-neutral-800/30">
                <div className="sm:flex justify-between pt-4">
                    <p className="text-xl font-mono">
                        {title}
                    </p>
                    <p className="text-gray-500 text-sm">
                        01-01-2022
                    </p>
                </div>
                <p className="flex text-justify w-auto text-md pt-2 text-gray-400">
                    {info}
                </p>
                <p className="flex text-justify w-auto text-md text-gray-400">
                    {detailedInfo}
                </p>
                <div className="flex justify-between pt-4">
                    <a className="font-mono text-sm" href={github}>github</a>
                    <a className="font-mono text-sm" href={liveLink}>live</a>
                </div>
            </div>
        </>
    )
}

export default ProductCard;