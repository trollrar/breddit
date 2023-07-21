import {User} from '../user/user.interface';

export type PostsFilter = 'hot' | 'fresh';

export interface Post {
    id: number;
    content: string;
    title: string;
    score: number;
    postedAt: string;
    from: User;
}
