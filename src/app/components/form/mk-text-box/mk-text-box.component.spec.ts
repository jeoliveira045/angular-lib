import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkTextBoxComponent } from './mk-text-box.component';

describe('InputComponent', () => {
  let component: MkTextBoxComponent;
  let fixture: ComponentFixture<MkTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MkTextBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MkTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
