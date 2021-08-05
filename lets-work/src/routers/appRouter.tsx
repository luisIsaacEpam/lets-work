

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "../components/header/header";
import { Modals } from "../components/modals/modals";
import { useSetJobs } from "../hooks/useSetJobs";
import { Job } from "../pages/job/job";
import { Jobs } from '../pages/jobs/jobs';
import { NotFound } from "../pages/NotFound/notFound";
import { Profile } from "../pages/profile/profile";

export const AppRouter = () => {
  useSetJobs();
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/" component={Jobs}/>
          <Route exact path="/job/:id" component={Job}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      <Modals />
    </Router>

  )
}