import { IUserState } from '../../modules/auth';
import { LanguageType } from '../../types';

export const userInitialState: IUserState = {
  id: '',
  email: '',
  phone: '',
  isVerifiedEmail: false,
  isActive: false,
  isCustomer: false,
  language: LanguageType.English,
  organizationId: '',
  success: '',
  loading: false,
  error: null,
};
