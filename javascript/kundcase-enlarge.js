function enlarge() {
    var clickedDiv = event.target.closest("div");
    clickedDiv.className = "viewcase";
}
function closeLarge() {
    var clickedDiv = event.target.closest("div");
    clickedDiv.className = "cases";
}