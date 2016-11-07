import {
  USER_TEAMS,
  CREATE_TEAM,
  CURRENT_TEAM,
  UPDATE_TEAM,
  DELETE_TEAM
} from '../actions/actionTypes';

const INITIAL_STATE = {
  teams: [],
  team: [ {teamId: 0} ],
  currentTeam: {id: null},
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_TEAMS:
      return { ...state, teams: action.payload };
    case CREATE_TEAM:
      return { ...state, teams: [ ...state.teams.concat(action.payload)] };
    case CURRENT_TEAM:
      return { ...state, currentTeam: action.payload };
    case UPDATE_TEAM:
      return { ...state, teams: [
        ...state.teams.map(team => {
          if(team.id === action.payload.id) {
            return action.payload
          }
          return appt;
        })
      ]};
    case DELETE_TEAM:
      return { ...state, teams: [
        ...state.teams.filter(
          team => {
            return team.id !== action.payload
          }
        )
      ]};
    default
      return state;
  }
}
