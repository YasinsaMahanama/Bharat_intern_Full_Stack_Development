function addTask() {
    const taskName = document.getElementById("taskName").value;
    const assignee = document.getElementById("assignee").value;
  
    if (taskName && assignee) {
      const taskList = document.getElementById("tasks");
      const li = document.createElement("li");
      li.innerHTML = `<span>${taskName}</span> - Assigned to: ${assignee} <button onclick="removeTask(this)">Remove</button>`;
      taskList.appendChild(li);
  
      document.getElementById("taskName").value = "";
      document.getElementById("assignee").value = "";
    }
  }
  
  function removeTask(button) {
    const taskList = document.getElementById("tasks");
    taskList.removeChild(button.parentElement);
  }

  function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    
    if (message) {
      const messagesDiv = document.getElementById("messages");
      const messageElement = document.createElement("div");
      messageElement.textContent = message;
      messagesDiv.appendChild(messageElement);
      
      messageInput.value = "";
    }
  }

  