import User from 'src/models/User';

export interface LoginResponse {
  token: {
    token: string,
    type: string,
  };
}

export interface RegisterResponse {
  token: {
    token: string,
    type: string,
  };
  user: User;
}

export interface UserResponse {
  user: User;
}
