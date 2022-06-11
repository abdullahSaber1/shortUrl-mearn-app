import {useEffect, useState} from 'react';
import {getShortLinks, addShortUrl} from './api/shortUrl';
import {ShortLinksComponent, UrlComponent} from './component';

function App() {
  const [shortLinks, setShortLinks] = useState([]);
  const getData = async () => {
    const response = await getShortLinks();
    setShortLinks(response);
  };

  const createShortUrl = async (url) => {
    const response = await addShortUrl(url);
    setShortLinks((currentList) => [...currentList, response]);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='text-center my-5'>
      <h1 className='text-primary fw-bold fs-1 my-5'>URL Shrinker</h1>

      <main className='container '>
        <UrlComponent createShortUrl={createShortUrl} />
        <ShortLinksComponent shortLinks={shortLinks} />
      </main>
    </div>
  );
}

export default App;
