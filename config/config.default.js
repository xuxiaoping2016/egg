exports.keys = 'abcdefg';

// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.middleware = [
  'robot',
  'gzip'
];

exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};

exports.gzip = {
  threshold : 1000
}