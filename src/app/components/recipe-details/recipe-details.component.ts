import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  URI: string;
  recipe: [];

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.URI = this.activatedRoute.snapshot.params.URI;
    this.api.getOne('?r=' + this.URI).subscribe(
      res => {
        console.log(res);
        this.recipe = res;
      }
    );
  }

}
