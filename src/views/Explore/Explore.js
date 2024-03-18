import { connect } from "react-redux";
import { getCryptocurrencies } from "../../redux/actionCreators";
import "./Explore.css";
import { useEffect } from "react";

const Explore = (props) => {
	const { fetchCryptocurrencies, loading, assets, error } = props;

	useEffect(() => {
		fetchCryptocurrencies()
	}, [fetchCryptocurrencies]);
	
	console.log(assets, 'assets');

	return (
		<div>
			<h1>Explore</h1>
			{loading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.cryptoReducer.loading,
	assets: state.cryptoReducer.assets,
	error: state.cryptoReducer.error,
});

export default connect(mapStateToProps, {
	fetchCryptocurrencies: () => getCryptocurrencies(),
})(Explore);
