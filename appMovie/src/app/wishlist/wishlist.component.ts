import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieRepository } from '../Models/movieRepository';
import { Wishlist } from '../Models/wishlist';
import { WishlistRepository } from '../Models/wishlistRepository';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() {
    this.wishlistRepository = new WishlistRepository();
    this.wishlistArray = this.wishlistRepository.getWishlist();

    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
  }

  ngOnInit(): void {
  }

  movie: Movie;
  movies: Movie[];
  movieRepository: MovieRepository;

  wishlis: Wishlist;
  wishlistArray: Wishlist[];
  wishlistRepository: WishlistRepository;

}
