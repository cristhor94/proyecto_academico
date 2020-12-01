import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoriaComponent } from './monitoria.component';

describe('MonitoriaComponent', () => {
  let component: MonitoriaComponent;
  let fixture: ComponentFixture<MonitoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
