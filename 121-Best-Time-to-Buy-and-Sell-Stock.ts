function maxProfit(prices: number[]): number {
    let buy = prices[0];
    let maxVal = 0; 
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < buy){
            buy = prices[i];
        } else {
            const profit = prices[i] - buy; 
            if (profit > maxVal){
                maxVal = profit; 
            }
        }
    }
    return maxVal; 
};