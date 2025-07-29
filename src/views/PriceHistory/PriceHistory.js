import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAssetHistory, getAssets } from '../../redux/actionCreators';
import Chart from '../../components/Chart/Chart';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import './PriceHistory.css';

const PriceHistory = (props) => {
  const {
    fetchAssetHistory,
    fetchAssets,
    history,
    loading,
    error,
    assets,
  } = props;

  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    // Fetch assets list if not already loaded
    if (assets.length === 0) {
      fetchAssets(10); // Load top 10 assets
    }
  }, [fetchAssets, assets.length]);

  useEffect(() => {
    // Set default asset to Bitcoin if available
    if (assets.length > 0 && !selectedAsset) {
      const bitcoin = assets.find(asset => asset.symbol.toLowerCase() === 'btc') || assets[0];
      setSelectedAsset(bitcoin);
    }
  }, [assets, selectedAsset]);

  useEffect(() => {
    // Fetch history when asset is selected
    if (selectedAsset) {
      fetchAssetHistory(selectedAsset.id);
    }
  }, [selectedAsset, fetchAssetHistory]);

  const handleAssetChange = (event) => {
    const assetId = event.target.value;
    const asset = assets.find(a => a.id === assetId);
    setSelectedAsset(asset);
  };

  const getChartColor = () => {
    if (history.length < 2) return '#3B82F6';

    const firstPrice = parseFloat(history[0]?.priceUsd || 0);
    const lastPrice = parseFloat(history[history.length - 1]?.priceUsd || 0);

    return lastPrice >= firstPrice ? '#10B981' : '#EF4444'; // Green for up, red for down
  };

  const getPriceChange = () => {
    if (history.length < 2) return { change: 0, percentage: 0 };

    const firstPrice = parseFloat(history[0]?.priceUsd || 0);
    const lastPrice = parseFloat(history[history.length - 1]?.priceUsd || 0);
    const change = lastPrice - firstPrice;
    const percentage = firstPrice > 0 ? (change / firstPrice) * 100 : 0;

    return { change, percentage };
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(value);
  };

  const formatPercentage = (value) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
  };

  if (loading && history.length === 0) {
    return <LoadingSpinner message="Loading price history..." />;
  }

  const { change, percentage } = getPriceChange();
  const currentPrice = selectedAsset ? parseFloat(selectedAsset.priceUsd) : 0;

  return (
    <div className="price-history-container">
      <div className="price-history-header">
        <h1>Price History</h1>
        <p>Track cryptocurrency price movements over time</p>
      </div>

      <div className="price-history-controls">
        <div className="asset-selector">
          <label htmlFor="asset-select">Select Asset:</label>
          <select
            id="asset-select"
            value={selectedAsset?.id || ''}
            onChange={handleAssetChange}
            className="asset-select"
          >
            <option value="">Choose an asset...</option>
            {assets.map(asset => (
              <option key={asset.id} value={asset.id}>
                {asset.name} ({asset.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedAsset && (
        <div className="price-summary">
          <div className="price-info">
            <div className="asset-details">
              <img
                src={`https://assets.coincap.io/assets/icons/${selectedAsset.symbol.toLowerCase()}@2x.png`}
                alt={selectedAsset.name}
                className="asset-icon"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <h2>{selectedAsset.name}</h2>
                <p className="asset-symbol">{selectedAsset.symbol}</p>
              </div>
            </div>
            <div className="price-details">
              <div className="current-price">
                {formatCurrency(currentPrice)}
              </div>
              <div className={`price-change ${percentage >= 0 ? 'positive' : 'negative'}`}>
                {formatCurrency(Math.abs(change))} ({formatPercentage(percentage)})
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>Error loading price history: {error}</p>
        </div>
      )}

      {selectedAsset && history.length > 0 && (
        <Chart
          data={history}
          title={`${selectedAsset.name} Price History`}
          height={500}
          showArea={true}
          color={getChartColor()}
        />
      )}

      {selectedAsset && history.length === 0 && !loading && (
        <div className="no-data-message">
          <p>No price history data available for {selectedAsset.name}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  history: state.assetHistory.history,
  loading: state.assetHistory.loading,
  error: state.assetHistory.error,
  assets: state.assets.assets,
});

const mapDispatchToProps = {
  fetchAssetHistory: getAssetHistory,
  fetchAssets: getAssets,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceHistory);