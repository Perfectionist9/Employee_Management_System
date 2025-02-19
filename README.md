# React + Vite

Employee Management System –

Project Description

The Employee Management System is a Single Page Application (SPA) built using React.js to streamline task management between an Admin and multiple Employees. The system allows an Admin to assign tasks to Employees, track their progress, and manage work efficiently. Employees, on the other hand, can view their assigned tasks and update their status as Accepted, Completed, or Failed.

Why Is This Project Useful?

This project offers several benefits in a workplace setting:

1. Efficient Task Management
The Admin can create tasks and assign them to employees without manual tracking.
Employees can update the status of tasks, helping the Admin monitor progress in real time.

2. Enhanced Productivity
By having a structured system for task allocation and progress tracking, employees stay organized.
Admins can assess work efficiency based on task completion rates.

3. Secure Authentication System
Only authorized Admin and Employees can log in.
Prevents unauthorized access to important task-related data.
---

Step-by-Step Working Process

1. User Authentication (Login System)
The system provides a secure login for both the Admin and Employees.
Users must enter their email ID and password to access their dashboards.

The login credentials are:

Admin Login:
Example Email: admin@me.com
Password: 123

Employee Login:
Example Email: employee2@example.com
After a successful login, the user is redirected to their respective dashboard (Admin or Employee).

---

2. Admin Dashboard – Task Management and Tracking
Once logged in, the Admin gains access to the Admin Dashboard, which includes:

A. Task Assignment
The Admin can create new tasks.
The Admin can assign tasks to specific Employees from the available list.
Each task includes details such as:

Task Name
Description
Deadline
Assigned Employee Name

B. Task Tracking

The Admin can view all assigned tasks along with their current status.
Status options include:
Accepted (when an employee acknowledges the task)
Completed (when the task is successfully finished)
Failed (if the task was not completed successfully)

---

3. Employee Dashboard – Task Handling
When an Employee logs in, they are directed to their Employee Dashboard, where they can:

A. View Assigned Tasks
Employees can see a list of tasks assigned to them.
Each task includes:
Task Name
Task Description
Deadline
Current Status

B. Task Status Updates
Employees can change the status of a task based on progress:
1. Accept – Acknowledge that they have received the task.
2. Complete – Mark the task as finished.
3. Fail – Indicate that they couldn’t complete the task.

Once the status is updated, the Admin can see the changes in real-time.

---

4. Logout Feature

Both the Admin and Employees have the option to log out from their accounts.
