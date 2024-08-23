import mypic from "../../public/mypic.JPG";
import macLogin from "../../public/macLogin.JPG";
import meeting from "../../public/meeting.JPG";
import img2 from "../../public/img2.jpg";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex">
                <p className="flex static w-auto justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono text-[1rem] font-bold">hey, I&apos;m Barat👋</code>
                </p>
                <p className="text-sm text-gray-300 pt-8 ml-2 sm:ml-0">a software engineer.</p>
            </div>
            <div className="flex flex-col text-justify md:max-w-2xl mt-4 py-2 mb-32 space-y-4 text-neutral-300">
                <p className="text-md">
                    I&apos;m a software developer, optimist, and community builder, I currently pursuing master&apos;s
                    in computer science at
                    <a href={"https://woolf.university"} className=" underline inline-flex mx-2 mr-[2px]">
                        <img className="w-4 h-4 bg-neutral-300" alt="woolf-university"
                             src="https://cdn.prod.website-files.com/645cde91bef717b04917dc79/645de16718627d2b507fcb22_woolf-icon.svg"/>
                    </a>
                    <a className="underline text-neutral-200" href={"https://woolf.university"}>Woolf University</a>
                    . My academic journey is driven by understanding the
                    complexities of software
                    engineering like HLD, LLD, dbms, data processing and more...
                </p>
                <div className="space-x-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 space-x-4 justify-evenly mb-5 mt-5">
                        <div className="overflow-hidden h-60 md:h-80 rounded-lg">
                            <img className=""
                                 src={mypic}/>
                        </div>
                        <div className="hidden md:block">
                            <div className="grid grid-rows-2 space-y-4">
                                <div className="overflow-hidden h-36 hidden md:block rounded-lg">
                                    <img className="" src={macLogin}/>
                                </div>
                                <div className="overflow-hidden h-36 hidden md:block rounded-lg">
                                    <img className="" src={meeting}/>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden h-60 md:h-80 rounded-lg">
                            <img className="object-cover"
                                 src={img2}/>
                        </div>

                    </div>
                </div>
                <p className="text-md">
                    Over the past, I worked as an SDE in engineering team at
                    <a href={"https://turbohire.co"} className="underline inline-flex ml-2 mr-[3px]">
                        <img className="w-4 h-4 bg-neutral-400" alt="turbohire"
                             src="https://turbohire.co/wp-content/uploads/2023/01/cropped-favicon-192x192.png"/>
                    </a>
                    <a className="underline text-neutral-100" href={"https://turbohire.co"}>Turbohire</a> and Intern
                    at <a className="underline text-neutral-100" href={"https://www.interviewbit.com"}>InterviewBit</a>
                    . where, I had the opportunity to work on huge
                    codebase, in collaboration with talented professionals, in a fast-paced work environment in
                    production release.
                </p>
                <p className="text-md">
                    In addition to studies and
                    <button className={"underline ml-2 text-neutral-200"} onClick={() => {
                        navigate("work")
                    }}>
                        work
                    </button>
                    , I dedicate to sharing my knowledge with
                    others. I help teach Data Structures and Algorithms(DSA) to individuals and cohort, also helps open
                    community with web-dev. Teaching DSA allows me to stay sharp in fundamental concepts . It is
                    incredibly rewarding to see folks grasp complex ideas and succeed in their own academic.
                </p>
                <div className="flex justify-evenly">
                    <a
                        href="https://x.com/_barat_tw"
                        className="flex p-3 px-3 sm:px-5 md:px-8 bg-neutral-900 rounded-lg border border-neutral-800 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-600 hover:dark:bg-neutral-800/30">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-[1.2rem] mt-[0.4rem] mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                        </svg>
                        <span className="font-mono">twitter</span>
                    </a>
                    <a
                        href="https://github.com/barat-sh"
                        className="flex p-3 px-3 sm:px-5 md:px-8 bg-neutral-900 rounded-lg border border-neutral-800 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-600 hover:dark:bg-neutral-800/30">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-[1.2rem] mt-[0.4rem] mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                        </svg>
                        <span className="font-mono">github</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/barathelangovan/"
                        className="flex p-3 px-3 sm:px-5 md:px-8 bg-neutral-900 rounded-lg border border-neutral-800 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-600 hover:dark:bg-neutral-800/30">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-[1.2rem] mt-[0.4rem] mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                        </svg>
                        <span className="font-mono">linkedin</span>
                    </a>
                </div>
                <p>
                    Over the past years, I&apos;ve written content on my blog and newsletter. I try to keep things
                    simple. You&apos;ll find writing about technologies I&apos;m interested in at the time, or how
                    I&apos;m learning and growing in my career, sharing knowledge along the way.
                </p>
                <p className="text-md">
                    Overall, my background is a blend of rigorous academic training, hands-on industry experience, and a
                    passion for sharing. I am continuously seeking opportunities to learn, grow, and contribute to the
                    field of computer science.
                </p>
                <p>
                    I invest small angel checks into tech community building tools for developers.
                </p>
                <a
                    href="https://github.com/barat-sh/Vim-Setup"
                    className="p-3 px-2 sm:px-5 md:px-8 bg-neutral-900 rounded-lg border border-neutral-800 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-gray-600 hover:dark:bg-neutral-800/30">
                    <div className="flex justify-between">
                        <span className=" text-md">Here i made <i className="font-bold">vim</i> more functional and fun.</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-[1.4rem] mt-[0.4rem] mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                        </svg>
                    </div>
                    <div className="leading-normal mt-2">
                        <span className="text-sm text-neutral-500">we all expect code editors to be faster and easy to use(withnot touching mouse, i&apos;m kidding..). here i made code editor more faster(i don&apos;t vim does) and fun to use.</span>
                    </div>
                </a>
                <p>
                    Ive worked with companies on developer marketing, developer relations, building open-source
                    communities, product-led growth, and more.
                </p>
                <div style={{borderTop: '1px solid gray', margin: '20px 0'}}/>
                <div className="flex space-x-4">
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
            </div>
        </>
    )
}
export default Home;