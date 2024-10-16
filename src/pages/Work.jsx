import {useEffect} from "react";

const Work = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="mb-32">
            <div className="flex flex-col text-justify md:max-w-2xl mt-4 py-2 space-y-4">
                <p className="flex font-mono w-auto pt-6 text-xl text-neutral-300">
                    my work
                </p>
                <p className="flex text-justify w-auto pb-4 pt-2 text-stone-300">
                    On a mission to build products, and along the way, teach the next generation of
                    developers. Here&apos;s a summary of my work so far.
                </p>
            </div>
            <div style={{borderTop: '1px solid gray', margin: '10px 0'}}/>
            <div className="flex flex-col text-justify md:max-w-2xl space-y-4 text-neutral-400">
                <div className="flex mt-6 justify-between">
                    <div>
                        <div className="flex">
                            <a href={"https://turbohire.co"}>
                                <img className="w-6 h-6 mr-2 bg-neutral-400" alt="turbohire"
                                     src="https://turbohire.co/wp-content/uploads/2023/01/cropped-favicon-192x192.png"/>
                            </a>
                            <a href="https://turbohire.co" className="text-xl font-mono text-neutral-300 hover:text-neutral-200">
                                Turbohire
                            </a>
                        </div>
                        <p className="flex w-auto text-sm text-gray-500">
                            Software Engineer
                        </p>
                    </div>
                    <div>
                        <span>(1-Y)</span>
                    </div>
                </div>
                <p className="text-justify w-auto pb-2">
                    TurboHire is globally compliant for all hiring, a Complete Hiring Solution for Enterprises. where, I
                    primarily
                    collaborated with the backend team implementing APIs, also in frontend team during production
                    release to fast-forward work environment.
                </p>
                <ul className="list-disc list-inside ml-4">
                    <li className="mb-2">
                        In 2023, I joined as SDE intern, I Achieved an significant increase in Unit testing code
                        coverage from <i className="font-bold">20%</i> to nearly <i
                        className="font-bold">85%</i> through
                        the implementation of
                        <a href={"https://nunit.org/"} className="underline inline-flex ml-2 mr-[3px]">
                            <img className="w-5 h-5 bg-neutral-900" alt="turbohire"
                                 src="https://nunit.org/img/nunit.svg"/>
                        </a>
                        <a className="underline text-neutral-300 mr-2" href={"https://nunit.org/"}>NUnit</a>
                        . Improved code coverage resulted in
                        reducing post-release defects. via writing unit test, I explored the large codebase(all the
                        services).
                    </li>
                    <li className="mb-2">
                        Later last year, I was promoted to SDE1, We Designed and implemented <i className="font-bold">Activity
                        Timeline</i> feature across the platform by achieving maintainable/scalable code with handling
                        large data by making simultaneous API calls and ensuring robust error handling, leading to
                        massive improvement in customer-satisfaction scores.
                    </li>
                    <li className="mb-2">
                        I resolved over <i className="font-bold">800 bugs</i>, ensuring the platform&apos;s stability
                        and performance. In addition, I implemented key client-requested features, such as <i
                        className="font-bold">time tracking</i> across the platform, <i className="font-bold">advanced
                        filtering options</i>, a fully <i className="font-bold">responsive UI</i>, and page-specific
                        functionalities. These contributions not only enhanced the user experience but also aligned the
                        product more closely with client needs.
                    </li>
                </ul>
                <p className="text-justify w-auto pb-2">
                    Since I joined
                    <a href={"https://turbohire.co"} className="underline inline-flex ml-2 mr-[3px]">
                        <img className="w-4 h-4 bg-neutral-400" alt="turbohire"
                             src="https://turbohire.co/wp-content/uploads/2023/01/cropped-favicon-192x192.png"/>
                    </a>
                    <a className="underline text-neutral-300 mr-2" href={"https://turbohire.co"}>Turbohire</a>
                    in 2023, My team contributions not only enhanced the user experience but also aligned the product
                    more closely with client needs, demonstrating my ability to deliver impactful solutions under tight
                    deadlines. It&apos;s used by Ola, Lenskart, PineLabs, Wakefit, Accel, Hanu, and more.
                </p>
            </div>
            <div style={{borderTop: '1px solid gray', margin: '10px 0'}}/>
            <div className="flex flex-col text-justify md:max-w-2xl space-y-4 text-neutral-400">
                <div className="flex mt-6 justify-between">
                    <div>
                        <div className="flex">
                            <a href="https://wato.ai" className="text-xl font-mono text-neutral-300 hover:text-neutral-200">
                                Wato.ai
                            </a>
                        </div>
                        <p className="flex w-auto text-sm text-gray-500">
                            Software Engineer Intern (Backend)
                        </p>
                    </div>
                    <div>
                        <span>(4-M)</span>
                    </div>
                </div>
                <ul className="list-disc list-inside ml-4">
                    <li className="mb-2">
                        Developed backend services for a SaaS tool focused on automating WhatsApp group and channel management.
                    </li>
                    <li className="mb-2">
                        Created a client dashboard app with distinct admin and user interface, enabling efficient management of user data and tasks. The app featured real-time data updates and customise reports resulting in a 50% improvement in operational efficiency.
                    </li>
                </ul>
            </div>
            <div style={{borderTop: '1px solid gray', margin: '10px 0'}}/>
            <div className="flex flex-col text-justify md:max-w-2xl space-y-4 text-neutral-400">
                <div className="flex mt-6 justify-between">
                    <div>
                        <div className="flex">
                            <a href="https://100xdevs.com/" className="text-xl font-mono text-neutral-300 hover:text-neutral-200">
                                100x-Devs Cohort
                            </a>
                        </div>
                        <p className="flex w-auto text-sm text-gray-500">
                            Teaching Assistent and <i className="font-bold ml-1 text-gray-400">Student Mentor</i>
                        </p>
                    </div>
                    <div>
                        <span>(8-M)</span>
                    </div>
                </div>
                <p className="text-justify w-auto pb-2">
                    100x-devs is an initiative cohort by <a className="underline text-stone-400 hover:text-stone-300 mr-2" href="https://x.com/kirat_tw?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Harkirat Singh</a>. Helping folks in community to understand technologies deep, starting from basics to able to contribute in open-source projects.
                </p>
                <ul className="list-disc list-inside ml-4">
                    <li className="mb-2">
                        In mid 2023, I joined as Teaching assistant, guided peers in MERN stack. Played a role in clarifying concepts, troubleshooting coding challenges, with a collaborative learning environment.
                    </li>
                    <li className="mb-2">
                        Later 2023, I was volunteered as Student mentor, helps in deep understanding of DOM Manipulation, Promises, Hooks, State Management, Context API, Recoil, RDBMS, version control, API Design, Mono-repos, Server-Side Render, Rest APIs ORM(Prisma), CI/CD in full stack.
                    </li>
                </ul>
            </div>
            <div style={{borderTop: '1px solid gray', margin: '10px 0'}}/>
            <div className="flex flex-col text-justify md:max-w-2xl space-y-4 text-neutral-400">
                <div className="flex mt-6 justify-between">
                    <div>
                        <div className="flex">
                            <a href="https://www.interviewbit.com" className="text-xl font-mono text-neutral-300 hover:text-neutral-200">
                                InterviewBit
                            </a>
                        </div>
                        <p className="flex w-auto text-sm text-gray-500">
                            Software Engineer Intern
                        </p>
                    </div>
                    <div>
                        <span>(6-M)</span>
                    </div>
                </div>
                <p className="text-justify w-auto pb-2">
                    InterviewBit is an ed-tech, The platform is designed to help prepare for interviews at top tech companies. During my time at InterviewBit, I gained my first production experience in Industry. I worked on contest, testcase and mock to help improve quality of product and automate the contest happens every week, building a product similar to open-source platform like Leetcode.
                </p>
            </div>
            <div style={{borderTop: '1px solid gray', margin: '10px 0'}}/>
            <div className="flex space-x-4 my-10">
                <a
                    href="https://x.com/_barat_tw"
                    className="flex p-3 px-5 md:px-8 rounded-lg border border-neutral-800 transition-colors hover:border-gray-600 hover:bg-neutral-800/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-[1.2rem] mt-[0.4rem] mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                    <span className="font-mono">follow me</span>
                </a>
                <button
                    href="https://leetcode.com/u/barathelangovan/"
                    className="flex p-3 px-5 md:px-8 rounded-lg border border-neutral-800 transition-colors hover:border-gray-600 hover:bg-neutral-800/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-[1.2rem] mt-[0.4rem] mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                    <span className="font-mono">leetcode</span>
                </button>
            </div>

        </main>
    )
}

export default Work;