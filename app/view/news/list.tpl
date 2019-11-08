<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="/news/1">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>