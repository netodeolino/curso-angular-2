import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroFacilComponent } from './meu-primeiro-facil.component';

describe('MeuPrimeiroFacilComponent', () => {
  let component: MeuPrimeiroFacilComponent;
  let fixture: ComponentFixture<MeuPrimeiroFacilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroFacilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroFacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
