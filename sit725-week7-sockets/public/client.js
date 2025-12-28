const socket = io();

socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

// receive totals from server
socket.on("poll:update", (counts) => {
  document.getElementById("up").innerText = counts.up;
  document.getElementById("down").innerText = counts.down;
});

// sends the vote to server
document.querySelectorAll("button[data-vote]").forEach((btn) => {
  btn.addEventListener("click", () => {
    socket.emit("poll:vote", btn.dataset.vote);
  });
});
