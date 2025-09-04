# 📌 HireUNex – Job Portal  

> A full-stack job portal connecting job seekers with employers. Built with **React.js, Node.js, Express, MongoDB, and Clerk**.  

---
<img width="1920" height="882" alt="1" src="https://github.com/user-attachments/assets/91dbb255-5230-4a77-b105-a0df01ce0703" />
<br></br>
<img width="1920" height="880" alt="2" src="https://github.com/user-attachments/assets/40b917c0-8727-48d7-bb82-5b3fe880542c" />
<br></br>
<img width="1920" height="882" alt="3" src="https://github.com/user-attachments/assets/dbf3827d-6e83-41de-84fc-86ff76ae44ff" />
<br></br>
<img width="1917" height="887" alt="4" src="https://github.com/user-attachments/assets/ec1b5cad-4553-40d4-a862-f368b97a53a1" />
<br></br>
<img width="1912" height="877" alt="5" src="https://github.com/user-attachments/assets/029445a1-54a0-4bc9-b0df-edcf19d6faf4" />
<br></br>
<img width="1920" height="881" alt="6" src="https://github.com/user-attachments/assets/8e8ebacc-7868-4633-9691-d95ad2d710b8" />
<br></br>
<img width="1920" height="876" alt="7" src="https://github.com/user-attachments/assets/56f201de-27f1-47b9-a264-a9baf20dbaae" />
<br></br>
<img width="1918" height="882" alt="8" src="https://github.com/user-attachments/assets/9fb24071-ac8e-41eb-8a59-199bda72d21f" />
<br></br>
<img width="1920" height="877" alt="9" src="https://github.com/user-attachments/assets/4fc2f8f0-eb12-4469-85ca-1d168375ea00" />
<br></br>
<img width="1917" height="882" alt="10" src="https://github.com/user-attachments/assets/f4400b5a-5cfd-4188-b1f4-6e255350cfc3" />
<br></br>



---

## 📌 About  

**HireUNex** is a full-stack **Job Portal Web Application** designed to connect **job seekers** with **employers**. It allows users to sign up as either a **job seeker** or an **employer**, providing tailored dashboards and features for each role.  

### 👨‍💼 Job Seekers can:  
- Create an account and log in securely.  
- Browse job listings with advanced **search and filter options**.  
- Apply to jobs and **track the status** of their applications.  

### 🏢 Employers can:  
- Post new job openings with detailed descriptions.  
- Edit or delete their job listings.  
- View and manage applications from candidates.  

### 🛡️ Admins can:  
- Oversee the platform’s activity.  
- Ensure smooth functioning and manage users if needed.  

---

The platform is built on the **MERN Stack (MongoDB, Express, React, Node.js)** with **Clerk Authentication** for secure role-based access.  
The UI is **responsive using TailwindCSS**, ensuring a smooth experience across devices.  

---

### 🎯 HireUNex was developed to demonstrate:  
- How real-world job platforms like **Internshala** or **Naukri.com** work.  
- Full-stack development with **secure APIs, dashboards, and user management**.  
- **Performance optimization**, achieving **30% faster job tracking** for test users.  

---

## ✨ Features  
- 🔑 Authentication with **Clerk** (Job Seeker, Employer, Admin)  
- 💼 Job posting, editing, deletion, and applications  
- 📊 Dashboards for employers and job seekers  
- 🔒 Secure REST APIs with Express.js & MongoDB  
- 📱 Fully responsive UI (React + TailwindCSS)  
- ⚡ Optimized job search with filters and queries  

---

## 🛠️ Tech Stack  
**Frontend:** React.js, TailwindCSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** Clerk  
**Deployment:** Netlify (Frontend), Render/Heroku (Backend)  

---

## 🏗️ Architecture  
```mermaid
flowchart TD
    A[Client - React.js] -->|API Calls| B[Backend - Node.js/Express]
    B --> C[Database - MongoDB]
    A --> D[Authentication - Clerk]
