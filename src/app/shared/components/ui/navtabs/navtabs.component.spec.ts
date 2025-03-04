import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtabsComponent } from './navtabs.component';

describe('NavtabsComponent', () => {
  let component: NavtabsComponent;
  let fixture: ComponentFixture<NavtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavtabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
