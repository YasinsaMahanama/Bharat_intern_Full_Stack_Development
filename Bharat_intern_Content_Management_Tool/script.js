let posts = [];

function createPost(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('imageInput');
    const videoInput = document.getElementById('videoInput');
    
    const imageFile = imageInput.files[0];
    const videoFile = videoInput.files[0];
    
    // You can handle image and video uploads here if needed (e.g., send to a server)
    
    posts.push({ title, content, imageFile, videoFile });
    
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    imageInput.value = '';
    videoInput.value = '';
    
    displayPosts();
}

function displayPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    
    posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            ${post.imageFile ? `<img class="preview-image" src="${URL.createObjectURL(post.imageFile)}" alt="Uploaded Image">` : ''}
            ${post.videoFile ? `
                <video class="preview-video" controls>
                    <source src="${URL.createObjectURL(post.videoFile)}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>` : ''}
            <button onclick="deletePost(${index})">Delete</button>
        `;
        postList.appendChild(li);
    });
}

function deletePost(index) {
    posts.splice(index, 1);
    displayPosts();
}

document.getElementById('post-form').addEventListener('submit', createPost);
displayPosts();
