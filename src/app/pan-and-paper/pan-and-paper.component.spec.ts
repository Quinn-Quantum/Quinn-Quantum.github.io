import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanAndPaperComponent } from './pan-and-paper.component';

describe('PanAndPaperComponent', () => {
  let component: PanAndPaperComponent;
  let fixture: ComponentFixture<PanAndPaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanAndPaperComponent]
    });
    fixture = TestBed.createComponent(PanAndPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
