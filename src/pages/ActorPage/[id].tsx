import React, { useEffect, useState } from 'react';
import styles from './actorpage.module.css';
import { IActorFilms } from 'shared/types/IActorFilms';
import { ActorTabs } from 'features/ActorTabs/ActorTabs';
import { PersonHeader } from 'shared/bisnes/PersonHeader';
import { FilmographyItem } from 'entities/FilmographyItem';
import Back from 'shared/ui/Back';
import declension from '../../entities/ActorPageLib/lib/helpers/declension ';
import { useTranslation } from '../../i18n';
import axios from 'axios';
import { IPersonBackend } from 'shared/types/IPersonBackend';
import ActorPageWiget from 'widgets/ActorPageWiget';

export async function getServerSideProps(context: any) {
  try {
    const { id } = context.params;
    const actor = await axios.get(`https://api.kinopoisk.dev/v1/person/${id}`, {
      headers: {
        Accept: 'application/json',
        // 'X-API-KEY': 'WK12G32-AS5MC31-G3YD6BS-R9FN48S',
        // 'X-API-KEY': 'PZQK66P-MP6MTV9-MMNQB95-S4P3NH9',
        'X-API-KEY': 'DMGDYW0-0FC4Z7T-N7R9K0N-HFPEH3J',
      },
    });

    if (!actor) {
      return {
        notFound: true,
      };
    }

    return {
      props: { actor: actor.data },
    };
  } catch {
    return {
      props: { actor: null },
    };
  }
}

interface IProps {
  actor: IPersonBackend;
}

export default function ActorPage({ actor }: IProps) {
  return actor ? <ActorPageWiget actor={actor} /> : null;
}
