import {User} from '../../../user/user.interface';

export interface Comment {
    content: string;
    from: User;
    fromId: number;
    id: number;
    postedAt: string;
    toId: number;
    updatedAt: string;
}
