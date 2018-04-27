//Takes items out of state and pass them as props to the component related to this container
//Also takes actions creators and maps them to props to the related component

import { connect } from "react-redux";
import Clock from "../components/Clock";
import { updateTime } from "../actions";

const mapStateToProps = state => {
    return { time : state.clock.time };
};
const mapDispatchToProps = dispatch => {
    return { updateTime : () => dispatch( updateTime() ) }
};

const ClockContainer = connect( mapStateToProps, mapDispatchToProps )( Clock );
export default ClockContainer;