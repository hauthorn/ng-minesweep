/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MdToolbar, MdToolbarRow, MdGridList } from "@angular/material";
import { FieldGridComponent } from "./field-grid/field-grid.component";
describe('AppComponent', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MdToolbar,
                MdToolbarRow,
                FieldGridComponent,
                MdGridList
            ],
        });
        TestBed.compileComponents();
    });
    it('should create the app', async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should create a field grid', async(function () {
        var fixture = TestBed.createComponent(AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.fieldgrid).toBeDefined();
    }));
});
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/app/app.component.spec.js.map