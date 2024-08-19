import mypic from "../../public/mypic.JPG";
import macLogin from "../../public/macLogin.JPG";
import meeting from "../../public/meeting.JPG";
import img2 from "../../public/img2.jpg";
import SocialButton from "../components/SocialButton.jsx";

const Home = () => {
    return (
        <>
            <div className="flex">
                <p className="flex w-auto justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-4 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <code className="font-mono font-bold">hey, Im Barat 👋</code>
                </p>
                <p className="text-sm text-gray-300 pt-8">a software engineer.</p>
            </div>
            <div className="flex flex-col text-justify md:max-w-2xl mt-4 py-2 space-y-4 text-gray-300">
                <p className="text-md">
                    I am currently pursuing a <i className="text-gray-100 font-semibold">Master’s degree in Computer
                    Science</i> at Woolf University, where I am deepening my knowledge and skills in various advanced
                    computing topics. My academic journey is driven by understanding the complexities of computer
                    science.
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
                <div className="flex justify-evenly">
                    <SocialButton userName={"barat-sh"} buttonKind={"github"}/>
                    <SocialButton userName={"barathelangovan"} buttonKind={"linkedin"}/>
                </div>
                <p className="text-md">
                    Overall, my background is a blend of rigorous academic training, hands-on industry experience, and a
                    passion for teaching. I am continuously seeking opportunities to learn, grow, and contribute to the
                    field of computer science.
                </p>
                <p>
                    I invest small angel checks into tech community building tools for developers.
                </p>
                <p>
                    Ive worked with companies on developer marketing, developer relations, building open-source communities, product-led growth, and more.
                </p>
                <div className="flex space-x-4">
                    <SocialButton userName={"barat_tw"} buttonKind={"twitter"} />
                    <SocialButton userName={"barat_tw"} buttonKind={"twitter"} />
                </div>
            </div>
        </>
    )
}
export default Home;