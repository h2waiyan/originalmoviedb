import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscription, firstValueFrom, lastValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { Movie, Result } from 'src/interface/movieresult';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) { }

  movieSub: Subscription = new Subscription();

  popularMovieList: Result[] = [];
  nowplyaingMovieList: Result[] = [];
  upcomingMovieList: Result[] = [];
  topratedMovieList: Result[] = [];

  ngOnInit() {
    this.getPopularMovie();
    this.getNowPlayingMovie();
    this.getUpcomingMovie();
    this.getTopRatedMovie();
  }

  getMovie() {
    return new Promise((resolve) => {
      var result = this.apiService.getMovies('popular'); // get -> Observable
      this.movieSub = result.subscribe({
        next: (response: any) => {
          this.popularMovieList = response['results']
          console.log(response['results']);
          resolve(true)
        },
        error: (error) => {
          console.log(error);
          resolve(false)
        }
      })
    })
  }

  getPopularMovie() {
    var result = this.apiService.getMovies('popular'); // get -> Observable

    console.log(result);
    this.movieSub = result.subscribe({
      next: (response: Movie) => {
        console.log(response);
        this.popularMovieList = response.results!;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  getNowPlayingMovie(): void {
    var result = this.apiService.getMovies('now_playing'); // get -> Observable

    console.log(result);
    this.movieSub = result.subscribe({
      next: (response: Movie) => {
        console.log(response);
        this.nowplyaingMovieList = response.results!;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  getTopRatedMovie() {
    var result = this.apiService.getMovies('top_rated'); // get -> Observable

    console.log(result);
    this.movieSub = result.subscribe({
      next: (response: Movie) => {
        console.log(response);
        this.topratedMovieList = response.results!;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  getUpcomingMovie() {
    var result = this.apiService.getMovies('upcoming'); // get -> Observable

    console.log(result);
    this.movieSub = result.subscribe({
      next: (response: Movie) => {
        console.log(response);
        this.upcomingMovieList = response.results!;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  gotodetails(movieid: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        'overview': "hello"
      }
    };
    this.router.navigate([`details/${movieid}`]);
  }

  ngOnDestroy() {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }
  }
}
