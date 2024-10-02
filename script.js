// Initialize user data
let coins = 0;
let upgradeLevel = 1;

// Function to update the coin display
function updateCoinDisplay() {
    document.getElementById('coin-display').innerText = `Cosmo Coins: ${coins}`;
}

// Function to tap and earn coins
document.getElementById('tap-button').onclick = function() {
    coins += upgradeLevel; // Earn coins based on upgrade level
    updateCoinDisplay();
};

// Function to upgrade
document.getElementById('upgrade-button').onclick = function() {
    let upgradeCost = upgradeLevel * 5; // Define upgrade cost
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        upgradeLevel++;
        document.getElementById('upgrade-status').innerText = `Upgrade successful! Level: ${upgradeLevel}`;
        updateCoinDisplay();
    } else {
        document.getElementById('upgrade-status').innerText = `Not enough coins to upgrade!`;
    }
};

// Function to display leaderboard (for demonstration purposes)
function displayLeaderboard() {
    const leaderboard = `User: Player1, Coins: ${coins}`; // Sample data
    document.getElementById('leaderboard').innerText = leaderboard;
}

// Call the leaderboard display function to show initial state
displayLeaderboard();
