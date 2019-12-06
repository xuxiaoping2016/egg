const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news;
    // const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
    //   data: {
    //     orderBy: '"$key"',
    //     startAt: `"${pageSize * (page - 1)}"`,
    //     endAt: `"${pageSize * page - 1}"`,
    //   },
    //   dataType: 'json',
    // });

    const idList = ['','','']
    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        // const url = `${serverUrl}/item/${idList[key]}.json`;
        // return this.ctx.curl(url, { dataType: 'json' });
        return {
            data:{"by":"ChuckMcM","descendants":82,"id":21707799,"kids":[21708232,21707912,21708078,21709587,21709250,21709608,21708249,21708343,21708193,21709284,21708284,21708368],"score":148,"time":1575497761,"title":"Coming Soon: AWS Graviton2 Processor for AWS","type":"story","url":"https://aws.amazon.com/blogs/aws/coming-soon-graviton2-powered-general-purpose-compute-optimized-memory-optimized-ec2-instances/?sc_channel=sm&sc_campaign=launch_reInvent&sc_publisher=TWITTER&sc_country=Global&sc_outcome=awareness&trk=AWS_reInvent_2019_launch__TWITTER&sc_content=AWS_reInvent_2019_launch_&linkId=78151855"}   
        };
      })
    );
    return newsList.map(res => res.data);
  }
}

module.exports = NewsService;