### Install typeorm

```
yarn add typeorm
```

### Instal typeorm nestjs wrapper

```
yarn add @nestjs/typeorm
```

### Install postgress library

```
yarn add pg
```

### Config for TypeOrm

    - Creating in src/config/typeorm.config.ts

```
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: 'mediumclone',
  database: 'mediumclone',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};

```

### Adding TypeOrmModule in app.module.ts

```
@Module({
  imports: [TagModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```
