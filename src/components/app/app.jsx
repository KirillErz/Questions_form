
import React from "react";
import queryString from "query-string";
import PollForm from "../poll-from/poll-form";
import StaffPollForm from "../staff-poll-form/staff-poll-form";
import {Switch, Route, BrowserRouter} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route
            exact path="/poll/:token"
            render={({match, location, history}) => (
              <PollForm
                query={queryString.parse(location.search)}
                token={match.params.token}
                history={history}
              />
            )}
          />
          <Route
            exact path="/staff_poll/:token"
            render={({match, location, history}) => (
              <StaffPollForm
                query={queryString.parse(location.search)}
                token={match.params.token}
                history={history}
              />
            )}
          />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
