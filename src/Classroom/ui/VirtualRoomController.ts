import { Body, Controller, Get, Post } from '@nestjs/common';
import VirtualRoomsService from '../application/VirtualRoomsService';
import { CreateClassroomDto } from '../domain/IRequest.dto';

@Controller()
export class VirtualRoomController {
  constructor(private readonly appService: VirtualRoomsService) {}

  @Get('/class')
  getHello(): string {
    return this.appService.getAll();
  }

  @Post('/class')
  async create(
    @Body() createClassroomDto: CreateClassroomDto,
  ): Promise<string> {
    this.appService.create(createClassroomDto);

    return 'Sala criada';
  }
}
