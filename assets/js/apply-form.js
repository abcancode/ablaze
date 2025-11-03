const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("file");
const uploadText = document.getElementById("uploadText");

// Click to open file picker
uploadBox.addEventListener("click", () => fileInput.click());

// Drag and drop animation
uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadBox.classList.add("dragover");
});

uploadBox.addEventListener("dragleave", () => {
  uploadBox.classList.remove("dragover");
});

uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadBox.classList.remove("dragover");
  fileInput.files = e.dataTransfer.files;
  showFileName();
});

fileInput.addEventListener("change", showFileName);

function showFileName() {
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    uploadText.textContent = `✅ ${fileName}`;
    uploadText.classList.add("file-selected");
  } else {
    uploadText.innerHTML = `Drag and Drop here or <span>Browse Files</span>`;
    uploadText.classList.remove("file-selected");
  }
}
