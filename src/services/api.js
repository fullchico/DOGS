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


// Postar foto
export const PHOTO_POST = (formData, token) => {
  return{
    url: API_URL + '/api/photo',
    options:{
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token,
      },
      body: formData,
    }
  }
}

// photos da api
export const PHOTOS_GET = ({page,total, user}) => {
  return{
    url:`${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options:{
      method: 'GET',
      cache:'no-store'
    }
  }
}

// photos da api pelo id
export const PHOTO_GET = (id) => {
  return{
    url: `${API_URL}/api/photo/${id}`,
    options:{
      method: 'GET',
      cache:'no-store'
    }
  }
}

// deletar photo
export const PHOTO_DELETE = (id ,token) => {
  return{
    url: `${API_URL}/api/photo/${id}`,
    options:{
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer' + token,
      },
    },
  }
}

// comentar na foto
export const COMMENT_POST = (id,body,token) => {
  return{
    url: `${API_URL}/api/comment/${id}`,
    options:{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Authorization: 'Bearer' + token,
      },
      body: JSON.stringify(body)
    },
  }
}