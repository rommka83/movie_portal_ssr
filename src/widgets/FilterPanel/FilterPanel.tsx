import React from 'react';
import { UseMedia } from 'shared/hooks/useMedia';
import { FilterPanelMobile } from './FilterPanelMobile';
import { FilterPanelDesktop } from './FilterPanelDesktop';

export const FilterPanel = () => {
  const tablet = UseMedia('(max-width: 768px)');
  if (tablet) {
    return <FilterPanelMobile />;
  }
  return <FilterPanelDesktop />;
};
