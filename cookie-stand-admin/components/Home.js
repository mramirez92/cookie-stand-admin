import LoginForm from "./LoginForm"
import CookieStandAdmin from "./CookieStandAdmin"
import Head from './Head';


export default function Home() {

  const { user, login } = useAuth();

  return (
      <div className="p-4">
          <Head/>
          {user ?
              <CookieStandAdmin />
              :
              <LoginForm onLogin={login} />
          }

      </div>
  );
}