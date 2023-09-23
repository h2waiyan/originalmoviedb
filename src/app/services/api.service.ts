import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://api.themoviedb.org/3/movie/";
  apiKey: string = "050c28541f900007285c3020069bfd62";
  // https://api.themoviedb.org/3/movie/-------?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=2
  loginUrl: string = 'https://msi.htoowaiyan.com/api/v1/users/signin';

  options = {
    headers: new HttpHeaders({
      'Accept': 'text/html,application/json',
      'Content-Type': 'application/json',
    }),
  };

  getMovies(category: string) {
    return this.http.get(`${this.baseUrl}${category}?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  login(userdata: any) {
    return this.http.post(this.loginUrl, userdata, this.options)
  }



}
