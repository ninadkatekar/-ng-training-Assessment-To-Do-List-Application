import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import DeleteConfirmation from './components/DeleteConfirmation';
import { Modal } from 'react-bootstrap';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State to control delete modal visibility

  // Open the form for a new task
  const handleNewTask = () => {
    setCurrentTask(null);
    setShowForm(true);
  };

  // Open the form to edit an existing task
  const handleEditTask = (task) => {
    setCurrentTask(task);
    setShowForm(true);
  };

  // Handle deleting a task
  const handleDeleteTask = (task) => {
    setTaskToDelete(task); // Set the task to delete
    setShowDeleteModal(true); // Open the delete confirmation modal
  };

  const confirmDeleteTask = () => {
    setTasks(tasks.filter(t => t !== taskToDelete)); // Delete the task
    setShowDeleteModal(false); // Close the modal
    setTaskToDelete(null); // Reset taskToDelete
  };

  const cancelDeleteTask = () => {
    setShowDeleteModal(false); // Close the modal without deleting
    setTaskToDelete(null); // Reset taskToDelete
  };

  const handleSaveTask = (task) => {
    if (currentTask) {
      // Update existing task
      setTasks(tasks.map(t => (t === currentTask ? task : t)));
    } else {
      // Add new task
      setTasks([...tasks, task]);
    }
    setShowForm(false); // Close the form modal after saving
  };

  const handleCancel = () => {
    setShowForm(false); // Close the form modal without saving
  };

  return (
    <div className="app">
      {/* Task Form Modal */}
      <Modal show={showForm} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{currentTask ? 'Edit Task' : 'New Task'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm task={currentTask} onSave={handleSaveTask} onCancel={handleCancel} />
        </Modal.Body>
      </Modal>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmation
        task={taskToDelete}
        show={showDeleteModal} // Control the visibility of the delete modal
        onConfirm={confirmDeleteTask}
        onCancel={cancelDeleteTask}
      />

      {/* Task List */}
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onNewTask={handleNewTask} />
    </div>
  );
};

export default App;
