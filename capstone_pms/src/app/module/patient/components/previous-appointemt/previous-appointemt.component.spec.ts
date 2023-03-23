import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAppointemtComponent } from './previous-appointemt.component';

describe('PreviousAppointemtComponent', () => {
  let component: PreviousAppointemtComponent;
  let fixture: ComponentFixture<PreviousAppointemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousAppointemtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousAppointemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
