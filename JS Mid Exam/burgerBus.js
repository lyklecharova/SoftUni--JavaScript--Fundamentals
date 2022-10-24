function bugerBus(input) {
    let numberOfCity = input.shift().split(' ').map(Number);
    let totalProfit = 0;

    for (let i = 1; i <= numberOfCity; i++) {
        let nameOfCity = input.shift();
        let ownersIncome = input.shift();
        let ownersExpenses = input.shift();
        if (i % 3 === 0) {
            ownersExpenses = 1.5 * ownersExpenses;
        }
        if (i % 5 === 0) {
            ownersIncome -= 0.1 * ownersIncome;
        }
        let profit = ownersIncome - ownersExpenses;
        totalProfit += profit;
        console.log(`In ${nameOfCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}