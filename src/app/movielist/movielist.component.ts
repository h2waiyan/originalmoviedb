import { Component, Input } from '@angular/core';
import { Result } from 'src/interface/movieresult';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  @Input() category: string = '';
  @Input() movieList: Result[] = [];
}
