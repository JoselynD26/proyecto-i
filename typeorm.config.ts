import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'mydatabase',
  entities: [__dirname + '/**/*.entity.{js,ts}'], // Ruta donde se encuentran tus entidades
  synchronize: true, // Sincroniza automáticamente el esquema de la base de datos
};

export default config;
