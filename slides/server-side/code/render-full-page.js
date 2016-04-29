function renderFullPage({ html = '', initialState = {} }) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Look ma! Server Side Rendering!</title>
        <link rel="stylesheet" href="/build/bundle.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
    `;
}
