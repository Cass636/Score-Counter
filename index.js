let incrementHm = document.getElementById("hm-score")
homescore= 0
function plus1hm() {
    homescore += 1
    incrementHm.textContent = homescore 
}
function plus2hm() {
    homescore += 2
    incrementHm.textContent = homescore 
} 
function plus3hm() {
    homescore += 3
    incrementHm.textContent = homescore 
}

let incrementGst = document.getElementById('gst-score')
guestscore = 0
function plus1gst() {
    guestscore +=1
    incrementGst.textContent = guestscore
}
function plus2gst() {
    guestscore +=2
    incrementGst.textContent = guestscore
}
function plus3gst() {
    guestscore +=3
    incrementGst.textContent = guestscore
}
function reset() {
    homescore = 0
    guestscore= 0
    incrementHm.textContent = homescore
    incrementGst.textContent = guestscore
}