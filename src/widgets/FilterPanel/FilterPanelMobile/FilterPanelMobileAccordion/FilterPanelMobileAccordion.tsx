import React from 'react';
import styles from './filterpanelmobileaccordion.module.css';
import { useTranslation } from 'react-i18next';
import { Accordion } from 'shared/ui/Accordion';
import { FilterPanelCarousel } from 'widgets/FilterPanel/FilterPanelCarousel';
import { FilterPanelButtonType } from 'widgets/FilterPanel/FilterPanelCarousel/FilterPanelButton';
import { useAppSelector } from 'app/store/hooks';
import { getSelectedFilterSelector } from 'app/store/filterSlice';

interface IFilterPanelMobileAccordion {
  textButton: string;
  array: string[];
  type: FilterPanelButtonType;
}
export const FilterPanelMobileAccordion = ({ array, type, textButton }: IFilterPanelMobileAccordion) => {
  const { t } = useTranslation();
  const selectedItem = useAppSelector(getSelectedFilterSelector(type, t));

  let selectedItemText;

  switch (type) {
    case 'rating':
      selectedItemText = selectedItem ? `больше ${selectedItem}` : null;
      break;
    case 'votes':
      selectedItemText = selectedItem ? `от ${selectedItem}` : null;
      break;
    default:
      selectedItemText = selectedItem;
  }

  return (
    <Accordion textButton={textButton} selectedItem={selectedItemText}>
      <FilterPanelCarousel array={array} type={type} carouselContainerClassName={styles.carouselContainer} />
    </Accordion>
  );
};
