import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoCreatComponent } from './curso-creat.component';

describe('CursoCreatComponent', () => {
  let component: CursoCreatComponent;
  let fixture: ComponentFixture<CursoCreatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoCreatComponent]
    });
    fixture = TestBed.createComponent(CursoCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
