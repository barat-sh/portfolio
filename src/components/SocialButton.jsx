
const SocialButton = ({userName, buttonKind}) => {
    return (
        <>
            <button
                className="flex justify-center text-justify max-w-60 shadow-lg rounded-lg space-y-4 bg-buttonGray border border-gray-700 p-4">
                <div className="flex items-center justify-between space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                    <div className="flex space-x-2 text-gray-300">
                        <p>
                            {buttonKind ? buttonKind : ""}/{userName ? userName : ""}
                        </p>
                    </div>
                </div>
            </button>
        </>
    )
}

export default SocialButton;