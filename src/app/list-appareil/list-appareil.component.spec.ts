import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppareilComponent } from './list-appareil.component';

describe('ListAppareilComponent', () => {
  let component: ListAppareilComponent;
  let fixture: ComponentFixture<ListAppareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppareilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
