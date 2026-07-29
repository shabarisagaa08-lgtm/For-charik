let page = 1;

function startJourney() {
    showPhoto();
}

function showPhoto() {
    document.getElementById("app").innerHTML = `
    <div class="screen fade">
        <h1>🖤 Charik</h1>

        <img src="charik.jpg"
             style="
             width:250px;
             height:420px;
             object-fit:cover;
             border-radius:25px;
             border:3px solid #ff2d75;
             box-shadow:0 0 25px #ff2d75;
             ">

        <p style="margin-top:20px;">
        Your smile is one of the reasons I wanted to make this.
        </p>

        <button class="btn" onclick="showLetter()">
        Next ❤️
        </button>
    </div>`;
}

function showLetter(){
    document.getElementById("app").innerHTML = `
    <div class="screen fade">

    <h1>💌 A Letter</h1>

    <p>
    Every word on this website comes from my heart.
    Thank you for taking the time to be here.
    </p>

    <button class="btn">
    Part 3 Coming...
    </button>

    </div>`;
}
