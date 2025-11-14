# ScholarPath Backend API

Backend API for Scholarship Eligibility Platform built with NestJS and TypeORM.

## Features

- JWT Authentication
- User Management
- Scholarship Management
- Eligibility Filtering
- Form Fill Requests
- Cyber Cafe Locations
- Admin Dashboard
- TypeORM with MySQL

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials and admin credentials
```

**Important:** Make sure to set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_NAME` in your `.env` file before running the seed script!

3. Run migrations:
```bash
npm run migration:run
```

4. Seed database (optional):
```bash
npx ts-node src/seed/seed.ts
```

5. Start development server:
```bash
npm run start:dev
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### Users
- `GET /users` - Get all users (protected)
- `GET /users/:id` - Get user by ID (protected)

### Categories
- `GET /categories` - Get all categories
- `GET /categories/:id` - Get category by ID

### Scholarships
- `GET /scholarships` - Get all scholarships
- `GET /scholarships/:id` - Get scholarship by ID
- `GET /scholarships/category/:categoryId` - Get scholarships by category
- `POST /scholarships/eligible` - Get eligible scholarships (protected)

### User Profiles
- `POST /user-profiles` - Create/Update profile (protected)
- `GET /user-profiles/user/:userId` - Get profile by user ID (protected)

### Form Fill Requests
- `POST /form-fill-requests` - Create request (protected)
- `GET /form-fill-requests` - Get all requests (protected)
- `GET /form-fill-requests/user/:userId` - Get requests by user (protected)

### Cyber Cafes
- `GET /cyber-cafes` - Get all cafes
- `GET /cyber-cafes/nearest?latitude=&longitude=&limit=` - Get nearest cafes

### Admin
- `GET /admin/dashboard` - Dashboard stats (admin only)
- `GET /admin/requests` - All requests (admin only)
- `PATCH /admin/requests/:id/status` - Update request status (admin only)

## Admin Credentials

Admin credentials are configured in the `.env` file:
- `ADMIN_EMAIL` - Admin email address
- `ADMIN_PASSWORD` - Admin password
- `ADMIN_NAME` - Admin display name

**⚠️ IMPORTANT:** Always change the default admin credentials in production! The seed script will create the admin user using these values from your `.env` file.



