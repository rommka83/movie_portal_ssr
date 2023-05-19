import React from 'react';
import { IPersonBackend } from 'shared/types/IPersonBackend';
import ActorPageWiget from 'widgets/ActorPageWiget';
import { getPerson } from 'shared/apiService';

export async function getServerSideProps(context: any) {
  try {
    const { id } = context.params;
    const actor = await getPerson(id);

    if (!actor) {
      return {
        notFound: true,
      };
    }

    return {
      props: { actor: actor },
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
