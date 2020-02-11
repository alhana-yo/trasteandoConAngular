import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDirectivasComponent } from './example-directivas.component';

describe('ExampleDirectivasComponent', () => {
  let component: ExampleDirectivasComponent;
  let fixture: ComponentFixture<ExampleDirectivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDirectivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
