function nextPage(title, text) {
    document.getElementById("app").innerHTML = `
        <div class="screen fade">
            <h1>${title}</h1>
            <p>${text}</p>
            <button class="btn" onclick="goHome()">Home</button>
        </div>
    `;
}

function startJourney() {
    nextPage(
        "🖤 Welcome",
        "Thank you for scanning this QR code. I made something special just for you, Charik."
    );
}

function goHome() {
    location.reload();
}
