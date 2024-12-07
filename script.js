const darkModeToggle = document.getElementById("darkModeToggle");
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// File upload functionality
uploadBtn.addEventListener("click", () => {
    const files = fileInput.files;

    if (files.length === 0) {
        alert("Please select at least one file to upload.");
        return;
    }

    // Clear placeholder text if first upload
    if (fileList.innerHTML === '<li>No files uploaded yet.</li>') {
        fileList.innerHTML = "";
    }

    // Loop through selected files and display their names
    Array.from(files).forEach((file) => {
        const listItem = document.createElement("li");
        listItem.textContent = `📄 ${file.name}`;
        listItem.appendChild(createDeleteButton());
        fileList.appendChild(listItem);
    });

    // Clear the file input after upload
    fileInput.value = "";
});

// Create a delete button for each file
function createDeleteButton() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "#FF5555";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.borderRadius = "5px";

    deleteBtn.addEventListener("click", (event) => {
        event.target.parentElement.remove();

        // If no files remain, show placeholder text
        if (fileList.children.length === 0) {
            fileList.innerHTML = '<li>No files uploaded yet.</li>';
        }
    });

    return deleteBtn;
}
