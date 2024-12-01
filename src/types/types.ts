// types.ts or your store file

export interface AuthenticationState {
    user: {
      id: string;
      name: string;
      email: string;
      approved: boolean
    } | null;
    approved: boolean;
  }
  
  // Define the RootState that includes your reducers
  export interface RootState {
    authenticationReducer: AuthenticationState;
  }
  