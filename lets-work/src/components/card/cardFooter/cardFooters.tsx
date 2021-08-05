import { Button } from '../../button/button';
import { setBtnHeader } from '../../button/setButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { OpenModal } from '../../modals/modals';
import { useDispatch } from 'react-redux';
import { editJob } from '../../../redux/actions/modalActions';
export const CardFooterControls = ()=>{

    const dispatch = useDispatch();
    const openEditModal = ()=>{
        dispatch(editJob());
        OpenModal("publishJobModal");
    }
    return(
        <div className="card-footer d-flex justify-content-center">
            <Button btnProps={setBtnHeader("Edit",EditIcon)} action={openEditModal} />
            <Button btnProps={setBtnHeader("Delete",DeleteIcon)} action={()=>OpenModal('deleteAdviseModal')}/>
        </div>
    )
}