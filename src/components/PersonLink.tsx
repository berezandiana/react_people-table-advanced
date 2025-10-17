import { Link, useSearchParams } from 'react-router-dom';
import cn from 'classnames';

import { Person } from '../types';

type Props = {
  personName: string | null;
  people: Person[];
};

export const PersonLink: React.FC<Props> = ({ personName, people }) => {
  const [searchParams] = useSearchParams();

  if (!personName) {
    return <>-</>;
  }

  const person = people.find(p => p.name === personName);

  if (!person) {
    return <>{personName}</>;
  }

  return (
    <Link
      to={{
        pathname: `/people/${person.slug}`,
        search: searchParams.toString(),
      }}
      className={cn({ 'has-text-danger': person.sex === 'f' })}
      data-cy="personLink"
    >
      {person.name}
    </Link>
  );
};
