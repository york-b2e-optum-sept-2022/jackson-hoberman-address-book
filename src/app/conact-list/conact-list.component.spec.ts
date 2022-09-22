import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConactListComponent } from './conact-list.component';

describe('ConactListComponent', () => {
  let component: ConactListComponent;
  let fixture: ComponentFixture<ConactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConactListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
