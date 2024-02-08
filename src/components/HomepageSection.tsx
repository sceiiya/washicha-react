import { IfHomepageSection } from "../types/interfaces"
import Cards from './Cards';

const HomepageSection:React.FC<IfHomepageSection> = ({className, cards}) => {
    const [stringContent, numberContent, buttonElement] = cards

    return (
        <>
            <div>HomepageSection
                <div className={className}></div>
                <div>{stringContent}</div>
                <div>{numberContent}</div>
                <div>{buttonElement}</div>
                <Cards 
                    className="p-3"
                    heading="head"
                    subheading="subhead"  
                />
            </div>
        </>
    )
}

export default HomepageSection