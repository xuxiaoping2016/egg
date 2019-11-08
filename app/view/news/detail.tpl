<html>
  <head>
    <title{{title}}</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <h2>{{ title }}- {{id}}</h2>
    <p>作者：{{ author }}  日期：{{ helper.relativeTime(date) }}</p>
    <div>{{ content }}</div>
  </body>
</html>