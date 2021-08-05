import { CardJobContent } from "../../interfaces/CardContent.interface";
import { setCardFooter } from "./cardFooter/setCardFooter";
export const CardJob = ({content,footer,isShort}:CardJobContent)=>{
     let {enterprise,salary,address,requiredLevel,description} = content;
     if(isShort){
         const limit = 200;
         if(description.length>limit){
            description = description.substr(0,limit)
            description+='...';
         }
     }
    return (
        <div className="card border-0 mb-3 shadow">
            <div className="card-body text-secondary">
                <div className="display-4 py-3 text-center">{enterprise}</div>
                {address && <div className="py-2">Address: {address}</div>}
                <div className="py-2">Educational Requirement: {requiredLevel}</div>
                <div className="py-2">Job Description</div>
                <div className="py-2">{description}</div>
                {salary && <div className="py-2 px-5 text-right ">Salary: ${salary}</div>}   
            </div>
            {footer && <footer.type {...setCardFooter()}/>}
        </div>
    )
}