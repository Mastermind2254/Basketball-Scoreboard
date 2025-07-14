let homeScore = parseInt(document.getElementById("home-score").textContent)
let guestScore = parseInt(document.getElementById("guest-score").textContent)
function home1() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}
function home2() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}
function home3() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}
function guest1() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}
function guest2() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}
function guest3() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}