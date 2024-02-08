import { IfButtonz } from "../types/interfaces"

const Buttonz:React.FC<IfButtonz> = ({className, text}) => {
  return (
    <button className={`px-2 py-1 rounded-lg duration-200 ease-in-out w-1/2 ${className}`}>{text}</button>
  )
}

export default Buttonz