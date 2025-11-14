import { Controller, Get, Patch, Param, Body, UseGuards, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';
import { RequestStatus } from '../form-fill-requests/entities/form-fill-request.entity';

@Controller('admin')
@UseGuards(JwtAuthGuard, AdminGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard')
  getDashboardStats() {
    return this.adminService.getDashboardStats();
  }

  @Get('requests')
  getAllRequests() {
    return this.adminService.getAllRequests();
  }

  @Patch('requests/:id/status')
  updateRequestStatus(
    @Param('id') id: string,
    @Body() body: { status: RequestStatus; adminNotes?: string },
  ) {
    return this.adminService.updateRequestStatus(+id, body.status, body.adminNotes);
  }
}



