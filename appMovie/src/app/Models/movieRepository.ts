import { Movie } from './movie';
export class MovieRepository{
  private movies:Movie[];

  constructor(){

    this.movies=[

      {id:1, title:"High Life", description:`High Life description`, imageUrl:"../../../assets/Images/1.png", isPopular: true, datePublished: new Date(1992,10,10)},

      {id:2, title:"billboard", description:`billboard description`, imageUrl:"../../../assets/Images/2.png", isPopular: false, datePublished: new Date(1993,11,11)},

      {id:3, title:"Storm boy", description:`Storm boy description`, imageUrl:"../../../assets/Images/3.png", isPopular: true, datePublished: new Date(1994,12,15)},

      {id:4, title:"I Kill Giants", description:`I Kill Giants description`, imageUrl:"../../../assets/Images/4.jpg", isPopular: false, datePublished: new Date(1995,1,6)},

      {id:5, title:"Black Panther", description:`Black Panther description`, imageUrl:"../../../assets/Images/5.jpg", isPopular: true, datePublished: new Date(1996,2,20)},

      {id:6, title:"Ferdinant", description:`Ferdinant description`, imageUrl:"../../../assets/Images/6.jpg", isPopular: false, datePublished: new Date(1997,4,10)},

      {id:7, title:"Jules Verne's 20000 leagues under the sea", description:`Jules Verne's 20000 leagues under the sea description`, imageUrl:"../../../assets/Images/7.jpg", isPopular: false, datePublished: new Date(1990,10,10)},

      {id:8, title:"Carmel Myers in a Broadway Scandal", description:`Carmel Myers in a Broadway Scandal description`, imageUrl:"../../../assets/Images/8.jpg", isPopular: false, datePublished: new Date(1990,10,10)}

      ]
  }

  getMovies():Movie[]{
    return this.movies
  }

  getPopularMovies():Movie[]{
    return this.movies.filter(i=>i.isPopular)
  }

  getMoviesById(id:number):Movie| undefined{
    return this.movies.find(m=>m.id==id);
  }
}
