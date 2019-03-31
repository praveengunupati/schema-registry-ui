import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltertopicComponent } from './altertopic.component';

describe('AltertopicComponent', () => {
  let component: AltertopicComponent;
  let fixture: ComponentFixture<AltertopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltertopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltertopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
