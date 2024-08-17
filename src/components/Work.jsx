import mypic from "../asserts/mypic.JPG";
import myvid from "../asserts/myvid.MOV";
import meeting from "../asserts/meeting.JPG";

const Work = () => {
    return (
        <>
            <div className="flex flex-col text-justify md:max-w-2xl mt-4 py-2 space-y-4 text-gray-200">
                <p className="flex w-auto pt-6 text-3xl">
                    my work
                </p>
                <p className="flex text-justify w-auto pb-4 pt-2 text-gray-300">
                    On a mission to build products developers love, and along the way, teach the next generation of
                    developers. Heres a summary of my work so far.
                </p>
            </div>
            <div style={{borderTop: '1px solid gray', margin: '10px 0'}}/>
            <div className="flex flex-col text-justify md:max-w-2xl py-2 space-y-4 text-gray-200">
                <div>
                    <p className="flex w-auto pt-6 text-xl">
                        Turbohire
                    </p>
                    <p className="flex w-auto text-sm text-gray-500">
                        Junior Software Engineer
                    </p>
                </div>
                <p className="flex text-justify w-auto pb-4">
                    I joined Vercel early to grow Next.js and our developer community. I built our Developer Relations team to teach our community about our products.
                </p>
            </div>
            <div className="flex flex-col text-justify md:max-w-2xl mt-4 py-2 space-y-4 text-gray-300">
                <p className="text-md">
                    I am currently pursuing a <i className="text-gray-100 font-semibold">Master’s degree in Computer
                    Science</i> at Woolf University, where I am deepening my knowledge and skills in various advanced
                    computing topics. My academic journey is driven by understanding the complexities of computer
                    science.
                </p>
                <div className="space-x-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 mb-4 space-x-4 justify-evenly mb-5 mt-5">
                        <div className="overflow-hidden h-48 rounded-lg">
                            <img className="" src={mypic}/>
                        </div>
                        <div className="overflow-hidden h-48 rounded-lg">
                            <img className="" src={myvid}/>
                        </div>
                        <div className="overflow-hidden h-48 hidden md:block rounded-lg">
                            <img className="" src={meeting}/>
                        </div>
                    </div>
                </div>
                <p className="text-md">
                    Prior to my master`s program, I gained valuable industry experience as a Software Engineer Intern
                    at <i className="text-gray-100 font-semibold">TurboHire</i>. During my internship, I had the
                    opportunity to work on innovative projects, collaborate with talented professionals, and apply my
                    theoretical knowledge to practical, real-world problems. This experience not only honed my technical
                    skills but also taught me the importance of teamwork, problem-solving, and adaptability in a
                    fast-paced work environment.
                </p>
                <p className="text-md">
                    In addition to my studies and professional experience, I am dedicated to sharing my knowledge with
                    others. I teach Data Structures and Algorithms (DSA) to individuals who are eager to learn and
                    improve their coding skills. Teaching DSA allows me to stay sharp in fundamental concepts while
                    helping others achieve their learning goals. It is incredibly rewarding to see my students grasp
                    complex ideas and succeed in their own academic and professional pursuits.
                </p>
                <p className="text-md">
                    Overall, my background is a blend of rigorous academic training, hands-on industry experience, and a
                    passion for teaching. I am continuously seeking opportunities to learn, grow, and contribute to the
                    field of computer science.
                </p>
            </div>
        </>
    )
}

export default Work;