import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getContacts, createContact } from '../contact';

async function loader() {
  const contacts = await getContacts();
  return contacts;
}
console.log(createContact());

console.log(loader());

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React router contacts</h1>
        <div>
          <form role="search" id="search-form">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
