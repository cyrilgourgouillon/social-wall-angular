import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallsListComponent } from './list.component';

describe('WallsListComponent', () => {
  let component: WallsListComponent;
  let fixture: ComponentFixture<WallsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
