import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Post, PostsFilter} from '../post.interface';
import {PostsService} from '../posts.service';

const filterMap: Record<PostsFilter, string> = {
    fresh: 'Freshly baked',
    hot: 'Hot',
};

@Component({
  selector: 'bread-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
    public posts: Post[] = [];
    public loading: boolean = false;
    public filterText: string = 'Freshly baked';
    public filter: 'hot' | 'fresh' = 'hot';
    private paramsSubscription: Subscription;

    constructor (
        private postsService: PostsService,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    public ngOnInit (): void {
        this.parseQueryParams(this.route.snapshot.queryParams);

        this.paramsSubscription = this.route.queryParams.subscribe((params: Params): void => {
            this.parseQueryParams(params);
            this.loadPosts();
        });
    }

    public ngOnDestroy (): void {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }

    public filterChanged (filter: PostsFilter): void {
        this.router.navigate(['./'], {
            relativeTo: this.route,
            queryParams: {
                ...this.route.snapshot.queryParams,
                filter,
            },
        });
    }

    private loadPosts (): void {
        this.loading = true;
        this.paramsSubscription = this.postsService.getPostList(this.filter)
            .subscribe((posts: Post[]) => {
                this.posts = posts;
                this.loading = false;
            });
    }

    private parseQueryParams (params: Params): void {
        const queryFilter: PostsFilter | undefined = params.filter || 'hot';
        this.filter = queryFilter;
        this.filterText = filterMap[queryFilter];
    }
}
