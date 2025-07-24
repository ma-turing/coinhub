export const formatNumber = (num) => {
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const formatCurrency = (num) => {
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

export const formatPercentage = (num) => {
    return formatNumber(num) + "%";
};

export const formatNumberWithCommas = (num) => {
    if (num == null || isNaN(num)) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};