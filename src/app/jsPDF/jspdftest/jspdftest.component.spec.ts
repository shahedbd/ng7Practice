import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JspdftestComponent } from './jspdftest.component';

describe('JspdftestComponent', () => {
  let component: JspdftestComponent;
  let fixture: ComponentFixture<JspdftestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JspdftestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JspdftestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
