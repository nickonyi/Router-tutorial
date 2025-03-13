import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an expected error has occured!</p>
      <p>
        <i>{error.statusText || error.messages}</i>
      </p>
    </div>
  );
}
