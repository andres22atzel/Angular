import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimecharactersComponent } from './animecharacters.component';

describe('AnimecharactersComponent', () => {
  let component: AnimecharactersComponent;
  let fixture: ComponentFixture<AnimecharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimecharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimecharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
