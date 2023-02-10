import useResource from '../hooks/useResource';
import CookieStandForm from './CookieStandForm';
import CookieStandTable from './CookieStandTable'

export default function CookieStandAdmin() {

  const { resources, deleteResource } = useResource();

  return (
      <>
          <CookieStandForm />
          <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
      </>
  );
}