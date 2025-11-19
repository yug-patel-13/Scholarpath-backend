import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CyberCafesService } from './cyber-cafes.service';

@Controller('cyber-cafes')
export class CyberCafesController {
  constructor(private readonly cyberCafesService: CyberCafesService) {}

  @Get()
  findAll() {
    return this.cyberCafesService.findAll();
  }

  @Get('nearest')
  findNearest(
    @Query('latitude') latitude: string,
    @Query('longitude') longitude: string,
    @Query('limit') limit?: string,
  ) {
    return this.cyberCafesService.findNearest(
      parseFloat(latitude),
      parseFloat(longitude),
      limit ? parseInt(limit) : 10,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cyberCafesService.findOne(+id);
  }
}





