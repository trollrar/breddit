import {TestBed} from '@angular/core/testing';

import {PostCommentsService} from './post-comments.service';

describe('PostCommentService', () => {
    let service: PostCommentsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PostCommentsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
