# Payroll Pilot Software

**A payroll management platform with automated salary & tax processing, attendance integration, and secure role-based access.**
Built using **Vite.js**, **Django**, and **MySQL**, this tool streamlines payroll operations with accuracy, security, and scalability.

---

## 🚀 Features

* **Automated Salary & Tax Processing** – Eliminates manual errors with accurate payroll generation.
* **Attendance Integration** – Syncs employee attendance data for precise calculations.
* **Role-Based Access Control (RBAC)** – Secure login and restricted access for Admins, HR, and Employees.
* **Employee Self-Service** – View payslips, tax deductions, and leave balances.
* **Scalable & Secure Backend** – Django + MySQL for reliable data handling.
* **Fast Frontend** – Vite.js for optimized performance and responsive UI.

---

## 🛠️ Tech Stack

* **Frontend**: Vite.js (React-based)
* **Backend**: Django
* **Database**: MySQL
* **Deployment**: Django Server + Vite.js build

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/payroll-pilot.git
cd payroll-pilot
```

### 2. Frontend Setup (Vite.js)

```bash
cd frontend
npm install
npm run dev
```

### 3. Backend Setup (Django + MySQL)

1. Configure database settings in `backend/settings.py`:

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'payroll_db',
           'USER': 'your-mysql-username',
           'PASSWORD': 'your-mysql-password',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```
2. Run migrations and start the server:

   ```bash
   cd backend
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

---

## 📊 Usage

* **Admin**: Manage payroll policies, user roles, and attendance integration.
* **HR Manager**: Approve leaves, update attendance, and process payroll.
* **Employee**: View payslips, tax deductions, and attendance history.

---
