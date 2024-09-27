import React, { useState } from 'react';

// Task List Component with Pagination
const TaskList = ({ tasks, onEdit, onDelete, onNewTask }) => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const tasksPerPage = 5; // Number of tasks per page

  // Calculate total pages
  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  // Get tasks for the current page
  const startIndex = (currentPage - 1) * tasksPerPage;
  const currentTasks = tasks.slice(startIndex, startIndex + tasksPerPage);

  // Pagination handlers
  const handleFirstPage = () => setCurrentPage(1);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleLastPage = () => setCurrentPage(totalPages);

  return (
    <div className="task-list">
      <div className="header">
        <h2>All Tasks</h2>
        <button className="new-task" onClick={onNewTask}>New Task</button>
        <button className="refresh" onClick={() => window.location.reload()}>Refresh</button>
        {/* <input type="text" placeholder="Search" className="search-input" /> */}
      </div>

      <table className="task-table">
        <thead>
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <div className="dropdown">
                  <button className="dropdown-button">View</button>
                  <div className="dropdown-content">
                    <button onClick={() => onEdit(task)}>Edit</button>
                    <button onClick={() => onDelete(task)}>Delete</button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handleFirstPage} disabled={currentPage === 1}>First</button>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        <button>{currentPage} of {totalPages}</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        <button onClick={handleLastPage} disabled={currentPage === totalPages}>Last</button>
      </div>
    </div>
  );
};

export default TaskList;
