function previewFile() {
    const preview = document.getElementById('preview');
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onloadend = function () {
      preview.innerHTML = `
        <div class="relative p-4">
          <img src="${reader.result}" class="max-w-40 max-h-20 rounded-lg shadow-lg mt-2"/>
          <button onclick="closePreview()" class="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full" title="Close">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <p class="text-sm font-semibold">${file.name}</p> <!-- Display file name here -->
        </div>`;
    };
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = "";
    }
  }
  
  function closePreview() {
    const preview = document.getElementById('preview');
    const fileInput = document.getElementById('fileInput');
    preview.innerHTML = '';
    fileInput.value = '';
  }

function send(e) {
  console.log(e)
}
  


  