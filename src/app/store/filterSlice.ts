import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { FilterType } from 'features/FilterDropdown/FilterDropdown';
import { TFunction } from 'i18next';
import { formatterVotes } from 'shared/utils/formatterVotes';
import { FilterDropdownSearchType } from 'features/FilterDropdown/FilterDropdownSearch';
import { InputRangeType } from 'widgets/FilterPanel/FilterPanelDesktop/FilterInputRange';

interface IFilter {
  filters: {
    genres: string[];
    countries: string[];
    rating: number | null;
    votes: number | null;
    director: string | null;
    actor: string | null;
  };
  personsList: Persons[];
  personsPending: boolean;
  sortTypes: string | null;
}

type Persons = { name: string; id: number };
type PersonsResponse = { docs: Persons[] };
export const getSearchPersons = createAsyncThunk<
  Persons[],
  { name: string; profession: FilterDropdownSearchType }
>('filters/director-request', async ({ name, profession }) => {
  if (!name) {
    return [];
  }

  const response = await axios.get<PersonsResponse>(
    `https://api.kinopoisk.dev/v1/person?selectFields=name%20id&sortField=name&sortType=1%20&limit=10&name=${name}&movies.enProfession=${profession}`,
    {
      headers: {
        Accept: 'application/json',
        'X-API-KEY': 'DMGDYW0-0FC4Z7T-N7R9K0N-HFPEH3J',
      },
    },
  );
  return response.data.docs;
});

const initialState: IFilter = {
  filters: {
    genres: [],
    countries: [],
    rating: null,
    votes: null,
    director: null,
    actor: null,
  },
  personsList: [],
  personsPending: false,
  sortTypes: null,
};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addGenresFilter(state, action: PayloadAction<string>) {
      state.filters.genres.push(action.payload);
    },
    removeGenresFilter(state, action: PayloadAction<string>) {
      state.filters.genres = state.filters.genres.filter((genre) => genre !== action.payload);
    },

    addCountriesFilter(state, action: PayloadAction<string>) {
      state.filters.countries.push(action.payload);
    },
    removeCountriesFilter(state, action: PayloadAction<string>) {
      state.filters.countries = state.filters.countries.filter((country) => country !== action.payload);
    },

    addInputRangeFilter(state, action: PayloadAction<{ type: InputRangeType; value: number }>) {
      state.filters[action.payload.type] = action.payload.value;
    },
    removeInputRangeFilter(state, action: PayloadAction<InputRangeType>) {
      state.filters[action.payload] = null;
    },
    addInputSearchPersonFilter(
      state,
      action: PayloadAction<{ type: FilterDropdownSearchType; value: string }>,
    ) {
      state.filters[action.payload.type] = action.payload.value;
    },
    addSortTypesSort(state, action: PayloadAction<string | null>) {
      state.sortTypes = action.payload;
    },
    removeSortTypesSort(state) {
      state.sortTypes = null;
    },
    clearPersonsList(state) {
      state.personsList = [];
    },
    resetFilters() {
      return initialState;
    },
    addAllFilters(state, action: PayloadAction<IFilter['filters']>) {
      state.filters = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSearchPersons.pending, (state) => {
      state.personsPending = true;
      state.personsList = [];
    });

    builder.addCase(getSearchPersons.fulfilled, (state, action) => {
      state.personsList = action.payload;
      state.personsPending = false;
    });

    builder.addCase(getSearchPersons.rejected, (state, action) => {
      if (!action.meta.aborted) {
        state.personsPending = false;
      }
      console.log(action.error);
    });
  },
});

export const {
  addGenresFilter,
  removeGenresFilter,
  addCountriesFilter,
  removeCountriesFilter,
  addInputRangeFilter,
  removeInputRangeFilter,
  addInputSearchPersonFilter,
  clearPersonsList,
  resetFilters,
  addSortTypesSort,
  removeSortTypesSort,
  addAllFilters,
} = filters.actions;
export default filters;

export const personsListSelector = (state: RootState) => state.filters.personsList;
export const pendingPersonsSelector = (state: RootState) => state.filters.personsPending;
export const getSelectedFilterSelector = (type: FilterType, t: TFunction) => (state: RootState) => {
  const filters = state.filters;
  switch (type) {
    case 'actor':
      return filters.filters.actor;
    case 'director':
      return filters.filters.director;
    case 'countries':
      return filters.filters.countries.map((country) => t(`FilterPanel.${country}`)).join(', ');
    case 'votes':
      return filters.filters.votes ? formatterVotes(filters.filters.votes / 1000) : '';
    case 'genres':
      return filters.filters.genres.map((genre) => t(`headerDropdownNavigation.${genre}`)).join(', ');
    case 'rating':
      return filters.filters.rating;
  }
};
export const personSelector = (person: FilterDropdownSearchType) => (state: RootState) =>
  state.filters.filters[person];
export const isGenreSelectedSelector = (genre: string) => (state: RootState) =>
  state.filters.filters.genres.includes(genre);
export const isCountrySelectedSelector = (country: string) => (state: RootState) =>
  state.filters.filters.countries.includes(country);
export const isInputRangeSelectedSelector =
  (type: 'rating' | 'votes', value: number) => (state: RootState) => {
    const filterState = state.filters.filters[type];
    if (type === 'votes') {
      if (filterState == null) return false;
      const votesNumberDigit = 100_000;
      const extremeValueVotes = 10;
      const firstClassUnitFilterState = Math.trunc(filterState / votesNumberDigit);
      const firstClassUnitValue = Math.trunc(value / votesNumberDigit);

      if (firstClassUnitFilterState === firstClassUnitValue) return true;
      if (firstClassUnitFilterState > extremeValueVotes && extremeValueVotes === firstClassUnitValue) {
        return true;
      }
      return false;
    } else {
      return Math.trunc(filterState ?? 0) === value;
    }
  };

export const filtersCountSelector = (state: RootState) =>
  Object.values(state.filters.filters)
    .flatMap((filter) => filter)
    .filter(Boolean).length;

export const sortTypesSelectedSelector = (state: RootState) => state.filters.sortTypes;
