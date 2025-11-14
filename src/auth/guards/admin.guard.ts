import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      throw new ForbiddenException('No token provided');
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: this.configService.get<string>('JWT_SECRET') || 'your-secret-key-change-in-production',
      });

      if (!payload.isAdmin) {
        throw new ForbiddenException('Admin access required');
      }

      request.user = payload;
      return true;
    } catch (error) {
      throw new ForbiddenException('Invalid token or not an admin');
    }
  }
}



