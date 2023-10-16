import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';

const entitiesPaths = [join(__dirname, '**', '*.entity.{js,ts}')];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'blog',
      entities: entitiesPaths,
      synchronize: true,
      autoLoadEntities: true,
    }),
    PostsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
