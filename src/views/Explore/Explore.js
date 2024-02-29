import { connect } from "react-redux";
import { increment, decrement } from "../../redux/actionCreators";
import "./Explore.css";

const Explore = (props) => {
	const { count, increment, decrement } = props;

	return (
		<div>
			<button onClick={increment}> + </button>
			<p>{count}</p>
			<button onClick={decrement}> - </button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	count: state.countReducer.count
})

export default connect (mapStateToProps, {increment, decrement})(Explore);
