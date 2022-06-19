import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieRepository } from '../Models/movieRepository';
import { News } from '../Models/news';
import { NewsRepository } from '../Models/newsRepository';

import *as $ from "../../../../Jquery/node_modules/jquery"

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() {

    this.newsRepository = new NewsRepository();
    this.newsarray = this.newsRepository.getNews();

    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();


   }

   a:Movie[];

  ngOnInit(): void {

    this.a=    this.movies;



  }



  newsarray: News[];
  news:News;
  newsRepository: NewsRepository;

  movie: Movie;
  movies: Movie[];
  movieRepository: MovieRepository;

  getNewsById(id:any)
  {



      this.news=this.newsRepository.getNewsById(id);


  }

  counter(i: number) {
    console.log(i);
    return new Array(i);
}

deletetoList(item){

  this.newsarray.forEach((value,index)=>{
    if(value==item)
    {
      this.newsarray.splice(index,1);
    }
  });

}


  updateitem(item:any,title: any, author: any, movieId: any, createdDate: any) {

    this.id_=item.id;
    this.newsarray.forEach((value, index) => {

      if(value==item)
      {
      this.newsarray[index].title = title;
      this.newsarray[index].author = author;
      this.newsarray[index].movieId = movieId;
      this.newsarray[index].createdDate = createdDate;
    }
    });

  }

  id_:any;
  Additem(title: any, author: any, movieId: any, createdDate: any) {


    var news: News={

      id:this.id_,
      title:title,
      movieId:movieId,
      createdDate:createdDate,
      author:author
    };

    this.newsRepository.AddNews(news);




  }


}
