import { async, TestBed } from '@angular/core/testing';
import { FieldGridComponent } from './field-grid.component';
import { MdGridList } from "@angular/material";
describe('FieldGridComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FieldGridComponent, MdGridList]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FieldGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/app/field-grid/field-grid.component.spec.js.map