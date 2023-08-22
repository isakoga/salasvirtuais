import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './appController';
import { AppService } from './appService';
import { VirtualRoomController } from './Scheduling/ui/VirtualRoomController';
import { handleKeycloackAuth } from './shared/config/utils/handleKeycloackAuth';
import VirtualRoomService from './Scheduling/application/VirtualRoomsService';

@Module({
  imports: [
    HttpModule.register({
      baseURL:
        process.env.BASE_URL ||
        'https://salas-virtuais-backend-stg.arcotech.io/',
      timeout: 5000,
    }),
  ],
  controllers: [AppController, VirtualRoomController],
  providers: [
    AppService,
    VirtualRoomService,
    { provide: APP_INTERCEPTOR, useClass: handleKeycloackAuth },
  ],
})
export class AppModule {}
