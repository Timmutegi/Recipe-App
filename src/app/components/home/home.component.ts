import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  featured: [];
  recipes: [];

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
    this.getfeatured();
  }

  search() {
    // console.log('?q=' + this.searchForm.get('search').value);
    this.api.search('?q=' + this.searchForm.get('search').value).subscribe(
      res => {
        // console.log(res);
        this.recipes = res.hits;
        console.log(this.recipes);
      }
    );
  }

  details(ID: string) {
    console.log(ID);
    const URI = encodeURIComponent(ID);
    this.router.navigate([`recipes/${URI}`]);
  }

  getfeatured() {
    const URI = 'http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408';
    console.log(URI);
    this.api.getOne('?r=' + URI).subscribe(
      res => {
        console.log(res);
        this.featured = res;
    });

  }

}
