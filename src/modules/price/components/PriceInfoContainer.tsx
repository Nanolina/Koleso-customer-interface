import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { css, sizes } from '../../../consts';
import { CheckboxItem } from '../../../ui/CheckboxItem';
import { Hr } from '../../../ui/Hr';
import { IPriceInfoContainerProps } from '../types';
import { PriceInfo } from './PriceInfo';

export const PriceInfoContainer: React.FC<IPriceInfoContainerProps> =
  React.memo(
    ({
      quantity,
      priceForProducts,
      hasDiscount = false,
      hasDelivery = true,
      discount,
      courierServices,
      hasTotalPrice = true,
      totalPrice,
      isReturn = false,
    }: any) => {
      const { t } = useTranslation();

      const [isChecked, setIsChecked] = useState(false);

      const toggleCheckbox = useCallback(() => {
        setIsChecked((prevChecked) => !prevChecked);
      }, []);

      return (
        <>
          <View style={css.priceInfoContainer}>
            <PriceInfo
              text={isReturn ? 'Refundable amount' : t('price.label')}
              price={priceForProducts}
            />
            {hasDiscount && !isReturn && (
              <PriceInfo text={t('price.discount')} price={`-${discount}`} />
            )}
            {courierServices ? (
              <PriceInfo
                text={t('price.courierServices')}
                price={courierServices}
              />
            ) : (
              !isReturn &&
              hasDelivery && (
                <PriceInfo text={t('price.delivery')} price="Free" hasCurrency={false} />
              )
            )}
          </View>
          {hasTotalPrice && (
            <>
              <Hr />
              <View style={css.priceInfoContainer}>
                <PriceInfo text={t('price.totalAmount')} price={totalPrice} />
              </View>
              <CheckboxItem
                text={t('price.terms')}
                isSelected={isChecked}
                onToggle={toggleCheckbox}
                styleText={styles.text}
              />
            </>
          )}
        </>
      );
    }
  );

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.text15,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});
