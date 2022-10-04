import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { NesttestModule } from './nesttest/nesttest.module';
import { LoggerService } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: '4231rl',
      database: 'nestjs',
      autoLoadEntities: true,
      synchronize : true,
    }),
    NesttestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
