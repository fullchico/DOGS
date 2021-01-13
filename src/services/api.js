//Api do projeto

export const API_URL = 'https://dogsapi.origamid.dev/json';

// metodo post
export const TOKEN_POST = (body) => {
  return{
    url:API_URL + '/jwt-auth/v1/token',
    options:{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(body),
    }
  };
}
// validar token

export const TOKEN_VALIDATE_POST = (token) => {
  return{
    url:API_URL + '/jwt-auth/v1/token/validate',
    options:{
      method: 'POST',
      headers:{
        Authorization: 'Bearer ' + token,
      },
    }
  };
}

// metodo get (buscado usuario)
export const USER_GET = (token) => {
  return{
    url: API_URL + '/api/user',
    options:{
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    }
  }
}

// criar novo usuario
export const USER_POST = (body) => {
  return{
    url: API_URL + '/api/user',
    options:{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(body),
    }
  }
}