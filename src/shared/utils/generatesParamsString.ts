import { FilterDropdownSearchType } from 'features/FilterDropdown/FilterDropdownSearch';
import { NextRouter } from 'next/router';
import { FilterPanelButtonType } from 'widgets/FilterPanel/FilterPanelCarousel/FilterPanelButton';
import { InputRangeType } from 'widgets/FilterPanel/FilterPanelDesktop/FilterInputRange';

export const typeParamsIndex = {
  genre: 0,
  countries: 1,
};
export const DEFAULT_GENRES_PARAMS = 'AllGenres';

interface IPathHandler {
  prevParams: string | undefined;
  selectedParam: string | undefined;
  isElementSelected: boolean;
  defaultParams: boolean;
}

interface IParamsHandler {
  type: 'rating' | 'votes' | 'director' | 'actor';
  selectedParam: string | undefined;
}

interface IGeneratesParamsString {
  router: NextRouter;
  isElementSelected: boolean;
  selectedElement?: string;
  type: 'genre' | FilterPanelButtonType | FilterDropdownSearchType | InputRangeType;
}

const pathHandler = ({ prevParams, selectedParam, isElementSelected, defaultParams }: IPathHandler) => {
  if (!prevParams || defaultParams) {
    return selectedParam ?? '';
  }
  if (isElementSelected) {
    const arrayFromParam = prevParams.split('+');
    return arrayFromParam.filter((item) => item !== selectedParam).join('+');
  }
  return `${prevParams}+${selectedParam}`;
};

const queryParams = new URLSearchParams();
const paramsHandler = ({ type, selectedParam }: IParamsHandler) => {
  if (queryParams.get(type) === selectedParam) {
    queryParams.delete(type);
  } else {
    queryParams.set(type, selectedParam ?? '');
  }
};

let currentParams: string[] = [DEFAULT_GENRES_PARAMS];

export const restoreParams = (router: NextRouter) => {
  const query = router.query;
  if (query.slug) {
    currentParams[typeParamsIndex.genre] = query.slug[typeParamsIndex.genre];
    currentParams[typeParamsIndex.countries] = query.slug[typeParamsIndex.countries];
  }
  Object.keys(query).forEach((key) => {
    if (key !== 'slug' && query[key] != null) {
      const value = query[key] ?? '';
      queryParams.set(key, Array.isArray(value) ? value.toString() : value);
    }
  });
};

export const clearParams = (router: NextRouter, isPushed = true) => {
  const query = router.query;
  Object.keys(query).forEach((key) => {
    queryParams.delete(key);
  });
  currentParams = [DEFAULT_GENRES_PARAMS];

  isPushed && router.push(DEFAULT_GENRES_PARAMS, undefined, { shallow: true });
};

export const generatesParamsString = ({ router, isElementSelected, type, selectedElement }: IGeneratesParamsString) => {
  const prevParams = router.query.slug;
  const prevGenreParam = prevParams?.[typeParamsIndex.genre];
  const prevCountryParam = prevParams?.[typeParamsIndex.countries];

  switch (type) {
    case 'genre':
      currentParams[typeParamsIndex.genre] =
        pathHandler({
          prevParams: prevGenreParam,
          selectedParam: selectedElement,
          isElementSelected,
          defaultParams: !!prevGenreParam?.includes(DEFAULT_GENRES_PARAMS),
        }) || DEFAULT_GENRES_PARAMS;
      break;
    case 'countries':
      currentParams[typeParamsIndex.countries] = pathHandler({
        prevParams: prevCountryParam,
        selectedParam: selectedElement,
        isElementSelected,
        defaultParams: false,
      });
      break;
    default:
      paramsHandler({
        selectedParam: selectedElement,
        type,
      });
  }
  const queryParamsString = queryParams.toString();

  router.push(
    `${prevParams ? '' : 'CatalogPage/'}${currentParams.join('/')}${queryParamsString ? '?' + queryParamsString : ''}`,
    undefined,
    {
      shallow: true,
    },
  );
};

export const getFilters = (router: NextRouter) => {
  return {
    genres:
      router.query.slug?.[typeParamsIndex.genre].split('+').filter((item) => item !== DEFAULT_GENRES_PARAMS) ?? [],
    countries: router.query.slug?.[typeParamsIndex.countries]?.split('+') ?? [],
    rating: router.query['rating'] ? +router.query['rating'] ?? 0 : null,
    votes: router.query['votes'] ? +(router.query['votes'] ?? 0) : null,
    director: !Array.isArray(router.query['director']) ? router.query['director'] ?? '' : null,
    actor: !Array.isArray(router.query['actor']) ? router.query['actor'] ?? '' : null,
  };
};
