function startJourney() {
    showPhoto();
}

function showPhoto() {
    document.getElementById("app").innerHTML = `
    <div class="screen fade">

        <h1>🖤 Charik</h1>

        <img src="charik.png"
        style="
        width:250px;
        height:420px;
        object-fit:cover;
        border-radius:25px;
        border:3px solid #ff2d75;
        box-shadow:0 0 25px #ff2d75;
        ">

        <p style="margin-top:20px;">
        A special memory made with care.
        </p>

        <button class="btn" onclick="showLetter()">
        Next ❤️
        </button>

    </div>`;
}


function showLetter(){

document.getElementById("app").innerHTML = `

<div class="screen fade">

<h1>💌 My Message</h1>

<p>
If you like me, I will be truly happy and feel very lucky.<br><br>

If you don't feel the same, that's okay.
I understand and respect your feelings.
I won't bring this up again.<br><br>

The reason I'm saying this is because I want to be honest with you.
I don't want to hide my feelings or pretend they don't exist.
I believe honesty is better than keeping everything inside.<br><br>

Thank you for taking the time to read this.
Whatever your answer is, I'll respect it and sincerely wish you happiness. 🖤

</p>

<button class="btn" onclick="showFinal()">
Next ❤️
</button>

</div>

`;

}


function showFinal(){

document.getElementById("app").innerHTML = `

<div class="screen fade">

<h1>🖤 Thank You</h1>

<p>
No matter what happens,
I will always respect your feelings.
</p>

</div>

`;

}
