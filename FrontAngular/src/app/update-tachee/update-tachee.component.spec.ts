import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTacheeComponent } from './update-tachee.component';

describe('UpdateTacheeComponent', () => {
  let component: UpdateTacheeComponent;
  let fixture: ComponentFixture<UpdateTacheeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTacheeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
