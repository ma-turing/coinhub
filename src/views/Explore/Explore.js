import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
	getAssetHistory,
	getAssets,
	getCurrentLimit,
} from "../../redux/actionCreators";
import { formatCurrency, formatPercentage } from "../../utils/formatter";
import Button from "../../components/Button/Button";
import "./Explore.css";

const Explore = (props) => {
	const {
		fetchAssets,
		setCurrentLimit,
		loading,
		assets,
		error,
		currentLimit,
		fetchAssetHistory,
		history,
	} = props;

	const [assetId, setAssetId] = useState(null);

	useEffect(() => {
		fetchAssets(currentLimit);

		const intervalId = setInterval(() => {
			fetchAssets(currentLimit);
			// Fetch asset history for all assets
			assets.forEach((asset) => {
				console.log(asset.id);
				fetchAssetHistory(asset.id);
			});
		}, 60000);

		return () => clearInterval(intervalId);
	}, [fetchAssets, currentLimit, fetchAssetHistory]);

	// useEffect(() => {
	// 	if (assetId) {
	// 		fetchAssetHistory(assetId);
	// 	}
	// }, [fetchAssetHistory, assetId]);

	const oldPriceUsd = formatCurrency(
		parseFloat(history[history.length - 1]?.priceUsd)
	);

	// console.log(history, "history2");
	// console.log(oldPriceUsd, "history2");

	return (
		<div className="explore-container">
			<div className="market-highlight">
				<div className="stat-container">
					<div className="stat">
						<p className="stat-label">Market cap</p>
						<p className="stat-value">$2.64t</p>
					</div>
					<div className="stat">
						<p className="stat-label">Exchange vol</p>
						<p className="stat-value">$2.64t</p>
					</div>
					<div className="stat">
						<p className="stat-label">Assets</p>
						<p className="stat-value">2296</p>
					</div>
					<div className="stat">
						<p className="stat-label">Exchanges</p>
						<p className="stat-value">73</p>
					</div>
					<div className="stat">
						<p className="stat-label">Markets</p>
						<p className="stat-value">9250</p>
					</div>
				</div>
			</div>

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
						<tr
							key={asset.id}
							onClick={() => setAssetId(asset.id)}
							// className={
							// 	formatCurrency(parseFloat(asset.priceUsd)) > oldPriceUsd
							// 		? "appreciating"
							// 		: formatCurrency(parseFloat(asset.priceUsd)) < oldPriceUsd
							// 		? "depreciating"
							// 		: ""
							// }
						>
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
							<td>{"$" + formatCurrency(parseFloat(asset.priceUsd))}</td>
							<td>{"$" + formatCurrency(parseFloat(asset.marketCapUsd))}</td>
							<td>{formatCurrency(parseFloat(asset.supply))}</td>
							<td>{"$" + formatCurrency(parseFloat(asset.vwap24Hr))}</td>
							<td>{"$" + formatCurrency(parseFloat(asset.volumeUsd24Hr))}</td>
							<td
								className={
									parseFloat(asset.changePercent24Hr) < 0
										? "neg-change"
										: "pos-change"
								}
							>
								{formatPercentage(parseFloat(asset.changePercent24Hr))}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Button
				primary
				rounded
				onClick={() => setCurrentLimit(currentLimit + 20)}
			>
				View more
			</Button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.assets.loading,
	assets: state.assets.assets,
	error: state.assets.error,
	currentLimit: state.assets.currentLimit,
	history: state.assetHistory.history,
});

export default connect(mapStateToProps, {
	fetchAssets: (a) => getAssets(a),
	setCurrentLimit: (a) => getCurrentLimit(a),
	fetchAssetHistory: (a) => getAssetHistory(a),
})(Explore);
