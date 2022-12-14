import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




/* <!-- <app-navi></app-navi> -->
<div class="container-fluid">
    <div class="row">
      <div class="col-md-3" style="margin-top: 20px;">
        <app-brand></app-brand>
       <!--  <app-color></app-color> -->
       <!--  <app-filter></app-filter> -->
        <div class="card" style="margin-bottom: 15px; margin-top: 20px;">
          <div class="card-header text-center" for="filterText">Araba Markası bul</div>
          <div class="card-body">
            <input type="text" class="form-control" id="filterText" placeholder="Arama ifadesi giriniz"> <!-- [(ngModel)]="filterText" (ngModelChange)="changeFilterTextSize(filterText)" -->
          </div>
        </div>
      </div>

      <div class="col-md-9">
        <div *ngIf="dataLoaded==false" class="spinner-border" role="status" style="margin-top: 35px; margin-left: 15px;">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div  *ngIf="dataLoaded==true" class="row" id="ads" >
          <div *ngFor="let car of cars" class="col-12 col-sm-11 col-md-9 col-lg-5 col-xl-4 ">
            <div class="card mb-4 mr-4">
              <div class="card rounded" >
                <div class="card-image">
                  <span class="card-notify-badge">Yeni</span>
                  <span class="card-notify-year"><!-- {{car.modelYear}} --></span>
                  <img class="img-fluid"  style="width: 100%;height: 173px;" /><!-- src="{{apiUrl}}{{car.imagePath}}" -->
                </div>
                <div class="card-image-overlay m-auto">
                  <span class="card-detail-badge">Sıfır</span>
                  <span class="card-detail-badge"><!-- {{car.dailyPrice}} --> <fa-icon [icon]="faLira"></fa-icon></span>
                  <span class="card-detail-badge"><!-- {{car.colorName}} --></span>
                </div>
                <div class="card-body text-center">
                  <div class="ad-title text-center">
                    <h5><!-- {{car.brandName}} {{car.modelName}} --></h5>
                  </div>
                  <button type="button"  class="ad-btn" style="border-radius: 80px; width: 50%"><!-- routerLink="/car/details/{{car.id}}" -->Detaylar</button>
                </div>
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div> */


