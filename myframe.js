document.getElementById('photoInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const photo = document.getElementById('photo');
        photo.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

function applyFrame(frameClass) {
    const photoContainer = document.getElementById('photoContainer');
    photoContainer.className = frameClass;
}

function removeFrame() {
    const photoContainer = document.getElementById('photoContainer');
    photoContainer.className = '';
}
