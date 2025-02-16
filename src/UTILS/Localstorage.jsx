const admin = [{
    "id": "1",
    "email": "admin@example.com",
    "password": "123",
    "firstName": "PREM",

  }];
  

const employee = [
  {
    "id": "1",
    "email": "e@e.c",
    "password": "123",
    "firstName": "PREM", // Added firstName
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Customer Support",
        "taskDescription": "Provide support to customers regarding product issues.",
        "category": "Support",
        "date": "2025-02-15"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "Product Training",
        "taskDescription": "Attend the training session on the new product features.",
        "category": "Training",
        "date": "2025-02-14"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "taskTitle": "Database Cleanup",
        "taskDescription": "Clean up outdated records in the customer database.",
        "category": "IT",
        "date": "2025-02-13"
      }
    ],
    "taskNumbers": { // Added task numbers
      "active": 2,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 1
    }
  },
  {
    "id": "2",
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Emily", // Added firstName
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Website Testing",
        "taskDescription": "Test the new website features before launch.",
        "category": "Quality Assurance",
        "date": "2025-02-15"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "Bug Fixes",
        "taskDescription": "Fix critical bugs reported during testing.",
        "category": "IT",
        "date": "2025-02-14"
      }
    ],
    "taskNumbers": { // Added task numbers
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 0
    }
  },
  {
    "id": "3",
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Michael", // Added firstName
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Check and update the stock inventory list.",
        "category": "Operations",
        "date": "2025-02-15"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "taskTitle": "Supplier Negotiation",
        "taskDescription": "Negotiate terms with new suppliers.",
        "category": "Purchasing",
        "date": "2025-02-14"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "Prepare Reports",
        "taskDescription": "Prepare weekly reports for upper management.",
        "category": "Management",
        "date": "2025-02-13"
      }
    ],
    "taskNumbers": { // Added task numbers
      "active": 2,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 1
    }
  },
  {
    "id": "4",
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Sarah", // Added firstName
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Team Collaboration",
        "taskDescription": "Collaborate with the marketing team on upcoming campaigns.",
        "category": "Marketing",
        "date": "2025-02-15"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "Market Research",
        "taskDescription": "Conduct research to understand market trends and customer needs.",
        "category": "Research",
        "date": "2025-02-14"
      }
    ],
    "taskNumbers": { // Added task numbers
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 0
    }
  },
  {
    "id": "5",
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "David", // Added firstName
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the code changes submitted by team members.",
        "category": "Development",
        "date": "2025-02-15"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "taskTitle": "App Optimization",
        "taskDescription": "Optimize app performance for better speed.",
        "category": "Development",
        "date": "2025-02-14"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "API Documentation",
        "taskDescription": "Create documentation for the new API endpoints.",
        "category": "Documentation",
        "date": "2025-02-13"
      },
      {
        "active": true,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "taskTitle": "Bug Report",
        "taskDescription": "Generate a bug report from recent testing.",
        "category": "QA",
        "date": "2025-02-12"
      }
    ],
    "taskNumbers": { // Added task numbers
      "active": 2,
      "newTask": 1,
      "completedTask": 2,
      "failedTask": 1
    }
  }
];


export const setLocalStorage = () => {
  localStorage.setItem('employee',JSON.stringify(employee))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employee'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employee , admin}
}





