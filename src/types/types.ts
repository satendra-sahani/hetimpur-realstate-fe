export interface LandTypes{
  _id: string;
  client: string;
  image: File | string;
  state: string;
  city: string;
  number: string;
  price: string;
  status: 'available' | 'sold';
  paymentStatus: boolean;
}

export interface UserLandType{
  _id: string;
  client: {
    name:string
  };
  image: string;
  state: string;
  city: string;
  number: string;
  price: string;
  status: 'available' | 'sold';
  paymentStatus: boolean;

}

export interface AuthenticationState {
    user: {
      _id: string;
      name: string;
      email: string;
      role:string,
      approved: boolean
    } | null;
    approved: boolean;
  }
  
  export interface CommonState {
    isPaymentLink:Boolean,
    lands:Array<LandTypes>,
    userLands:{
      data:Array<UserLandType>
    }
  }
  // Define the RootState that includes your reducers
  export interface RootState {
    authenticationReducer: AuthenticationState;
    commonReducer:CommonState
  }
  