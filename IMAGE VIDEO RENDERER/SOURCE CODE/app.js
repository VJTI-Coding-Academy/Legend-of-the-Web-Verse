const MAX_IMAGES = 10;
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

// Handle Images
document.getElementById('imageInput').addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous

    if (files.length > MAX_IMAGES) {
        alert(`You can only upload up to ${MAX_IMAGES} images.`);
        this.value = ''; 
        return;
    }

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = document.createElement('img');
            img.src = event.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

// Handle Video
document.getElementById('videoInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('videoPreview');

    if (file.size > MAX_VIDEO_SIZE) {
        alert("Video exceeds 100MB limit.");
        this.value = '';
        return;
    }

    const url = URL.createObjectURL(file);
    preview.innerHTML = `<video width="400" controls><source src="${url}"></video>`;
});