import i18n from '../../../i18n/i18n';

export const data = {
  genders: ['Female', 'Male'],
  languages: ['English', 'Russian'].map((language) => i18n.t(language)),
};
