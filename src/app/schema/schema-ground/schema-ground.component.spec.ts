import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaGroundComponent } from './schema-ground.component';

describe('SchemaGroundComponent', () => {
  let component: SchemaGroundComponent;
  let fixture: ComponentFixture<SchemaGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
