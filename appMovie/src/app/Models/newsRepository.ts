import { News } from './news';
export class NewsRepository{
  private news:News[];

  constructor(){

    this.news=[

      {id:1, title:"High Life", author:"Mehraj", createdDate: new Date(1992,10,10), movieId:4},
      {id:2, title:"High Life", author:"Mehraj", createdDate: new Date(1992,10,10), movieId:1},

      ]
  }

  getNews():News[]{
    return this.news
  }

  getNewsById(id:number):News| undefined{
    return this.news.find(m=>m.id==id);
  }

  AddNews(news)
  {

    this.news.push(news);
  }

}
