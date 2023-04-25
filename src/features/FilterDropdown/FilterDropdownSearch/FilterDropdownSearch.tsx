import React from 'react';
import { InputSearch } from 'shared/ui/InputSearch';

interface IFilterDropdownSearch {
  placeholderText: string;
}
export const FilterDropdownSearch = React.memo(
  ({ placeholderText }: IFilterDropdownSearch) => {
    return (
      <div>
        <InputSearch placeholderText={placeholderText} />
        <ul></ul>
      </div>
    );
  }
);
