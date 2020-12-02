import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebatecnicaComponent } from './pruebatecnica.component';

describe('PruebatecnicaComponent', () => {
  let component: PruebatecnicaComponent;
  let fixture: ComponentFixture<PruebatecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebatecnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebatecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
