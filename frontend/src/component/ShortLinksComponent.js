import React from 'react';

const ShortLinksComponent = ({shortLinks}) => {
  return (
    <div className='col-md-10'>
      <table className='ms-2 table table-striped table-bordered table-responsive table-hover text-center'>
        <thead>
          <tr>
            <th>web</th>
            <th>android</th>
            <th>ios</th>
          </tr>
        </thead>
        <tbody>
          {shortLinks.length > 0 ? (
            shortLinks.map((shortLink) => (
              <tr key={shortLink.slug}>
                <td>
                  <a href={shortLink.android.primary}>{shortLink.web}</a>
                </td>
                <td>
                  <a
                    title={shortLink.android.primary}
                    href={shortLink.android.primary}>
                    {shortLink.android.fallback}
                  </a>
                </td>
                <td>
                  <a href={shortLink.ios.primary}>{shortLink.ios.fallback}</a>
                </td>
              </tr>
            ))
          ) : (
            <tr className='alert alert-danger '>
              <td className='text-danger' colSpan={3}>
                No short links found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShortLinksComponent;
