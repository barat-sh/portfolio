const ProductCard = ({productTitle, productDescription}) => {
    return (
        <>
            <div
                className="flex flex-col text-justify max-w-2xl min-w-96 w-auto h-auto min-h-48 shadow-lg rounded-lg space-y-4 text-gray-200 border border-gray-800 p-4">
                <div className="flex justify-between pt-4">
                    <p className="flex w-auto text-2xl">
                        {productTitle}
                    </p>
                    <p className="flex w-auto text-gray-500 text-md">
                        01-01-2001
                    </p>
                </div>
                <p className="flex text-justify w-auto text-md pb-4 pt-2 text-gray-400">
                    {productDescription}
                </p>
            </div>
        </>
    )
}

export default ProductCard;