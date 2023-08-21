import cors from 'cors';

export default cors({
  origin: '*',
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'x-access-token',
    'x-uuid',
    'authorization',
  ],
  methods: ['POST', 'GET', 'OPTIONS', 'DELETE', 'PUT'],
});
