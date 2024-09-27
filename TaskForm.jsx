import React, { useState } from 'react';
// import './TaskForm.css'; // Assuming you have form CSS

const TaskForm = ({ task, onSave, onCancel }) => {
  const [formTask, setFormTask] = useState(task || {
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTask({ ...formTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formTask); // Save task and close modal
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="assignedTo">Assigned To:</label>
        <select
          name="assignedTo"
          id="assignedTo"
          value={formTask.assignedTo}
          onChange={handleChange}
          required
        >
          <option value="">Select User</option>
          <option value="User 1">User 1</option>
          <option value="User 2">User 2</option>
          <option value="User 3">User 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select
          name="status"
          id="status"
          value={formTask.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dueDate">Due Date:</label>
        <input
          name="dueDate"
          id="dueDate"
          type="date"
          value={formTask.dueDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority:</label>
        <select
          name="priority"
          id="priority"
          value={formTask.priority}
          onChange={handleChange}
          required
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="comments">Comments:</label>
        <textarea
          name="comments"
          id="comments"
          value={formTask.comments}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-buttons">
        <button type="button" className="cancel-button"onClick={onCancel}>Cancel</button>
        <button type="submit" className="save-button" >Save</button>
      </div>
    </form>
  );
};

export default TaskForm;
