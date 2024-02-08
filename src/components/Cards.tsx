import { IfCards } from "../types/interfaces"

const Cards:React.FC<IfCards> = ({className, heading, subheading, currency, price, imgage, stock}) => {
  return (
    <>
        <div className={`flex ${className}`}>
            {imgage && <img src={imgage} alt={heading} /> }
            {heading && <p> {heading} </p> }
            {subheading && <p> {subheading} </p> }
            {currency && price && <p>{currency} <span>{price.toString()}</span></p>}
            {stock && <p>Availability: { stock >= 1 ? "In stock" : "Out of stock" }</p> }
        </div>
    </>
  )
}

export default Cards