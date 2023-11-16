import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import { addFieldReturn } from '../../../../redux/slices/returnSlice';
import { colors, sizes } from '../../../consts';
import { Note } from '../../../ui/Note';
import { PhotoUpload } from './PhotoUpload';
import { ReasonContainer } from './ReasonContainer';

export const ReturnForm: React.FC = React.memo(() => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const comment = useSelector((state: RootState) => state.return.comment);

  const handleChangeText = React.useCallback(
    (text: string) => {
      dispatch(addFieldReturn({ field: 'comment', value: text }));
    },
    [dispatch]
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{t('returns.reason')}</Text>
      <ReasonContainer />

      <View style={styles.container}>
        <Text style={styles.text}>{t('returns.photos')}</Text>
        <Text style={styles.extra}>{t('returns.upTo')} 5</Text>
      </View>
      <PhotoUpload />

      <View style={styles.container}>
        <Text style={styles.text}>{t('returns.comment')}</Text>
      </View>
      <Note
        placeholder={`${t('returns.commentPlaceholder')}...`}
        value={comment}
        onChangeText={handleChangeText}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    gap: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: sizes.text20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  extra: {
    color: colors.gray,
    fontSize: sizes.text16,
  },
});
