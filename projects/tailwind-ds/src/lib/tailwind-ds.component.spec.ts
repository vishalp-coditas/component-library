import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindDSComponent } from './tailwind-ds.component';

describe('TailwindDSComponent', () => {
  let component: TailwindDSComponent;
  let fixture: ComponentFixture<TailwindDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindDSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
