import SidebarNav from './SidebarNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <SidebarNav />
      <Switch>
        <Route path="/dashboard" exact component={dashboard} />
        <Route path="/dashboard/join" exact component={join} />
        <Route path="/dashboard/info" exact component={info} />
        <Route path="/modules" exact component={modules} />
        <Route path="/commands" exact component={commands} />
        <Route path="/commands/announcements" exact component={Announcement} />
        <Route path="/commands/moderation" exact component={moderation} />
        <Route path="/commands/roles" exact component={roles} />
        <Route path="/commands/fun" exact component={fun} />
        <Route path="/commands/tags" exact component={tags} />
        <Route path="/commands/welcome" exact component={welcome} />
        <Route path="/report" exact component={report} />
        <Route path="/premium" exact component={premium} />
      </Switch>
    </Router>
  );
}

export default Main;
