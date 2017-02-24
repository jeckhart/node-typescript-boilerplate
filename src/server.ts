'use strict';

// Load environment variables from file if present
import dotenv from 'dotenv';
dotenv.config({silent: true});

// Boot server
import app from './app';

const port = process.env.PORT || 3000;
app.set('port', port);

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + port);
}).on('error', err => {
  console.log('Cannot start server', err);
});