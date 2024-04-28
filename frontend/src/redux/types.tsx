export interface User {
  username: string;
  email: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  userData: User | null;
  error: string | null;
}
