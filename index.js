const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", () => {
  const urlInput = document.getElementById("url");

  const url = urlInput.value;
  if (url.includes("youtube.com")) {
    const message = document.getElementById("message");
    message.innerHTML = "Starting download...";
  } else {
    const message = document.getElementById("message");
    message.innerHTML = "Invalid URL";
  }
});
