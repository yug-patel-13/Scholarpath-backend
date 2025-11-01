import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { ScholarshipsService } from './scholarships.service';
import { UserProfilesService } from '../user-profiles/user-profiles.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('scholarships')
export class ScholarshipsController {
  constructor(
    private readonly scholarshipsService: ScholarshipsService,
    private readonly userProfilesService: UserProfilesService,
  ) {}

  @Get()
  findAll() {
    return this.scholarshipsService.findAll();
  }

  @Get('category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: string) {
    return this.scholarshipsService.findByCategory(+categoryId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('eligible')
  async findEligible(@Body() body: { userId: number }) {
    const profile = await this.userProfilesService.findByUserId(body.userId);
    if (!profile) {
      return { message: 'Profile not found. Please fill your profile first.' };
    }
    return this.scholarshipsService.findEligible(profile);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scholarshipsService.findOne(+id);
  }
}

