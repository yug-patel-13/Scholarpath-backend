# Quick Start Guide - Database Setup

## The Error You're Seeing
```
ERROR [TypeOrmModule] Unable to connect to the database. Retrying...
AggregateError [ECONNREFUSED]
```

This means MySQL is not running or the database doesn't exist.

## Solution: Quick Database Setup

### Option 1: Using MySQL Command Line (Fastest)

1. **Open Command Prompt or PowerShell**
2. **Start MySQL** (if not running):
   ```bash
   net start MySQL
   ```
   Or check MySQL service in Windows Services (services.msc)

3. **Open MySQL Command Line**:
   ```bash
   mysql -u root -p
   ```
   (Enter your MySQL password if you have one, or press Enter if no password)

4. **Create Database**:
   ```sql
   CREATE DATABASE scholarpath CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   EXIT;
   ```

5. **Update .env file** (if you have a password):
   Edit `Scholarpath-backend/.env` and set:
   ```env
   DB_PASS=your_mysql_password
   ```

6. **Restart Backend**:
   The backend will automatically connect!

### Option 2: Using phpMyAdmin (Easier)

1. Open phpMyAdmin in your browser (usually http://localhost/phpmyadmin)
2. Click "New" on the left sidebar
3. Database name: `scholarpath`
4. Collation: `utf8mb4_unicode_ci`
5. Click "Create"
6. Done!

### Option 3: Check if MySQL is Installed

If you don't have MySQL:
1. Download XAMPP: https://www.apachefriends.org/
2. Install XAMPP (includes MySQL)
3. Start MySQL from XAMPP Control Panel
4. Follow Option 1 or 2 above

## After Database is Created

Run migrations to create tables:
```bash
cd Scholarpath-backend
npm run migration:run
```

Optional: Seed sample data:
```bash
npx ts-node src/seed/seed.ts
```

## Verify Everything Works

1. Backend should show: "Application is running on: http://localhost:5000"
2. No more database errors!
3. Frontend can now connect to backend

## Troubleshooting

**Still getting ECONNREFUSED?**
- Check MySQL is running: `net start MySQL` or check Services
- Verify MySQL port (default: 3306) is not blocked
- Check `.env` file has correct credentials
- Make sure database name matches: `scholarpath`



