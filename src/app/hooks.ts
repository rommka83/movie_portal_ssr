// Цель приведенного выше кода — использовать useAppDispatch и useAppSelector вместо обычных useDispatch и useSelector. Для лучшей типизации.

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
