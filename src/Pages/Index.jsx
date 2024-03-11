import linkedin from "../assets/linkedin.png"
import damien from "../assets/Damien.png"
import github from "../assets/github.png"
import insta from "../assets/insta.png"
import ai from "../assets/AIEthicscert.png"
import cH from "../assets/cloudhacks.png"
import cf from "../assets/cloudflare.png"
import react from "../assets/react.svg"
import vite from "../assets/vite.png"
import tailwind from "../assets/tailwind.png"
import bunjs from "../assets/bunjs.png"
import es from "../assets/edusave.jpg"
export default function Index() {
    return (
        <div
            className={"rounded-sm container bg-gradient-to-r from-orange-100 to-cyan-200 min-w-full min-h-screen py-2 subpixel-antialiased"}>
            <nav className={"min-w-fit mb-2 mx-auto"}>
                <div className={"container max-w-screen-xl items-center justify-between mx-auto p-4"}>
                    <ul className={"flex space-x-4 items-center justify-center mx-auto"}>
                        <li><a href={"https://www.linkedin.com/in/damien-foo-a2a246210/"} target={"_blank"} rel={"noreferrer"}><img src={linkedin} alt={"Linkedin"} width={190} className={"mr-4 ml-4"}/></a></li>
                        <li><a href={"https://www.github.com/DameHetfield9803"} target={"_blank"} rel={"noreferrer"}><img src={github} alt={"Github"} width={48} className={"rounded-full scale-110 mr-4"}/></a></li>
                        <li><a href={"https://instagram.com/dame_fdk/"} target={"_blank"} rel={"noreferrer"}><img src={insta} alt={"Instagram"} width={50} className={"rounded-2xl"}/></a></li>
                    </ul>
                </div>
            </nav>
            <h1 className={"text-7xl text-black text-center subpixel-antialiased mb-6"}><strong>Hey there! I'm <span
                className={"text-pink-500"}>Damien</span></strong></h1>
            <img src={damien} alt={"Damien"} width={300} className={"mx-auto mb-4 rounded-2xl shadow-xl"}/>
            <p className={"text-center text-xl mb-2"}><strong>I'm a software engineer and an aspiring cyber security specialist.</strong></p>
            <p className={"text-center text-xl mb-4"}><strong>This page is made using the following technologies</strong></p>
            <div className={"container mx-auto rounded-2xl content-center"}>
                <ul className={"space-x-8 justify-center flex flex-wrap mt-4 mx-auto subpixel-antialiased content-center"}>
                    <li><img src={react} alt={"React JS"} width={120}/></li>
                    <li><img src={vite} alt={"Vite JS"} width={120}/></li>
                    <li><img src={tailwind} alt={"Tailwind CSS"} width={120}/></li>
                    <li><img src={cf} alt={"Cloudflare"} width={360} className={"rounded-2xl shadow-orange-600 shadow-md"}/></li>
                    <li><img src={bunjs} alt={"Bun JS"} width={130} className={"rounded-full"}/></li>
                </ul>
            </div>
            <p className={"text-center text-xl mb-2 mt-2"}><strong>Certifications</strong></p>
            <img src={ai} alt={"AI Ethics and Governance"} width={500} className={"flex mx-auto mb-8 rounded-2xl"}/>
            <img src={cH} alt={"Cloudhacks"} width={500} className={"flex mx-auto rounded-2xl mb-8 scale-y-110"}/>
            <img src={es} alt={"Edusave Award 2019"} width={500} className={"flex mx-auto rounded-xl"}/>
        </div>
    )
}