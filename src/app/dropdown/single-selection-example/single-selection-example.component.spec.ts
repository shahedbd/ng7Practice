import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionExampleComponent } from './single-selection-example.component';

describe('SingleSelectionExampleComponent', () => {
  let component: SingleSelectionExampleComponent;
  let fixture: ComponentFixture<SingleSelectionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectionExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
