import { Helmet } from "react-helmet-async";
import FukamushiImg from "../assets/images/Fukamushi tea.jpg"

function Home() {
  return (
    <>
        <Helmet>
            <title>WashiTea | Home</title>
            <meta name="description" content="Homepage of WashiTea"/>
            <link rel="canonical" href="/home" data-rh="true" />
        </Helmet>
        <div className="flex justify-center h-screen items-center ">
            <div className="flex justify-center items-center">
                <div className="p-3">
                    <img className="h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30" src={FukamushiImg} alt="Fukamushi Tea" />
                </div>
                <div className="p-3">
                    <h1>Heading</h1>
                    <h2>Subheading</h2>
                    <div>
                        <button>Join WashiTea</button>
                        <button>See all tea</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center h-screen items-center ">1 tea</div>
        <div className="flex justify-center h-screen items-center ">A blog</div>
        <div className="flex justify-center h-screen items-center ">3 Teas</div>
        <div className="flex justify-center h-screen items-center ">HealthTea</div>
        <div className="flex justify-center h-screen items-center ">Delivery service</div> 
    </>
  )
}

export default Home