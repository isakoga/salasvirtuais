import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import VirtualRoomsService from '../application/VirtualRoomsService';
import { Request, Response } from 'express';
import { IClassroom } from '../domain/entities/classroom';

@Controller()
export class VirtualRoomController {
  constructor(private readonly appService: VirtualRoomsService) {}

  @Get('/class')
  getHello(): string {
    return this.appService.getAll();
  }

  @Post('/classroom')
  async scheduleClassroom(
    @Req() request: Request,
    @Res() response: Response<IClassroom | number>,
  ): Promise<Response /* Alterar depois */> {
    const result = await this.appService.scheduleVirtualRoom(request.body);

    return response.status(201).json(result);
  }
}
