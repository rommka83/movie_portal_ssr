import { addTip } from './tipsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { TFuncKey, t } from 'i18next';
export const onExtraReducersRejected = ({ title, text }: { title: TFuncKey; text: TFuncKey }) => {
  return addTip({ id: nanoid(), title: t(title), text: t(text), type: 'error' });
};
