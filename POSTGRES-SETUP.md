# PostgreSQL Setup Guide

Since you have pgAdmin, you can easily set up PostgreSQL for this project!

## Step 1: Open pgAdmin

1. Open pgAdmin from your Start menu
2. Enter your PostgreSQL master password if prompted

## Step 2: Create Database

### Using pgAdmin GUI:

1. **Right-click on "Databases"** in the left sidebar
2. Select **"Create"** → **"Database..."**
3. Fill in:
   - **Database name**: `scholarpath`
   - **Owner**: `postgres` (or your PostgreSQL username)
   - **Encoding**: `UTF8`
   - **Collation**: `C` (or default)
4. Click **"Save"**

### Using SQL Query:

1. In pgAdmin, click on **"Tools"** → **"Query Tool"**
2. Connect to `postgres` database
3. Run this SQL:
   ```sql
   CREATE DATABASE scholarpath
   WITH ENCODING = 'UTF8'
   LC_COLLATE = 'C'
   LC_CTYPE = 'C';
   ```
4. Click **Execute** (or press F5)

## Step 3: Update .env File

Open `Scholarpath-backend/.env` and set your PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=your_postgres_password
DB_NAME=scholarpath
```

**Important**: Replace `your_postgres_password` with your actual PostgreSQL password!

## Step 4: Run Migrations

After creating the database, run migrations to create all tables:

```bash
cd Scholarpath-backend
npm run migration:run
```

Or if using synchronize (development only):
- The backend will auto-create tables if `NODE_ENV=development`

## Step 5: Start Backend

```bash
npm run start:dev
```

You should see:
```
Application is running on: http://localhost:5000
```

No more connection errors! ✅

## Troubleshooting

**Error: "password authentication failed"**
- Check your PostgreSQL password in `.env`
- Default PostgreSQL password is usually set during installation

**Error: "database does not exist"**
- Make sure you created the `scholarpath` database in pgAdmin

**Error: "connection refused"**
- Check if PostgreSQL is running:
  ```powershell
  Get-Service | Where-Object {$_.Name -like "*postgresql*"}
  ```
- Start PostgreSQL service if needed

**Find your PostgreSQL port:**
- In pgAdmin, right-click your server → Properties → Connection tab
- Default port is 5432

## Verify Connection

1. Open pgAdmin
2. Expand `Databases` → `scholarpath`
3. You should see tables like:
   - `users`
   - `categories`
   - `scholarships`
   - `user_profiles`
   - `form_fill_requests`
   - `cyber_cafes`

All set! 🎉



