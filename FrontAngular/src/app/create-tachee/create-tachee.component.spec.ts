import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTacheeComponent } from './create-tachee.component';

describe('CreateTacheeComponent', () => {
  let component: CreateTacheeComponent;
  let fixture: ComponentFixture<CreateTacheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTacheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
