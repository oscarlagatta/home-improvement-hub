# Home Improvement Agents Hub

This project is a web application that serves as a hub for customers to find agents for various home improvement services. The application allows customers to view agents, book services, and leave reviews for completed jobs. The backend API is built using ASP.NET Core with a minimal API structure, and the front-end is developed using React, TailwindCSS, Tanstack Query, Shadcn, and NX.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Database Structure](#database-structure)
- [API Endpoints](#api-endpoints)
- [Seed Data](#seed-data)
- [Available Commands](#available-commands)

## Technologies Used

### Backend

- ASP.NET Core Minimal API
- Entity Framework Core (with SQL Server)
- AutoMapper (for DTOs)
- Microsoft SQL Server (LocalDB for development)

### Frontend

- React
- NX Monorepo
- React Router DOM
- TailwindCSS
- Shadcn UI components
- Tanstack Query (formerly React Query)
- Axios (for API calls)

## Features

- View agents and their specialties.
- Book home improvement services from agents.
- Leave reviews for completed jobs.
- Manage customer profiles.
- Full API and database interaction using ASP.NET Core and Entity Framework.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- [.NET 6 SDK](https://dotnet.microsoft.com/download)
- [Node.js and npm](https://nodejs.org/en/download/) (for frontend development)
- [SQL Server or LocalDB](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-2019-express-localdb)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/home-improvement-hub.git
cd home-improvement-hub
