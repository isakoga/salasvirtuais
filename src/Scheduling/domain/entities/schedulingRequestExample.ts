export interface ISchedulingRequest {
  name: 'Testes de Meet';
  subject: 'Matemática';
  description: 'Testes de Meet Aguiar';
  isClassRoom: true;
  school: {
    id: 1;
    name: 'Escola Infantil Arco-Íris';
  };
  organizer: {
    id: 1;
    name: 'Aguiar';
    role: 'TEACHER'; // -> STUDENT  -> MANAGER
  };
  schedules: [
    {
      startDateTime: '2023-08-05T10:00';
      endDateTime: '2023-08-05T12:00';
    },
  ];
  classes: [
    {
      id: 1; //TODO: Como obter dado do school API ()
      name: 'Turma 1';
    },
    {
      id: 2; //TODO: Como obter dado do school API ()
      name: 'Turma 2';
    },
  ];
  guests: [
    {
      id: 1;
      name: 'João';
      role: 'STUDENT';
    },
    {
      id: 2;
      name: 'Maria';
      role: 'STUDENT';
    },
    {
      id: 3;
      name: 'Carlos';
      role: 'STUDENT';
    },
    {
      id: 3;
      name: 'Carlos';
      role: 'MANGER';
    },
  ];
}
