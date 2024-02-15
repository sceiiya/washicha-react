import { IfCards } from "../types/interfaces"
import Buttonz from "./Buttonz"

const Cards:React.FC<IfCards> = ({className, heading, subheading, currency, price, imgage, stock, button1, button2}) => {
  return (
    <>
        <div className={`w-fit flex flex-col rounded-lg transition-all duration-100 ease-in-out shadow-md shadow-black/30 bg-slate-100 m-2 shadow- ${className}`}>
            {imgage && <img className="rounded-t-md object-cover aspect-square max-h-[210px] max-w-[210px]" src={imgage} alt={heading} /> }
            {heading && <p className="font-bold pt-2 max-w-[210px]"> {heading} </p> }
            {subheading && <p className="text-xs max-w-[210px]"> {subheading} </p> }
            {currency && price && <p className="mt-1 italic font-bold">{currency} <span>{price.toString()}</span></p>}
            {stock && <p className="text-sm">Availability: { parseInt(stock) >= 1 ? <span className="text-green-700 italic" >In stock</span>  : <span className="text-red-700 italic">Out of stock</span> }</p> }
            {(button1 || button2) && <div className="mt-2 flex gap-2 max-w-[210px]">
              {<Buttonz text={`${button1}`} className="text-[#539941] border-[#539941] border-solid border hover:border-transparent hover:text-white hover:bg-[#539941] font-bold shadow-none hover:shadow-md hover:shadow-black/30" />}
              {<Buttonz text={`${button2}`} className="text-[#539941] border-[#539941] border-solid border hover:border-transparent  font-bold hover:shadow-md hover:shadow-black/30" />}
               </div> }
        </div>
    </>
  )
}

export default Cards