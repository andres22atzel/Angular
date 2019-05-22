import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImagesNatureComponent } from './grid-images-nature.component';

describe('GridImagesNatureComponent', () => {
  let component: GridImagesNatureComponent;
  let fixture: ComponentFixture<GridImagesNatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridImagesNatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridImagesNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
