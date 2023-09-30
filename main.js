import './style.css';

function createTooltip(event) {
    // console.log("in");
    var tooltip = document.createElement("span");
    tooltip.innerHTML = "Hello World!";
    tooltip.id = "tooltip";
    event.target.appendChild(tooltip);
}

function deleteTooltip(event) {
    if (event.target.lastChild.id == "tooltip") {
        event.target.removeChild(event.target.lastChild);
    }
}

function changeTooltip(event) {
    if (event.target.id != "cilckTooltipBtn") return;
    if (event.target.lastChild.id == "tooltip") {
        deleteTooltip(event);
        console.log(event.target);
    } else {
        createTooltip(event);
    }
}

function showModal(event) {
    document.getElementById("modal").style.display = "block";
}

function hideModal(event) {
    document.getElementById("modal").style.display = "none";
}

// Hover Tooltip
document.getElementById("hoverTooltipBtn").addEventListener("mouseover", createTooltip);
document.getElementById("hoverTooltipBtn").addEventListener("mouseout", deleteTooltip);

// Click Tooltip

document.getElementById("cilckTooltipBtn").addEventListener("click", changeTooltip);
document.getElementById("cilckTooltipBtn").addEventListener("blur", deleteTooltip);

// Click Modal
document.getElementById("clickModalBtn").addEventListener("click", showModal);
document.getElementById("closeModal").addEventListener("click", hideModal);

