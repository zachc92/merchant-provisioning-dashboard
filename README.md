# Sample Merchant Provision Dashboard

This sample application is a full-stack management panel designed to simulate a simple merchant onboarding and configuration pipeline. This application provides full CRUD control over merchant accounts and their associated processing configurations.

## Features

* **Merchant Records Management:** Full CRUD engine to create, read, update, and delete detailed merchant profiles.
* **Dynamic Updating:** In-place editing to modify business names for existing records.
*   **Processing Profile Mapping:** Relational routing allowing a single merchant to maintain multiple processing industry profiles.

## Tech Stack

*   **Backend Framework:** [Express](https://expressjs.com/) (v5.2.1)
*   **Database Client:** [Node-Postgres (pg)](https://node-postgres.com/) (v8.22.0)
*   **Template Engine:** [EJS](https://ejs.co) (v6.0.1)
*   **Runtime Engine:** [Node.js](https://nodejs.org) (ES Modules configuration)

## Requirements

### Prerequisites

Ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org) (v20.6.0+ required for native `--env-file` flags)
*   [PostgreSQL](https://postgresql.org) database engine

1. Clone the Repository
```bash
git clone https://github.com/zachc92/merchant-provisioning-dashboard.git
cd merchant-provisioning-dashboard
```

2. Install Dependencies
```bash
npm install
```

3. Environment Configuration

Create a .env file in the root directory of the project and populate it with your environment-specific variables.

The project's environment variables include the following:
```bash
# Server Configuration
PORT=port

# Database Configuration
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
```

4. Run the Development Server

This application uses Node's native watch mode to automatically restart when code changes are detected.

```bash
npm run dev-start
```