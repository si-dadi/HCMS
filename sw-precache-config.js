module.exports = {
    runtimeCaching: [
      {
        urlPattern: /<the route to ignore>/,
        handler: 'networkOnly'
      }
    ]
  };