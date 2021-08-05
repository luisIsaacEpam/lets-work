import { NavLink } from "react-router-dom";
import { ButtonComponent } from "../../interfaces/ButtonComponent.interface";

export const BtnHeader = ({btnProps:{Icon,title},action}:ButtonComponent)=>{
    return (
        <button className="btn" onClick={action}>
            <div className="nav-link">
                {Icon && <Icon className="icons px-2"/>}
                <span>{title}</span>
            </div>
        </button>
    )
}

export const BtnLink = ({btnProps:{Icon,title,link}}:ButtonComponent)=>{
    return (
        <NavLink className="btn" exact to={`/${link}`}>
            <div className="nav-link">
                {Icon && <Icon className="icons px-2"/>}
                <span>{title}</span>
            </div>
        </NavLink>
    )
}