import { connect } from "react-redux";
import { getCryptocurrencies } from "../../redux/actionCreators";
import "./Explore.css";
import { useEffect } from "react";

const Explore = (props) => {
	const { fetchCryptocurrencies, loading, assets, error } = props;

	useEffect(() => {
		fetchCryptocurrencies();
	}, [fetchCryptocurrencies]);

	console.log(assets, "assets");

	const formatNumber = (num) => {
		return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
	};

	const formatCurrency = (num) => {
		if (num >= 1e12) {
			return (num / 1e12).toFixed(2) + "t";
		} else if (num >= 1e9) {
			return (num / 1e9).toFixed(2) + "b";
		} else if (num >= 1e6) {
			return (num / 1e6).toFixed(2) + "m";
		} else {
			return formatNumber(num);
		}
	};

	const formatPercentage = (num) => {
		return formatNumber(num) + "%";
	};

	return (
		<div className="explore-container">
			<h1>Explore</h1>
			{loading && <h2>Loading...</h2>}
			{error && <h2>{error}</h2>}

			<table>
				<thead>
					<th>Rank</th>
					<th>Name</th>
					<th>Price</th>
					<th>Market Cap</th>
					<th>Supply</th>
					<th>VWAP (24Hr)</th>
					<th>Volume (24Hr)</th>
					<th>Change (24Hr)</th>
				</thead>
				<tbody>
					{assets.map((asset) => (
						<tr key={asset.id}>
							<td>{asset.rank}</td>
							<div className="crypto">
								<img
									src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`}
									alt="icon"
								/>
								<a href={asset.explorer}>
									<p className="crypto-name">{asset.name}</p>
									<p className="crypto-symbol">{asset.symbol}</p>
								</a>
							</div>
							<td>{"$" +formatCurrency(parseFloat(asset.priceUsd))}</td>
							<td>{"$" + formatCurrency(parseFloat(asset.marketCapUsd))}</td>
							<td>{formatCurrency(parseFloat(asset.supply))}</td>
							<td>{"$" + formatCurrency(parseFloat(asset.vwap24Hr))}</td>
							<td>{"$" + formatCurrency(parseFloat(asset.volumeUsd24Hr))}</td>
							<td className={parseFloat(asset.changePercent24Hr) < 0 ? "neg-change" : "pos-change"}>{formatPercentage(parseFloat(asset.changePercent24Hr))}</td>
						</tr>
					))}
				</tbody>
			</table>
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
