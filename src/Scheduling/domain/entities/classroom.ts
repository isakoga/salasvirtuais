import { IClass } from './class';
import { IGuest } from './guest';

export interface IClassroom {
  name: string;
  subject: string;
  description: string;
  isClassRoom: boolean;
  school: {
    id: number;
    name: string;
  };
  organizer: {
    id: number;
    name: string;
    role: string;
  };
  schedules: [
    {
      startDateTime: string;
      endDateTime: string;
    },
  ];
  classes: IClass[];
  guests: IGuest[];
}
