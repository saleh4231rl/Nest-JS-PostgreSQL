import { Module } from '@nestjs/common';
import { NesttestController } from './nesttest.controller';
import { NesttestService } from './nesttest.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { NesttestRepository } from './nesttest.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([NesttestRepository])
  ],
  controllers: [NesttestController],
  providers: [NesttestService]
})
export class NesttestModule {}
