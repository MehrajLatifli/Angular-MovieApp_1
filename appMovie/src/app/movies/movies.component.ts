import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieRepository } from '../Models/movieRepository';
import { Wishlist } from '../Models/wishlist';
import { WishlistRepository } from '../Models/wishlistRepository';
import { AlertifyService } from '../services/alertify-service.service';

// declare let alertify:any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private alertify: AlertifyService) {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();

    this.alerti=alertify;

    this.wishlistRepository_ = new WishlistRepository();
    this.wishlistArray_ = this.wishlistRepository_.getWishlist();


  }

  alerti:any;

  ngOnInit(): void {

    this.id=0;
  }

  wishlist_: Wishlist;
  wishlistArray_: Wishlist[];
  wishlistRepository_: WishlistRepository;

  movies: Movie[];
  movieRepository: MovieRepository;
  popularMovies: Movie[];

  title: string = "Movie list"

  filterText: string = '';
  filteredMovies: Movie[];

  OnInputChange() {
    this.filteredMovies = this.filterText
      ? this.movies.filter(
        (m: Movie) =>
          m.title.toLocaleLowerCase().indexOf(this.filterText) !== -1 ||
          m.description.toLocaleLowerCase().indexOf(this.filterText) !== -1
      )
      : this.movies;

    console.log(this.filteredMovies);
  }

  id:any;


  addtoList($event:any, item:Movie) {

    this.id+=1;

    if($event.target.classList.contains('btn-primary'))
    {
      $event.target.innerText=item.title+ " Remove from List";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

    //  alertify.success(item.title+ " Add to List");

    this.alerti.success(item.title);





    var wish: Wishlist={
      id: item.id,
      title:item.title,
      movieId:item.id,
      image:item.imageUrl
    };


    this.wishlistRepository_.AddWish(wish);

    }
    else{
      $event.target.innerText=item.title+ " Add to List";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

    //  alertify.warning(item.title+ " Remove from List");

    this.wishlistRepository_.RemoveWish(item);
    this.alerti.error(item.title);

    }

  }

}
