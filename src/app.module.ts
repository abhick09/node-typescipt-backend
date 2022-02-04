import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantModule } from './bussiness/tenant/tenant.module';
import { ConfigModule } from '@nestjs/config';
import { ChannelModule } from './bussiness/channel/channel.module';
import { ContactModule } from './crm/contact/contact.module';
import { ContactChannelModule } from './crm/contact-channel/contact-channel.module';
import { ContactTagModule } from './crm/contact-tag/contact-tag.module';



@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    autoLoadEntities: true,
    logging : false,
  }), TenantModule, ChannelModule, ContactModule, ContactChannelModule, ContactTagModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule { }
