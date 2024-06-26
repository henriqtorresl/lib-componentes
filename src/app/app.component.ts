import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MultiselectAutocompleteComponent } from './components/multiselect-autocomplete/multiselect-autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    MultiselectAutocompleteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];
  selectedOptions: string[] = [];

  constructor() {}
 
  ngOnInit() {
  }

  updateForm(values: any) {
    this.selectedOptions = values;
  }

}