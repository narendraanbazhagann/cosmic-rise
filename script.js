let coinCount = 0;
let upgradeCost = 10;
let upgradeCardCost = 30;
let cosmicEntityCost = 50;
let tapPower = 1;
let passiveIncome = 0;
let cosmicEntitiesUnlocked = 0;
let achievements = [];

// Update coin display
function updateCoinDisplay() {
    document.getElementById('coinCount').innerText = `Cosmo Coins: ${coinCount}`;
    document.getElementById('profitPerHour').innerText = `Profit per Hour: ${passiveIncome * 3600} Cosmo Coins`;
}

// Check achievements and update the list
function checkAchievements() {
    if (coinCount >= 10 && !achievements.includes('First 10 Coins')) {
        achievements.push('First 10 Coins');
        addAchievement('First 10 Coins');
    }
    if (coinCount >= 50 && !achievements.includes('50 Coins Collected')) {
        achievements.push('50 Coins Collected');
        addAchievement('50 Coins Collected');
    }
    if (cosmicEntitiesUnlocked > 0 && !achievements.includes('Unlocked Cosmic Entity')) {
        achievements.push('Unlocked Cosmic Entity');
        addAchievement('Unlocked Cosmic Entity');
    }
}

// Add an achievement to the list
function addAchievement(achievement) {
    const achievementList = document.getElementById('achievementList');
    const li = document.createElement('li');
    li.innerText = achievement;
    li.style.color = '#ffeb3b'; // Gold color for achievements
    achievementList.appendChild(li);
}

// Add event listeners for buttons
document.getElementById('tapButton').addEventListener('click', () => {
    coinCount += tapPower;
    updateCoinDisplay();
    checkAchievements();
});

document.getElementById('upgradeButton').addEventListener('click', () => {
    if (coinCount >= upgradeCost) {
        coinCount -= upgradeCost;
        tapPower += 1; // Increase tapping power by 1
        upgradeCost *= 2; // Double the cost for next upgrade
        updateCoinDisplay();
        alert(`Upgraded! Now you earn ${tapPower} coins per tap.`);
        document.getElementById('upgradeButton').innerText = `Upgrade - Cost: ${upgradeCost} Cosmo Coins`;
    } else {
        alert('Not enough Cosmo Coins!');
    }
});

document.getElementById('upgradeCardButton').addEventListener('click', () => {
    if (coinCount >= upgradeCardCost) {
        coinCount -= upgradeCardCost;
        passiveIncome += 1; // Increase passive income by 1 per hour
        upgradeCardCost *= 2; // Double the cost for next upgrade card
        updateCoinDisplay();
        alert(`Upgrade Card Purchased! Passive income increased.`);
        document.getElementById('upgradeCardButton').innerText = `Buy Upgrade Card - Cost: ${upgradeCardCost} Cosmo Coins`;
    } else {
        alert('Not enough Cosmo Coins!');
    }
});

document.getElementById('cosmicEntityButton').addEventListener('click', () => {
    if (coinCount >= cosmicEntityCost) {
        coinCount -= cosmicEntityCost;
        cosmicEntitiesUnlocked += 1; // Unlock one cosmic entity
        cosmicEntityCost *= 2; // Double the cost for next cosmic entity
        updateCoinDisplay();
        alert(`Cosmic Entity Unlocked! Total entities: ${cosmicEntitiesUnlocked}`);
        document.getElementById('cosmicEntityButton').innerText = `Unlock Cosmic Entity - Cost: ${cosmicEntityCost} Cosmo Coins`;
        document.getElementById('cosmicEntityButton').disabled = cosmicEntitiesUnlocked >= 5; // Limit to 5 entities
    } else {
        alert('Not enough Cosmo Coins!');
    }
});

// Profit per hour calculation (every hour)
setInterval(() => {
    coinCount += passiveIncome; // Increase coins based on passive income
    updateCoinDisplay();
}, 3600000); // Every hour
