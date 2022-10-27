import { randomBytes } from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestEntity } from './entities/test.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly testRepository: Repository<TestEntity>,
  ) {}

  async getTest(id: string): Promise<TestEntity> {
    console.log('CALLED SERVICE GET');
    const result = await this.testRepository.findOne({ where: { id } });
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 3000);
    });
  }

  async createTest(): Promise<TestEntity> {
    console.log('CALLED SERVICE POST');
    const test = new TestEntity();
    test.id = randomBytes(6).toString('hex');
    test.version = Math.floor(Math.random() * 100);
    await this.testRepository.insert(test);
    return new Promise((resolve) => {
      setTimeout(() => resolve(test), 3000);
    });
  }
}
