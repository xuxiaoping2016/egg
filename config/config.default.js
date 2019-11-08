exports.keys = 'abcdefg';

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
  url:'http://api.douban.com/v2/movie'
};