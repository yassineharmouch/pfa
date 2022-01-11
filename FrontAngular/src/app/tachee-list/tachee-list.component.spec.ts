import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheeListComponent } from './tachee-list.component';

describe('TacheeListComponent', () => {
  let component: TacheeListComponent;
  let fixture: ComponentFixture<TacheeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
