import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommentFormComponent} from './comment-form.component';

describe('PostCommentFormComponent', () => {
    let component: CommentFormComponent;
    let fixture: ComponentFixture<CommentFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
