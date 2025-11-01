import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { FormFillRequestsService } from './form-fill-requests.service';
import { CreateFormFillRequestDto } from './dto/create-form-fill-request.dto';
import { UpdateFormFillRequestDto } from './dto/update-form-fill-request.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('form-fill-requests')
@UseGuards(JwtAuthGuard)
export class FormFillRequestsController {
  constructor(private readonly formFillRequestsService: FormFillRequestsService) {}

  @Post()
  create(@Body() createFormFillRequestDto: CreateFormFillRequestDto) {
    return this.formFillRequestsService.create(createFormFillRequestDto);
  }

  @Get()
  findAll() {
    return this.formFillRequestsService.findAll();
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.formFillRequestsService.findByUserId(+userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formFillRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormFillRequestDto: UpdateFormFillRequestDto) {
    return this.formFillRequestsService.update(+id, updateFormFillRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formFillRequestsService.remove(+id);
  }
}

