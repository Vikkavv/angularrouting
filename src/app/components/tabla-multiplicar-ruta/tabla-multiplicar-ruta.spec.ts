import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarRuta } from './tabla-multiplicar-ruta';

describe('TablaMultiplicarRuta', () => {
  let component: TablaMultiplicarRuta;
  let fixture: ComponentFixture<TablaMultiplicarRuta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarRuta],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarRuta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
