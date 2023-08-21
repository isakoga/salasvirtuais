import { Injectable } from '@nestjs/common';
import { IClassroom } from '../domain/entities/classroom';
// import { managementHttpRequest } from 'src/shared/config/axios';
import { ServiceResultFactory } from '../domain/factories/serviceResultFactory';

@Injectable()
export default class VirtualRoomService {
  getAll(): string {
    return 'Aqui esta todas as salas:';
  }

  async scheduleVirtualRoom(
    scheduling: IClassroom,
  ): Promise<IClassroom | number | null> {
    //TODO verificar se já existe agendamento nessa data/hora

    try {
      // const newSchedule = await managementHttpRequest.post('', {scheduling});
      const newSchedule = scheduling;

      // TODO enum de statusCode
      return newSchedule;
    } catch (error) {
      // TODO enum de erro
      return ServiceResultFactory.fatal(error) as any;
    }
  }
}
