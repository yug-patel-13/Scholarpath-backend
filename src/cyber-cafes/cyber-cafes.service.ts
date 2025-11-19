import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CyberCafe } from './entities/cyber-cafe.entity';

@Injectable()
export class CyberCafesService {
  constructor(
    @InjectRepository(CyberCafe)
    private cyberCafeRepository: Repository<CyberCafe>,
  ) {}

  async findAll(): Promise<CyberCafe[]> {
    return this.cyberCafeRepository.find({
      where: { isActive: true },
      order: { rating: 'DESC' },
    });
  }

  async findOne(id: number): Promise<CyberCafe | null> {
    return this.cyberCafeRepository.findOne({ where: { id } });
  }

  async findNearest(latitude: number, longitude: number, limit: number = 10): Promise<CyberCafe[]> {
    const cafes = await this.cyberCafeRepository.find({
      where: { isActive: true },
    });

    // Calculate distance using Haversine formula
    const cafesWithDistance = cafes.map((cafe) => {
      const distance = this.calculateDistance(
        latitude,
        longitude,
        cafe.latitude,
        cafe.longitude,
      );
      return { ...cafe, distance };
    });

    // Sort by distance and return top results
    return cafesWithDistance
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit)
      .map(({ distance, ...cafe }) => cafe as CyberCafe);
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the Earth in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}





