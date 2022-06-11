import React, {useState} from 'react';

const UrlComponent = ({createShortUrl}) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createShortUrl(url);
    setUrl('');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='my-4 d-flex justify-content-center align-items-center'>
        <div className=' col-md-6 d-flex'>
          <input
            value={url}
            className='form-control me-2'
            required
            placeholder='Url'
            type='url'
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className='btn btn-primary' type='submit'>
            Shrink
          </button>
        </div>
      </form>
    </>
  );
};

export default UrlComponent;
