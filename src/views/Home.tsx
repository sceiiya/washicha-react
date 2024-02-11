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
        <div className="flex justify-center h-screen items-center px-[12%] max-md:px-1 -mt-10 max-sm:mt-10 ">
            <div className="flex justify-center items-start max-sm:flex-col ">
                <div className="p-3 max-md:w-2/5 max-sm:w-full">
                    <img className="h-auto w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30" src={FukamushiImg} alt="Fukamushi Tea" />
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
        <div className="flex justify-center h-screen items-center px-[12%]">
            1 tea
            Only 1 tea should be displayed here.. like a card but the pictur should be maybe in the right?
        </div>
        <div className="flex justify-center h-screen items-center px-[12%]">
            A blog
            Get at 'article' like  for this section
        </div>
        <HomepageSection
            className="flex justify-center h-screen items-center px-[12%]"
            cards={boom}
        >
        </HomepageSection>
        <div className="flex justify-center h-screen items-center px-[12%]">
            HealthTea
            Should have 3 Cards here each benefit for card as a tea consumer
        </div>
        <div className="flex justify-center h-screen items-center px-[12%]">
            Delivery service
            Should have cards also here or just a picture and an icon about the delivery services or the benefits of using the platform
        </div> 
    </>
  )
}

export default Home