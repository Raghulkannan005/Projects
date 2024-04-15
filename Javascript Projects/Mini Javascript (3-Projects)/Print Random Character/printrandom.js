function str() {
    let word = document.getElementById("ip").value.trim();
    let ind = Math.floor(Math.random()*(word.length));
    document.getElementById("msg").innerHTML = word;
    document.getElementById("smsg").innerHTML = (word.charAt(ind));
}