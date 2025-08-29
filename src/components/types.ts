export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
<<<<<<< HEAD
  ForgotPassword: {screen_heading: string};
=======
  ForgotPassword: undefined;
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
  OTPVerification: {
    email: string;
    type: 'forgot_password' | 'email_verification';
    user?: any;
    token?: string;
    fromLogin?: boolean;
  };
  ChangePassword: { email: string; resetToken: string; };
  Main: undefined;
  TwofactorOTP: {token: string;user: any; };
  ReferralScreen: {token: string;user: any; fromLogin?: boolean; };
  MyProfileScreen: undefined;
  UpdateEmail: undefined;
  TwoFactorScreen: undefined;
  NotificationPrefs: undefined;
  HelpCenter: undefined;
  ContactSupport: undefined;
  Page: undefined;
  AllActivity: undefined;
  InternalReferral: undefined;
  Wallet: undefined;
  DepositScreen: undefined;
  WithdrawScreen: undefined;
  FAQScreen: undefined;
  SupportScreen: undefined;
  Store: undefined;
  MakePaymentScreen: {package_id: any; };
  CustomQuote: undefined;
  DeleteAccount: undefined;
  NotificationScreen: undefined;
  Sidebar: undefined;
  AchievementsScreen: undefined;
<<<<<<< HEAD
  WatchVideoScreen: undefined;
  NotificationPreferencesScreen: undefined;
  ChangePasswordScreen: {email: string, resetToken: string};
  DailyRewardsScreen: undefined;
=======
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
};