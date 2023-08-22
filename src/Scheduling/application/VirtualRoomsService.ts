import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { IClassroom } from '../domain/entities/classroom';
// import { managementHttpRequest } from 'src/shared/config/axios';
import { ServiceResultFactory } from '../domain/factories/serviceResultFactory';

@Injectable()
export default class VirtualRoomService {
  constructor(private readonly httpService: HttpService) {}

  getAll(): string {
    return 'Aqui esta todas as salas:';
  }

  async scheduleVirtualRoom(
    scheduling: IClassroom,
  ): Promise<IClassroom | number | null | any /* Alterar depois */> {
    //TODO verificar se já existe agendamento nessa data/hora

    try {
      console.log('Chamando Scheduling POST', scheduling);
      const newSchedule = await lastValueFrom(
        this.httpService.post('', { scheduling }),
      );

      // TODO enum de statusCode
      return newSchedule;
    } catch (error) {
      // TODO enum de erro
      return ServiceResultFactory.fatal(error) as any;
    }
  }
}
