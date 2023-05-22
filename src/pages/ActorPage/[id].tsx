import React from 'react';
import { IPersonBackend } from 'shared/types/IPersonBackend';
import ActorPageWiget from 'widgets/ActorPageWiget';
import { getPerson } from 'shared/apiService';

export async function getServerSideProps(context: any) {
  try {
    const { id } = context.params;
    const actor = await getPerson(id);

    return {
      props: { actor: actor },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

interface IProps {
  actor: IPersonBackend;
}

export default function ActorPage({ actor }: IProps) {
  return <ActorPageWiget actor={actor} />;
}
