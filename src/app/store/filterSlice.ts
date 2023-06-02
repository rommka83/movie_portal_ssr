import {
  AsyncThunkPayloadCreator,
  createAsyncThunk,
  createSlice,
  isAnyOf,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from './store';
import { FilterType } from 'features/FilterDropdown/FilterDropdown';
import { TFunction } from 'i18next';
import { formatterVotes } from 'shared/utils/formatterVotes';
import { FilterDropdownSearchType } from 'features/FilterDropdown/FilterDropdownSearch';
import { InputRangeType } from 'widgets/FilterPanel/FilterPanelDesktop/FilterInputRange';
import { getMovies, getPersons } from 'shared/apiService';
import { IPerson } from 'shared/types/IPerson';
import { onExtraReducersRejected } from './helpers';
import { IFilm } from 'shared/types/IFilm';

interface IFilter {
  filters: {
    genres: string[];
    countries: string[];
    rating: number | null;
    votes: number | null;
    director: string | null;
    actor: string | null;
  };
  personsList: IPerson[];
  personsPending: boolean;
  sortTypes: string | null;
  filteredMovies: IFilm[];
  filteredMoviesPending: boolean;
}

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
  filteredMovies: [],
  filteredMoviesPending: false,
};

const getFilteredMoviesHandler: AsyncThunkPayloadCreator<
  IFilm[],
  string | undefined,
  { state: RootState }
> = async (page = '1', { getState, dispatch }) => {
  const filters = getState().filters.filters;
  const sortType = getState().filters.sortTypes;
  try {
    const response = await getMovies({
      page,
      ['genres.name']: filters.genres,
      ['countries.name']: filters.countries,
      ['rating.kp']: filters.rating?.toString() + '-10' ?? '',
      ['votes.kp']: filters.votes?.toString() + '-1000000' ?? '',
      ['persons.name']: [filters.director ?? '', filters.actor ?? ''],
      ['sortField']: sortType ?? '',
      ['sortType']: '-1',
    });
    return response.docs;
  } catch (err) {
    dispatch(
      onExtraReducersRejected({
        title: 'Errors.title',
        text: 'Errors.getMovies',
      }),
    );
    return [];
  }
};

export const getFilteredMoviesPage = createAsyncThunk<IFilm[], string | undefined, { state: RootState }>(
  'filters/moviePage-request',
  getFilteredMoviesHandler,
);

export const getFilteredMovies = createAsyncThunk<IFilm[], string | undefined, { state: RootState }>(
  'filters/movie-request',
  getFilteredMoviesHandler,
);

export const getSearchPersons = createAsyncThunk<
  IPerson[],
  { name: string; profession: FilterDropdownSearchType }
>('filters/director-request', async ({ name, profession }, { dispatch }) => {
  if (!name) {
    return [];
  }
  try {
    const response = await getPersons({
      selectFields: 'name id',
      sortField: 'name',
      sortType: '1',
      name,
      ['movies.enProfession']: profession,
      limit: '10',
    });
    return response.docs;
  } catch (err) {
    dispatch(
      onExtraReducersRejected({
        title: 'Errors.title',
        text: 'Errors.getPersons',
      }),
    );
    return [];
  }
});

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
      state.personsPending = false;
    },
    resetFilters() {
      return initialState;
    },
    addAllFilters(state, action: PayloadAction<IFilter['filters']>) {
      state.filters = action.payload;
    },
    addFilteredMovies(state, action: PayloadAction<IFilm[]>) {
      state.filteredMovies = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSearchPersons.pending, (state) => {
      state.personsPending = true;
      state.personsList = [];
    });

    builder.addCase(getFilteredMovies.pending, (state) => {
      state.filteredMoviesPending = true;
    });

    builder.addCase(getSearchPersons.fulfilled, (state, action) => {
      state.personsList = action.payload;
      state.personsPending = false;
    });

    builder.addCase(getFilteredMoviesPage.fulfilled, (state, action) => {
      state.filteredMovies = [...state.filteredMovies, ...action.payload];
      state.filteredMoviesPending = false;
    });

    builder.addCase(getFilteredMovies.fulfilled, (state, action) => {
      state.filteredMovies = action.payload;
      state.filteredMoviesPending = false;
    });

    builder.addCase(getSearchPersons.rejected, (state, action) => {
      if (!action.meta.aborted) {
        state.personsPending = false;
      }
    });

    builder.addMatcher(
      isAnyOf(getFilteredMovies.rejected, getFilteredMoviesPage.rejected),
      (state, action) => {
        if (!action.meta.aborted) {
          state.filteredMoviesPending = false;
        }
      },
    );
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
  addFilteredMovies,
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
      return filters.filters.genres.map((genre) => genre).join(', ');
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

export const filteredMoviesSelector = (state: RootState) => state.filters.filteredMovies;
export const filteredMoviesPendingSelector = (state: RootState) => state.filters.filteredMoviesPending;
