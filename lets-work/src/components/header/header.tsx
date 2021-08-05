
import { Button} from '../button/button';
import WorkIcon from '@material-ui/icons/Work';
// import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import './header.css';
import { OpenModal } from '../modals/modals';
import { setBtnHeader, setBtnLink } from '../button/setButton';
import { useDispatch, useSelector } from 'react-redux';
import { getFiltered } from '../../redux/actions/JobActions';
import { postJob } from '../../redux/actions/modalActions';

export const Header = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((data:any)=>data.jobs)
    const handleChange = (e:any)=>{
        dispatch(getFiltered(jobs,e.target.value));
    }
    const openPostModal = ()=>{
        dispatch(postJob());
        OpenModal("publishJobModal");
    }
    return (
        <>
            <header className="header sticky-top mb-5">
                <nav className="navbar navbar-expand-xl navbar-light bg-light d-flex justify-content-around  ">
                    <div className="col-auto col-xl-1">
                        <WorkIcon className="logo" />
                    </div>
                    <div className="col-6 col-xl-4">
                        <div className="d-flex align-items-center">
                            <SearchIcon className="align-self-center px-2 icons" />
                            <input type="text" className="form-control " placeholder="search" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col-auto d-flex justify-content-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {/* <HeaderButtons Icon={HomeIcon} title="Home" /> */}
                                <Button btnProps={setBtnLink("Jobs","",BusinessCenterIcon)}/>
                                <Button btnProps={setBtnLink("Me","profile",PersonIcon)} />
                                <Button btnProps={setBtnHeader("Publish Job",AssignmentIndIcon)} action={openPostModal}/>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

