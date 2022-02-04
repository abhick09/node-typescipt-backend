import { Module } from '@nestjs/common';
import { ContactChannelService } from './contact-channel.service';
import { ContactChannelController } from './contact-channel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactChannel } from './entities/contact-channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactChannel])],
  controllers: [ContactChannelController],
  providers: [ContactChannelService],
})
export class ContactChannelModule {}
