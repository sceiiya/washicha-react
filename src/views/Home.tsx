import { Helmet } from "react-helmet-async";
import FukamushiImg from "../assets/images/Fukamushi tea.jpg"
import HomepageSection from '../components/HomepageSection';

function Home() {
    const boom = ["number", 9999, "asdw"]
  return (
    <>
        <Helmet>
            <title>WashiCha | Home</title>
            <meta name="description" content="Homepage of WashiCha"/>
            <link rel="canonical" href="/home" data-rh="true" />
        </Helmet>
        <div className="flex justify-center h-screen items-center px-[12%] -mt-10">
            <div className="flex justify-center items-start">
                <div className="p-3">
                    <img className="h-auto max-w-lg rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30" src={FukamushiImg} alt="Fukamushi Tea" />
                </div>
                <div className="p-3 mt-20">
                    <h1 className="text-slate-600 font-extrabold text-4xl tracking-wide uppercase">Elevate Your Tea Experience with WashiCha's Exquisite Collection</h1>
                    <h2 className="text-slate-600 text-xl mt-5">Indulge in the Rich Heritage and Health Benefits of Japanese Teas. Savor the Pure Delight of Handpicked Quality Tea Leaves.</h2>
                    <div className="mt-6">
                        <a href="#" className="p-4 rounded-lg bg-[#539941] text-white font-bold shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 ">Join WashiCha</a>
                        <a href="#" className="p-4 rounded-lg text-[#539941] bg-[#87f86794] hover:text-white transition-all hover:bg-[#539941] font-bold shadow-none duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 ms-2 ">Discover Teas</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center h-screen items-center px-[12%]">1 tea</div>
        <HomepageSection className="flex  justify-center h-screen items-center px-[12%]" cards={boom}></HomepageSection>
        <div className="flex justify-center h-screen items-center px-[12%]">A blog</div>
        <div className="flex justify-center h-screen items-center px-[12%]">3 Teas</div>
        <div className="flex justify-center h-screen items-center px-[12%]">HealthTea</div>
        <div className="flex justify-center h-screen items-center px-[12%]">Delivery service</div> 
    </>
  )
}

export default Home