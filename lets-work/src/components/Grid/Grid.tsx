
import { Link } from "react-router-dom";
import { Card } from "../card/card";
import { GridComponent } from "./setGrid";
export const Grid = ({elements,setCard,isShort}:GridComponent) => {
    if (elements.length>0) return (
            <div className="row">
                {elements.map((element:any)=>(
                    <div className="col-12 col-lg-6 col-xl-4" key={element?.id}>
                    <Link to={`/job/${element.id}`} style={{textDecoration:"none"}}> <Card {...setCard(element,'',isShort)}/></Link>
                    </div>
                ))}
            </div>
    )
    return(<></>)
}