import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkDateBoxComponent } from './mk-date-box.component';

describe('MkDateBoxComponent', () => {
  let component: MkDateBoxComponent;
  let fixture: ComponentFixture<MkDateBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MkDateBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MkDateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
