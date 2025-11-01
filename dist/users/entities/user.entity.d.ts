import { UserProfile } from '../../user-profiles/entities/user-profile.entity';
import { FormFillRequest } from '../../form-fill-requests/entities/form-fill-request.entity';
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    isAdmin: boolean;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    profile: UserProfile;
    formFillRequests: FormFillRequest[];
}
