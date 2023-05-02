import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { InputSearch } from 'shared/ui/InputSearch';
import styles from './filterdropdownsearch.module.css';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { debounce } from 'shared/utils/debounse';
import {
  personsListSelector,
  getSearchPersons,
  pendingPersonsSelector,
  clearPersonsList,
  addInputSearchPersonFilter,
} from 'app/store/filterSlice';
import classNames from 'classnames';
import { Loader } from 'shared/ui/Loader';
import { useDropdownContext } from '../FilterDropdownContext';

export type FilterDropdownSearchType = 'director' | 'actor';
export interface IFilterDropdownSearch {
  placeholderText: string;
  type: FilterDropdownSearchType;
  className?: string;
  onSearch?: () => void;
}
export const FilterDropdownSearch = React.memo(
  ({ placeholderText, type, className, onSearch }: IFilterDropdownSearch) => {
    const [selectedPerson, setSelectedPerson] = useState('');
    const dropdownClose = useDropdownContext();
    const dispatch = useAppDispatch();
    const personsList = useAppSelector(personsListSelector);
    const pendingPersons = useAppSelector(pendingPersonsSelector);
    const abortRef = useRef<((reason?: string) => void) | null>(null);
    const isDirectorType = type === 'director';
    const iconClassName = isDirectorType ? 'icon-films_20__0' : 'icon-person_20__0';
    const onChange = useCallback(
      debounce((value: string) => {
        if (abortRef.current) {
          abortRef.current();
        }
        if (selectedPerson) {
          setSelectedPerson('');
        }
        const controller = dispatch(getSearchPersons({ name: value, profession: type }));
        abortRef.current = controller.abort;
      }, 350),
      [selectedPerson, abortRef, dispatch],
    );

    const onPersonClick = (event: MouseEvent<HTMLLIElement>) => {
      const person = event.currentTarget.dataset['name'];
      if (person) {
        setSelectedPerson(person);
      }
    };

    const onSearchClick = useCallback(() => {
      dispatch(addInputSearchPersonFilter({ type, value: selectedPerson }));
      onSearch && onSearch();
      dropdownClose && dropdownClose();
    }, [dispatch, selectedPerson, onSearch, dropdownClose, type]);

    useEffect(() => {
      return () => {
        if (abortRef.current) {
          abortRef.current();
        }
        dispatch(clearPersonsList());
      };
    }, [dispatch, abortRef]);

    return (
      <div className={classNames(styles.container, className)}>
        <InputSearch
          placeholderText={placeholderText}
          onChange={onChange}
          searchValue={selectedPerson}
          onSearchClick={onSearchClick}
        />

        {pendingPersons && (
          <div className={styles.loaderContainer}>
            <Loader className={styles.loader} />
          </div>
        )}
        <ul className={styles.list}>
          {personsList.map((person) => (
            <li
              data-name={person.name}
              key={person.id}
              className={classNames(styles.listItem, {
                [styles.active]: person.name === selectedPerson,
              })}
              onClick={onPersonClick}
            >
              <span className={classNames(iconClassName, styles.listItemIcon)} />
              {person.name}
            </li>
          ))}
        </ul>
      </div>
    );
  },
);
