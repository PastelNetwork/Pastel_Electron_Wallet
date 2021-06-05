import OnboardingLayout from '../layout/Onboarding'
import PageLayout from '../layout/PageLayout'

import {
  WelcomePage,
  RegisterPage,
  LoginPage,
  PasswordRecoveryPage,
  RegistrationPending,
  RegistrationSuccessful,
  CryptoKeys,
  NewPassword,
} from '../../features/onboarding/index'

import * as ROUTES from '../utils/constants/routes'
import Member from '../../features/members'
import NFTMarketFeed from '../../features/nftMarket'

const onboardingRoute = {
  id: 'welcomePage',
  path: ROUTES.WELCOME_PAGE,
  component: WelcomePage,
  layout: OnboardingLayout,
}

const registerRoute = {
  id: 'signUp',
  path: ROUTES.SIGN_UP,
  component: RegisterPage,
  layout: OnboardingLayout,
}

const loginRoute = {
  id: 'login',
  path: ROUTES.LOGIN,
  component: LoginPage,
  layout: OnboardingLayout,
}

const passwordRecoveryRoute = {
  id: 'passwordRecovery',
  path: ROUTES.PASSWORD_RECOVERY,
  component: PasswordRecoveryPage,
  layout: OnboardingLayout,
}

const registrationPending = {
  id: 'registrationPending',
  path: ROUTES.REGISTER_PENDING,
  component: RegistrationPending,
  layout: OnboardingLayout,
}

const registrationSuccessful = {
  id: 'registrationSuccessful',
  path: ROUTES.REGISTER_SUCCESSFUL,
  component: RegistrationSuccessful,
  layout: OnboardingLayout,
}

const cryptoKeys = {
  id: 'cryptoKeys',
  path: ROUTES.CRYPTO_KEYS,
  component: CryptoKeys,
  layout: OnboardingLayout,
}

const newPassword = {
  id: 'newPassword',
  path: ROUTES.NEW_PASSWORD,
  component: NewPassword,
  layout: OnboardingLayout,
}

const members = {
  id: 'members',
  path: ROUTES.MEMBERS,
  component: Member,
  layout: PageLayout,
}

const market = {
  id: 'market',
  path: ROUTES.MARKET,
  component: NFTMarketFeed,
  layout: PageLayout,
}

export const pageRoutes = [
  onboardingRoute,
  registerRoute,
  loginRoute,
  passwordRecoveryRoute,
  registrationPending,
  registrationSuccessful,
  cryptoKeys,
  newPassword,
  members,
  market,
]
