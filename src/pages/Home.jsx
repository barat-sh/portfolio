
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
                                 src="https://lh3.googleusercontent.com/pw/AP1GczMPt6WPizdxEYde3uJ_hf6mp1xU_mcCe_dw7FE1hmq0bD-Z4oaNiMX-6nJrjvyXmTDghEoiG0xQMnWQlP1pMb0Uv7wKr_SopQbBDsrxQ8A0TD3rHllYInXf8i1eETgmD7BGLPNGeOD7IIT1jwuIa5ec5IOBl6HfEilPx0B0IGd9ovlJVRgBN__gUEvA8QgyMfuu4Kq6xwB3AjISPzTDL-q8swQtzGIP4C3UBbGbd7hDEcMUR_r_Ew4QVCCECqnFtYBvH937aBZSm2x5GBIUcLUVta_xum6H58rur4HqHILvi6O5I54cJK_LqiyZZzaBAnjKoGopT63fu8K1Mt8fGa5T_Gs0Dvgvz4zMZIGf83x-g9HASG-8oewczXvYfYkKSRKacYAQ-GpAK_zW3pcoDNmVzsSW9xFZyM_eBaywqK107PlxkPSJETD-b5vD67_ssfgMWIzp5nndVS9K5SzR-ekYaooZpzGEtERR_wpp-bTw2--tH2DSDi5hyUrC_4PdwYLfJ4yXcbwdNvNdF4Xr4pDvzgjFwAI8LIZDAFqviWtnjuNdlSsrpbsbRHKVIuDzPmgPLTlZzhLaCR_h6uTm_wpjJo318fRsbaB8jDKRpzrKaPR8XmedULK8BGwio_zYbPlNeIJWxpkxRbtklj5WJ3WgXD-e5T-bZ5ZkoM1hiHX3BANW72lNW_nSe8eSdC3iBILTYR8iDc9M43C4TlvE3_GLt0V7rzMle621LwgcC6vMjpLfWOTD_3QssBFVb9R-2w6Wns2OR23JF7EpUknley7cUWOiz8PMU2FcPTWW4YHRAksF68Xlt8B5G8uZAs94o8hm8gj8tWrPyEJ36zamKlMGBKbpYtG1OOdp9IwOxmTKi_1AiIyCdO9fvkLCT-EHMPlAdkNUA8MR1JpVHOeVGN3i=w423-h923-s-no?authuser=0"/>
                        </div>
                        <div className="hidden md:block">
                            <div className="grid grid-rows-2 space-y-4">
                                <div className="overflow-hidden h-36 hidden md:block rounded-lg">
                                    <img className="" src={"https://lh3.googleusercontent.com/pw/AP1GczNooFXCqa7R3SkqrOODOgyXgbG7qiLvLLT_0Wft-D76kmxiPnmyDKC-cEyBURg40iKhj2xLIekMVlSBjt6Xg2ImR3gWixrxF6qXjIOEwlmw_v_VUGFXMLItpHG6nHYfTebYy7GyTGOBJkcugywieVzvkOwoIray82cR-LQ60mMuZ8ptRZw0q5NpE-ge1ZzHBjeH4qm543W16BrY3AK2oN-Wia1MlXNeDvvH25QBSvImX_NacCtsIxGUdb-LMzINve-MH0O_bBVyBswSPq5Z1K7dl1dAoIPKe3_zEEamkMOVZYDLJaFD7ubrWABF1irV_2PR_1C4hYw2bl5TKyw1z5kIHa7XT6idZruVKry72OfI11Sh16ULtOzrArJZY-k4z2ZVMp7Woq3s8XhOAS5gxocnzHanp8BfGGXXQ_fmG7mIf4QuPeFLw-tNxVW0MnueCTYIM-zsgLDPHXSNennf83bgqmh1_6nEtPta8zvrUEVYPnH8VzhgduVByuxKCTagxElkz1SnqeYoxcBcTJSSs_Exscai0pQkkXC8maRsm2t-rtdT3ayeZB0ffb90qPWkWJAwn3zfZ5wnhrWNIEbXNYqo9VrXMKt8wglbuifsznw7NYo0gUq8n5T1cae8AW7ChM5VkMHDNkD8XDgPvS7o3dTTDeuUh3MpsYmyFJdVp1sh1hgsB0UdDEqmEM3-ZnijjegHyAX87v6NNOeugQ6GfJbZyQ_pEAL4waYnbuGaFYxhIgoqGjFx88U0T1Y-z0j2eaMp_BFuSAaeMej6bItdkgGC6aERnb67IHxds1rufATkG4z1pHNVQiN3UY1W9bwT4oMo_3Afnup90mnfgT7GRgsGypaTFIZBQLbVkdMqknUiQzJ6xX_HiAKH-gbRDzS-Zfsz8djss9qTPAQw58V-xfGN=w1484-h1978-s-no?authuser=0"}/>
                                </div>
                                <div className="overflow-hidden h-36 hidden md:block rounded-lg">
                                    <img className="" src={"https://lh3.googleusercontent.com/pw/AP1GczOgHJqT7fYowPTKJoGxp1UthAx2mhIs3KaXxaAJsFUtCbVCzNfGn1BBaNWgmxxD52SH5nsSHO4eTy5veeCZlVyiR6VVSxeOtZXj2y8GkvVyQMgJEQO71IwPl2-HiHwHyIpxiu7U3WDFQlejMNs-JXbfscr2IQuyS1kFCqLTd1QTp_x9FbmfVC-Bq1AZUmyeq2JT2qSPpH8hZUxAnykQ9woPdL_Fsnwrc9vnXtvG195zVFLGNCjtjK831IBA1err6fiVl7tCfFV37IYI49CfDR0AqUznrNHgJk9bso7f0gbxkMl2wYfzO-anYZpo6QcQyKI0N1XcOw2fvNjl2lHjbo1HMJmfWXPs_pmrrJAPw8YBmy8nTwSP1BR4gWXSEOWLKeO2ZguHg3ZsVWUBjD-YCKM9O21G8rUuC2J3HoSIB6Km8ihXLU7L-xZqKBxHnfj2U89CtNRtFM7OU5xCLKFrR6syNxuAB_RCg4f33l_5voAyfi2imi09uoeWyCC13Vn_uaFDHoCSOQdJ9rAhUsHGjsm77rkLy9vI5BGQL42--uiUksFTSlywzaQmQ4l2fql7LclmAytdjhEJX7R7wCjFzEelhuE3oZDJSxdhsYFCo4qDItLIII1S6n7USZE1eIrxrx9sGeGN1PECUZfNuSe5BRZ6CJ6kse3YZh3uLVobIhWx95yvijVpD3MfLZOtAN8fK2GJdJ3Rl2_bzTejE0OBK8JOHBrgj7Vrn7_drjYL94lBYZsXbE5lLtLbGjbN7MmFFdtKEarSE0vqbMW3yp7qA_OUVayM8cExiw0z-G6RIN0s6RGMl0G4XACG2CjKDyMqatk4fi5_WjF1SE1m3i14WgXuEKMegAPpBqte2pWCAeyZdDfQBs7ic2fZRzesqOGqP1vkVxfpp72TLrqyWo6O3q_t=w1112-h1978-s-no?authuser=0"}/>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden h-60 md:h-80 rounded-lg">
                            <img className="object-cover"
                                 src={"https://lh3.googleusercontent.com/pw/AP1GczOvz_aLUc9eJzDBKXLHkyPp9YDB3TqJBOilK8Q8xSi4wkbwdCOjd5dk11LFtgQCrl-Zvt-2MDRqB1vlhpsPwwPvBEEuzPGBvxMrJTSUuDX_-LQumFoUPPhs-bLu6THkx493JnEv_XN3IQUESfej5ETNWd4zgJr8rbbtRHL8yZgxqljrEpoDZQU0OjInQKinZK5NGQSr94uIjwytHNRMm-CoWXJjI8neCRl0iDikaPVhLvXHzqVBGx1Bd0Yorkm-l7VIUXt_mhtkIdg4NaAucpUgg41mIgNdFqSdOzTVtJHOVEKC6Rp63GzRf1imIQ5pcZWwxlvgDuIoNwqvj0rnryymCE7hUQnTNc1mdPJTGRyzyAAiVEbED9TBGPlzcCL3Ddy_eSmleFDiTLUviqnbghpifN94wubth1As5pHEV5WCE6xtMqyFNMIlILm950rmn9Z8pMYeS92XjpP3U2nvqjkOgnHcC8wuSXHuaNGoNQAW5tbcReBrX0cxN2_qrk7Mt7bj1_puBnQJTGjBc_w1QumRgsiMkfi5VVtUfqE5UoNk_3RhaEoTtuqNlQTODOdkSZ9bYHeeUaPxA_Z3OXf12yT2UGkU3StzXVX1hF_DzHJ8nt830qRz-HNeqdlG17MpN8ZZJiv_VpgCm7fe2lSJL-rDBABnwJo79-U_8nlKYvk_nH9TDJC7Ln7eqX5jan0Ys7fE2acgL5V16cy-Tbpu04TyeyBAroYOLQDiLBHx8VH8OFLsaGR4gIrL_D6mGVMmdTTTt1j1nz24FDLeF_-UED_-ThlrEvYGvr97IRkQFmYGK8Gn48xzEh75KOz0xVPbxR8WXaHkCVE5xrwimw7SRlF-Ows7holKosPro7_PwkWtapeWwILYfsZXb0SjGqYoA8RH_gwHgmHfj6pBG3EmzRsV=w624-h1280-s-no?authuser=0"}/>
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
export default Home;