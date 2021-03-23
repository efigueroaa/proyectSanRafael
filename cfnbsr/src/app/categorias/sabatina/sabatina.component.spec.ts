import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SabatinaComponent } from './sabatina.component';

describe('SabatinaComponent', () => {
  let component: SabatinaComponent;
  let fixture: ComponentFixture<SabatinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabatinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SabatinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
