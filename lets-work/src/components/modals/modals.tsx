import { DeleteAdviseModal } from "./deleteAdviseModal/deleteAdviseModal"
import { PublishJobModal } from "./publishJobModal/publishJobModal"

export const Modals = ()=>{
    return(
        <>
          <PublishJobModal/>
          <DeleteAdviseModal/>
        </>
    )
}
export const OpenModal = (modalName:string)=>{
    $(`#${modalName}`).modal('show') 
}
export const CloseModal = (modalName:string)=>{
    $(`#${modalName}`).modal("hide");
}