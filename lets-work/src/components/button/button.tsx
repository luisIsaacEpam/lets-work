import { ButtonComponent } from "../../interfaces/ButtonComponent.interface"

export const Button = (btn:ButtonComponent)=>{
    return (<btn.btnProps.type {...btn} />)
}
