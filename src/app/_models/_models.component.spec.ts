/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { _modelsComponent } from './_models.component';

describe('_modelsComponent', () => {
  let component: _modelsComponent;
  let fixture: ComponentFixture<_modelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ _modelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(_modelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
