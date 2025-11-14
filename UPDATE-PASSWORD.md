# Update PostgreSQL Password

The migration failed because the PostgreSQL password in `.env` is incorrect.

## Quick Fix:

1. **Open `.env` file** in `Scholarpath-backend` folder
2. **Update the password**:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASS=YOUR_ACTUAL_POSTGRESQL_PASSWORD
   DB_NAME=scholarpath
   ```
   Replace `YOUR_ACTUAL_POSTGRESQL_PASSWORD` with your actual PostgreSQL password.

3. **Find your PostgreSQL password**:
   - Check pgAdmin login credentials (the password you use to open pgAdmin)
   - Or check PostgreSQL installation notes
   - If you forgot, you may need to reset it

4. **After updating `.env`, run migration again**:
   ```bash
   npm run migration:run
   ```

## Alternative: Create Database First

If you haven't created the `scholarpath` database yet:

1. **Open pgAdmin**
2. **Right-click on "Databases"** → **Create** → **Database**
3. **Name**: `scholarpath`
4. **Click Save**

Then run the migration!



