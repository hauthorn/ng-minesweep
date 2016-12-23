/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FieldGridComponent } from './field-grid.component';
import {MdGridList} from "@angular/material";

describe('FieldGridComponent', () => {
  let component: FieldGridComponent;
  let fixture: ComponentFixture<FieldGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldGridComponent, MdGridList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
