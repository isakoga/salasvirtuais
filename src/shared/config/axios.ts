import axios from 'axios';
import { handleKeycloackAuth } from './utils/handleKeycloackAuth';

const managementHttpRequest = axios.create({
  baseURL:
    process.env.BASE_URL || 'https://salas-virtuais-backend-stg.arcotech.io/',
  headers: {},
});

// isso aqui pode ser refatorado utilizando @Interceptors do nest
managementHttpRequest.interceptors.request.use(
  async (config: any) => {
    return await handleKeycloackAuth(config);
  },
  function (error: Error) {
    return Promise.reject(error);
  },
);

export { managementHttpRequest };
