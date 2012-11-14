seajs.config({
  alias: {
    'jquery': 'jquery/jquery.js'
  },
  preload: ["jquery"]
});

seajs.use('a.js');