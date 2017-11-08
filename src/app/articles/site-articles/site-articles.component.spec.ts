import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteArticlesComponent } from './site-articles.component';

describe('SiteArticlesComponent', () => {
  let component: SiteArticlesComponent;
  let fixture: ComponentFixture<SiteArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
