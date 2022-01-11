import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheeDetailsComponent } from './tachee-details.component';

describe('TacheeDetailsComponent', () => {
  let component: TacheeDetailsComponent;
  let fixture: ComponentFixture<TacheeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
