import Header from "./Header"
export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
    <>
    <Header/>
      <form className="w-1/2 p-8 mx-auto my-16 text-center bg-cyan-200 rounded-md"onSubmit={handleSubmit}>
          <fieldset autoComplete='off'>
              <legend>Log In</legend>
              <label className="pt-8" htmlFor="username">Username</label>
              <input className="w-3/4 p-2 mt-2 rounded-m" name="username" type="username" placeholder="user name" />
              <label className="pt-8" htmlFor="password">Password</label>
              <input className="w-3/4 p-2 mt-2 rounded-m" type="password" name="password" placeholder="password" />
              <button className="block w-full p-4 mx-auto mt-12 rounded bg-cyan-500">Log In</button>
          </fieldset>
      </form>
      </>
  );
}