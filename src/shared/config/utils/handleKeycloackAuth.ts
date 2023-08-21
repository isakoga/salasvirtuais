export const handleKeycloackAuth = async (config: any) => {
  // verificar autenticação keycloack
  try {
    // bate em algum endpoint do keycloack para validar infos de usuario
    // seta token config.headers.Authorization = token;
    return config;
  } catch (err) {
    console.log('error from catch', err);
  }
};
