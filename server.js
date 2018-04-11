'use strict';

const Hapi = require('hapi');
const HapiReactViews = require('hapi-react-views');
const Vision = require('vision');

require('babel-core/register')({
  presets: ['react', 'env']
});

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.view('home');
  }
});

const init = async () => {
  await server.register(Vision);

  server.views({
    engines: {
      jsx: HapiReactViews
    },
    compileOptions: {}, // optional
    relativeTo: __dirname,
    path: 'views'
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
