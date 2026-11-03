// State Arrays Engine
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filter-btn');

// Save to Browser Storage Matrix
function saveToStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Form submit action listener loop
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newTask = {
        id: Date.now().toString(),
        title: document.getElementById('task-title').value,
        category: document.getElementById('task-category').value,
        date: document.getElementById('task-date').value,
        status: 'Active'
    };
    
    tasks.push(newTask);
    saveToStorage();
    renderTasks();
    taskForm.reset();
});

// Render Task Elements
function renderTasks() {
    taskList.innerHTML = '';
    
    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'all') return true;
        return task.status === currentFilter;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.status === 'Completed' ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-info">
                <span class="task-title-text"><h4>${task.title}</h4></span>
                <div class="task-meta">
                    <span class="tag">${task.category}</span>
                    <span>📅 ${task.date}</span>
                </div>
            </div>
            <div class="task-actions">
                <button class="btn-check" onclick="toggleTask('${task.id}')">✓</button>
                <button class="btn-del" onclick="deleteTask('${task.id}')">✕</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Toggle Task Status (Update)
window.toggleTask = (id) => {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.status = task.status === 'Active' ? 'Completed' : 'Active';
        }
        return task;
    });
    saveToStorage();
    renderTasks();
};

// Delete Task Routine (Delete)
window.deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    saveToStorage();
    renderTasks();
};

// Filter Selection Logic Controls
filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-filter');
        renderTasks();
    });
});

// Initial boot execution
renderTasks();
