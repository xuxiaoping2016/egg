const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    // const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    // const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
    //   data: {
    //     orderBy: '"$key"',
    //     startAt: `"${pageSize * (page - 1)}"`,
    //     endAt: `"${pageSize * page - 1}"`,
    //   },
    //   dataType: 'json',
    // });

    // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   })
    // );

    // return newsList.map(res => res.data);


      // /in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10
        const { url, pageSize } = this.config.news;

        // use build-in http client to GET hacker-news api
        const data = await this.ctx.curl(`${url}/in_theaters`, {
            data: {
                apikey: '0df993c66c0c636e29ecbb5344252a4a',
                start: 0,
                count:pageSize,
            },
            dataType: 'json'
        });
        return data.data.subjects;
  }
}

module.exports = NewsService;