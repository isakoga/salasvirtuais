import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VirtualRoomController } from './Classroom/ui/VirtualRoomController';
import VirtualRoomService from './Classroom/application/VirtualRoomsService';

@Module({
  imports: [],
  controllers: [AppController, VirtualRoomController],
  providers: [AppService, VirtualRoomService],
})
export class AppModule {}
