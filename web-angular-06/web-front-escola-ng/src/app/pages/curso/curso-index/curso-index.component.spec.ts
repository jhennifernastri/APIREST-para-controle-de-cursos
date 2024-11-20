import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoIndexComponent } from './curso-index.component';

describe('CursoIndexComponent', () => {
  let component: CursoIndexComponent;
  let fixture: ComponentFixture<CursoIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoIndexComponent]
    });
    fixture = TestBed.createComponent(CursoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
