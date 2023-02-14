import useResource from '../hooks/useResource';
import CookieStandForm from './CookieStandForm';
import CookieStandTable from './CookieStandTable'
import Header from "./Header";
import Footer from "./Footer";

export default function CookieStandAdmin({user, resources, deleteResource}) {

  // const { resources, deleteResource } = useResource();

  return (
      <>
          <Header user={user} />
          <CookieStandForm />
          <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
          <Footer stands={resources || []} deleteStand={deleteResource} />

      </>
  );
}