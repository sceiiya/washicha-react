import { IfHomepageSection } from "../types/interfaces"
import Cards from './Cards';
import goimage from "../assets/images/Genmaicha.jpg"
import Buttonz from "./Buttonz";

const HomepageSection:React.FC<IfHomepageSection> = ({className}) => {
    // const [stringContent, numberContent, buttonElement] = cards
    return (
        <>
            <div className={className}>
                <div className="cards-container flex">
                    <Cards
                        className="p-3"
                        heading="Wakoucha"
                        subheading="Smooth Japanese black tea with subtle sweetness and delicate flavor notes."
                        imgage={goimage}
                        currency="$"
                        price={150}
                        button1={<Buttonz text="Buy Now" className="text-[#539941] border-[#539941] border-solid border hover:border-transparent hover:text-white hover:bg-[#539941] font-bold shadow-none hover:shadow-md hover:shadow-black/30" />}
                        button2={<Buttonz text="Discover" className="text-[#539941] border-[#539941] border-solid border hover:border-transparent  font-bold hover:shadow-md hover:shadow-black/30" />}
                        stock={"60"}
                    />
                    <Cards
                        className="p-3"
                        heading="Wakoucha"
                        subheading="Smooth Japanese black tea with subtle sweetness and delicate flavor notes."
                        imgage={goimage}
                        currency="$"
                        price={30}
                        button1={<Buttonz text="Buy Now" className="text-[#539941] border-[#539941] border-solid border hover:border-transparent hover:text-white hover:bg-[#539941] font-bold shadow-none hover:shadow-md hover:shadow-black/30" />}
                        button2={<Buttonz text="Discover" className="text-[#539941] border-[#539941] border-solid border hover:border-transparent  font-bold hover:shadow-md hover:shadow-black/30" />}
                        stock={"0"}
                    />
                    <Cards
                        className="p-3"
                        heading="Wakoucha"
                        subheading="Smooth Japanese black tea with subtle sweetness and delicate flavor notes."
                        imgage={goimage}
                        currency="$"
                        price={69}
                        button1={<Buttonz text="Buy Now" className="text-[#539941] border-[#539941] border-solid border hover:border-transparent hover:text-white hover:bg-[#539941] font-bold shadow-none hover:shadow-md hover:shadow-black/30" />}
                        button2={<Buttonz text="Discover" className="text-[#539941] border-[#539941] border-solid border hover:border-transparent  font-bold hover:shadow-md hover:shadow-black/30" />}
                        stock={"2"}
                    />
                    <Cards
                        className="p-3"
                        heading="Wakoucha"
                        subheading="Smooth Japanese black tea with subtle sweetness and delicate flavor notes."
                        imgage={goimage}
                        currency="$"
                        price={340}
                        button1={<Buttonz text="Buy Now" className="text-[#539941] border-[#539941] border-solid border hover:border-transparent hover:text-white hover:bg-[#539941] font-bold shadow-none hover:shadow-md hover:shadow-black/30" />}
                        button2={<Buttonz text="Discover" className="text-[#539941] border-[#539941] border-solid border hover:border-transparent  font-bold hover:shadow-md hover:shadow-black/30" />}
                        stock={"40"}
                    />
                </div>
            </div>
        </>
    )
}

export default HomepageSection