import { async, TestBed } from '@angular/core/testing';
import { AiBoxComponent } from './ai-box.component';
describe('AiBoxComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AiBoxComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AiBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/CHauthorn/Code/ng-minesweep/src/app/ai-box/ai-box.component.spec.js.map