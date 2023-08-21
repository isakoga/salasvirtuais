import { Injectable } from '@nestjs/common';
import { IClassroom } from '../domain/IClassroom';

@Injectable()
export default class VirtualRoomService {
  getAll(): string {
    return 'Aqui esta todas as salas:';
  }

  // getById(id): string {
  //   return 'Hello new World!';
  // }

  // update(id, body): string {
  //   return 'Hello new World!';
  // }

  // delete(id): string {
  //   return 'Hello new World!';
  // }

  async create(body): Promise<IClassroom> {
    return body;
  }
}
