import { Module } from '@nestjs/common';
import { AppController } from './appController';
import { AppService } from './appService';
import { VirtualRoomController } from './Scheduling/ui/VirtualRoomController';
import VirtualRoomService from './Scheduling/application/VirtualRoomsService';

@Module({
  imports: [],
  controllers: [AppController, VirtualRoomController],
  providers: [AppService, VirtualRoomService],
})
export class AppModule {}
