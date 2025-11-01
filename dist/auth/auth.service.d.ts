import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            name: any;
            isAdmin: any;
        };
    }>;
    register(registerDto: RegisterDto): Promise<{
        id: number;
        email: string;
        name: string;
        isAdmin: boolean;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        profile: import("../user-profiles/entities/user-profile.entity").UserProfile;
        formFillRequests: import("../form-fill-requests/entities/form-fill-request.entity").FormFillRequest[];
    }>;
}
