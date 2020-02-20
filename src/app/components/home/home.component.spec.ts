import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const apiService = {
    getOne: () => {},

  };
  const getOne = {
    subscribe: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        {provide: HttpClient},
        {provide: ApiService, useValue: apiService},
        {provide: HttpHandler},
        {provide: Router, useClass: class {navigate = jasmine.createSpy('navigate'); }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   // expect(component).toBeTruthy();
  //   spyOn(apiService, 'getOne').and.returnValue();
  //   expect(apiService.getOne).toHaveBeenCalled();
  //   spyOn(getOne, 'subscribe').and.returnValue();
  //   expect(getOne.subscribe).toHaveBeenCalled();

  // });
});
