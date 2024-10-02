* {
    box-sizing: border-box;
}

body {
    background-color: #1a1a1a;
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

.container {
    text-align: center;
    background: radial-gradient(circle, rgba(58, 8, 58, 1) 0%, rgba(0, 0, 0, 1) 100%);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    max-width: 600px;
}

header {
    margin-bottom: 20px;
}

h1 {
    font-size: 2.5em;
}

.resources {
    font-size: 1.5em;
    margin: 10px 0;
}

main {
    margin: 20px 0;
}

.interactive-button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 15px 25px;
    cursor: pointer;
    font-size: 1.2em;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;
}

.interactive-button:hover {
    background-color: #e64a19;
    transform: scale(1.05);
}

.upgrades {
    margin-top: 30px;
}

footer {
    margin-top: 50px;
    background-color: #444;
    padding: 10px;
    border-radius: 5px;
}

.achievements {
    text-align: left;
}
