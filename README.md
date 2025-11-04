# SustainaShare

SustainaShare is a full-stack web application designed to connect donors, volunteers, and recipients in a seamless and efficient manner. The platform facilitates the donation of goods and the coordination of volunteer efforts to ensure that resources reach those in need. It features distinct user roles, each with a dedicated dashboard to manage their specific activities.

## Features

- **Role-Based Access Control:** Separate interfaces and functionalities for four distinct user roles:
    - **Admin:** Oversees the entire platform, manages users, and monitors all activities.
    - **Donor:** Can make donations, track their contributions, and view their impact.
    - **Volunteer:** Can sign up for delivery tasks, manage their schedule, and report on completed tasks.
    - **Recipient:** Can request assistance, receive donations, and provide feedback.
- **Interactive Dashboards:** Each user role has a dedicated dashboard with relevant data visualizations and management tools.
- **Real-Time Updates:** The platform provides real-time updates on donation statuses, volunteer availability, and recipient needs.
- **Secure Authentication:** JWT-based authentication to ensure that all user data is secure.
- **Responsive Design:** A modern and responsive UI that works on all devices.

## Tech Stack

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Formik & Yup:** For building and validating forms.
- **Axios:** A promise-based HTTP client for making API requests.
- **React Router:** For handling client-side routing.

### Backend

- **Python:** A versatile and powerful programming language.
- **FastAPI:** A modern, fast (high-performance) web framework for building APIs with Python.
- **MongoDB:** A NoSQL database for storing application data.
- **Uvicorn:** A lightning-fast ASGI server for running FastAPI applications.
- **Pydantic:** For data validation and settings management.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js and npm:** [https://nodejs.org/](https://nodejs.org/)
- **Python 3.8+ and pip:** [https://www.python.org/](https://www.python.org/)
- **MongoDB:** [https://www.mongodb.com/](https://www.mongodb.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/sustainashare.git
    cd sustainashare
    ```

2.  **Frontend Setup:**
    - Navigate to the root directory of the project.
    - Install the required npm packages:
      ```sh
      npm install
      ```
    - Start the frontend development server:
      ```sh
      npm run dev
      ```
    - The frontend will be available at `http://localhost:3000`.

3.  **Backend Setup:**
    - Navigate to the backend directory:
      ```sh
      cd sustainashare_backend
      ```
    - Install the required Python packages:
      ```sh
      pip install -r requirements.txt
      ```
    - Start the backend server:
      ```sh
      uvicorn app.main:app --reload
      ```
    - The backend API will be available at `http://localhost:8000`.

## Usage

Once both the frontend and backend servers are running, you can access the application in your browser at `http://localhost:3000`.

- **Register:** Create a new account by selecting one of the user roles (Donor, Volunteer, or Recipient).
- **Login:** Log in with your credentials to access your dashboard.
- **Admin Access:** The admin user has pre-defined credentials for platform management.

## Project Structure

```
/
├── public/              # Static assets
├── src/                 # Frontend source code
│   ├── assets/          # Images and other assets
│   ├── components/      # Reusable React components
│   ├── context/         # React context providers (e.g., AuthContext)
│   ├── pages/           # Page components
│   └── ...
├── sustainashare_backend/ # Backend source code
│   ├── app/             # Main application
│   │   ├── models/      # Pydantic models
│   │   ├── routes/      # API routes
│   │   ├── database.py  # Database connection
│   │   └── main.py      # FastAPI app entry point
│   └── ...
├── package.json         # Frontend dependencies
└── requirements.txt     # Backend dependencies
```

## Key Components & Pages

Here are links to some of the most important files in the frontend application:

### Core Pages
- **Homepage:** [`src/pages/Landing.jsx`](./src/pages/Landing.jsx)
- **Login Page:** [`src/pages/auth/Login.jsx`](./src/pages/auth/Login.jsx)
- **Registration Page:** [`src/pages/auth/Register.jsx`](./src/pages/auth/Register.jsx)

### Registration Forms
- **Donor Form:** [`src/components/Popups/DonorForm.jsx`](./src/components/Popups/DonorForm.jsx)
- **Recipient Form:** [`src/components/Popups/RecipientForm.jsx`](./src/components/Popups/RecipientForm.jsx)
- **Volunteer Form:** [`src/components/Popups/VolunteerForm.jsx`](./src/components/Popups/VolunteerForm.jsx)

### Dashboards
- **Admin Dashboard:** [`src/pages/admin/Dashboard.jsx`](./src/pages/admin/Dashboard.jsx)
- **Donor Dashboard:** [`src/pages/donor/Dashboard.jsx`](./src/pages/donor/Dashboard.jsx)
- **Recipient Dashboard:** [`src/pages/recipient/Dashboard.jsx`](./src/pages/recipient/Dashboard.jsx)
- **Volunteer Dashboard:** [`src/pages/volunteer/Dashboard.jsx`](./src/pages/volunteer/Dashboard.jsx)

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

