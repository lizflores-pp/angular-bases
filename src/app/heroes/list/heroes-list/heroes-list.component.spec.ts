import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroresListComponent } from './heroes-list.component';

describe('HeroresListComponent', () => {
  let component: HeroresListComponent;
  let fixture: ComponentFixture<HeroresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroresListComponent]
    });
    fixture = TestBed.createComponent(HeroresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
