import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  isLoading = true;
  submitted: boolean;
  found: boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });
    this.getfeatured();
  }

    get f() {
    return this.searchForm.controls;
  }

  search() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.api.search('?q=' + this.searchForm.get('search').value).subscribe(
      res => {
        console.log(res.count);
        if (res.count === 0) {
          this.found = false;
          this.recipes = null;
        } else {
          this.found = true;
          this.recipes = res.hits;
          console.log(this.recipes);
        }
      }
    );
  }

  details(ID: string) {
    console.log(ID);
    const URI = encodeURIComponent(ID);
    this.router.navigate([`recipes/${URI}`]);
  }

  getfeatured() {
    const URI = encodeURIComponent('http://www.edamam.com/ontologies/edamam.owl#recipe_69468029a49db238f0e2b4e479067e21');
    // console.log(URI);
    this.api.getOne('?r=' + URI).subscribe(
      res => {
        console.log(res);
        this.isLoading = false;
        this.featured = res;
    });
  }

}
