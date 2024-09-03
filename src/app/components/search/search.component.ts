import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatModule } from '../../appModule/mat.module';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  enteredSearchValue: string = '';


  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
