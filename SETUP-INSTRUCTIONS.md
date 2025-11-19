# Database Setup Instructions

## Step 1: Install MySQL (if not installed)
Download and install MySQL from: https://dev.mysql.com/downloads/mysql/

## Step 2: Start MySQL Service
Make sure MySQL service is running on your system.

## Step 3: Create Database

### Option A: Using MySQL Command Line
```bash
mysql -u root -p
```
Then run:
```sql
CREATE DATABASE scholarpath CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### Option B: Using phpMyAdmin
1. Open phpMyAdmin
2. Click "New" to create a database
3. Name it: `scholarpath`
4. Choose collation: `utf8mb4_unicode_ci`
5. Click "Create"

### Option C: Using MySQL Workbench
1. Open MySQL Workbench
2. Connect to your MySQL server
3. Create a new schema named `scholarpath`
4. Set collation to `utf8mb4_unicode_ci`

## Step 4: Update .env File

If your MySQL root user has a password, update `Scholarpath-backend/.env`:
```env
DB_PASS=your_mysql_password
```

If no password (common on Windows), leave it empty:
```env
DB_PASS=
```

## Step 5: Run Migrations

Once the database is created and MySQL is running:
```bash
cd Scholarpath-backend
npm run migration:run
```

## Step 6: Seed Data (Optional)

To add sample scholarships and categories:
```bash
npx ts-node src/seed/seed.ts
```

## Step 7: Restart Backend

The backend should now connect successfully!

## Troubleshooting

### Error: ECONNREFUSED
- Make sure MySQL is running
- Check MySQL port (default is 3306)
- Verify MySQL credentials in `.env`

### Error: Access Denied
- Update `DB_USER` and `DB_PASS` in `.env`
- Make sure MySQL user has permissions

### Error: Database doesn't exist
- Create the database first (see Step 3)
- Make sure database name matches in `.env` (`DB_NAME=scholarpath`)





