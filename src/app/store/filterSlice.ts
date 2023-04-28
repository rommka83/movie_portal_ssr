import { estimates } from './../../widgets/FilterPanel/constants';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from 'axios';
import { FilterType } from 'features/FilterDropdown/FilterDropdown';
import { TFunction } from 'i18next';
import { formatterVotes } from 'shared/utils/formatterVotes';

interface IFilter {
  genres: string[];
  countries: string[];
  rating: number | null;
  votes: number | null;
  director: string | null;
  actor: string | null;
  personsList: Persons[];
  personsPending: boolean;
}

type Persons = { name: string; id: number };
type PersonsResponse = { docs: Persons[] };
export const getSearchPersons = createAsyncThunk<Persons[], { name: string; profession: string }>(
  'filters/director-request',
  async ({ name, profession }) => {
    const response = await axios.get<PersonsResponse>(
      `https://api.kinopoisk.dev/v1/person?selectFields=name%20id&sortField=name&sortType=1%20&limit=10&name=${name}&profession.value=${profession}`,
      {
        headers: {
          Accept: 'application/json',
          'X-API-KEY': 'DMGDYW0-0FC4Z7T-N7R9K0N-HFPEH3J',
        },
      },
    );
    return response.data.docs;
  },
);

const initialState: IFilter = {
  genres: [],
  countries: [],
  rating: null,
  votes: null,
  director: null,
  actor: null,
  personsList: [],
  personsPending: false,
};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addGenresFilter(state, action: PayloadAction<string>) {
      state.genres.push(action.payload);
    },
    addCountriesFilter(state, action: PayloadAction<string>) {
      state.countries.push(action.payload);
    },
    addInputRangeFilter(state, action: PayloadAction<{ type: 'rating' | 'votes'; value: number }>) {
      state[action.payload.type] = action.payload.value;
    },
    addInputSearchDirectorFilter(state, action: PayloadAction<string>) {
      state.director = action.payload;
    },
    addInputSearchActorFilter(state, action: PayloadAction<string>) {
      state.actor = action.payload;
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
  addCountriesFilter,
  addInputRangeFilter,
  addInputSearchDirectorFilter,
  addInputSearchActorFilter,
} = filters.actions;
export default filters;

export const filtersSelector = (state: RootState) => state.filters;
export const personsSelector = (state: RootState) => state.filters.personsList;
export const countriesSelector = (state: RootState) => state.filters.countries;
export const pendingPersonsSelector = (state: RootState) => state.filters.personsPending;
export const getSelectedFilterSelector = (type: FilterType, t: TFunction) => (state: RootState) => {
  const filters = state.filters;
  switch (type) {
    case 'Actor':
      return filters.actor;
    case 'Director':
      return filters.director;
    case 'Countries':
      return filters.countries.map((country) => t(`FilterPanel.${country}`)).join(', ');
    case 'Estimated':
      return filters.votes ? formatterVotes(filters.votes / 1000) : '';
    case 'Genres':
      return filters.genres.map((genre) => t(`headerMoviesFilter.${genre}`)).join(', ');
    case 'Rating':
      return filters.rating;
  }
};
export const directorSelector = (state: RootState) => state.filters.director;
export const actorSelector = (state: RootState) => state.filters.actor;
