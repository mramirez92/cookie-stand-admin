export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form onSubmit={handleSubmit}>
          <fieldset autoComplete='off'>
              <legend>Log In</legend>
              <label htmlFor="username">Username</label>
              <input name="username" type="text" placeholder="user name" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
              <button className="block w-full p-4 mx-auto mt-12 rounded bg-cyan-500">Log In</button>
          </fieldset>
      </form>
  );
}