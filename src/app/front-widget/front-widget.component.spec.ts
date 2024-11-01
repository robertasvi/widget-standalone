import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontWidgetComponent } from './front-widget.component';

describe('FrontWidgetComponent', () => {
  let component: FrontWidgetComponent;
  let fixture: ComponentFixture<FrontWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
