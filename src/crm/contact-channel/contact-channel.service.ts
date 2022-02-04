import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { DeleteResult, Repository } from 'typeorm';
import { ContactChannel } from './entities/contact-channel.entity'
import { createContactChannelDto } from './dto/create-contact-channel.dto'


@Injectable()
export class ContactChannelService {
  constructor(
    @InjectRepository(ContactChannel)
    private contactChannelEntity: Repository<ContactChannel>,
  ) {}

  async create(contact: createContactChannelDto): Promise<ContactChannel> {
    return await this.contactChannelEntity.save(contact);
  }

  async findAll(): Promise<ContactChannel[]> {
    return await this.contactChannelEntity.find({ relations: ["contact"]});
  }


  async findOne(id: number): Promise<ContactChannel> {
    return await this.contactChannelEntity.findOne(id,{ relations: ["contact"]});
  }

  async findwithUUID(uniqueIdentifier: string): Promise<ContactChannel> {
    return await this.contactChannelEntity.findOne(uniqueIdentifier,{ relations: ["contact"]});
  }

  async update(id: number, contact: ContactChannel) {
    return await this.contactChannelEntity.update(id, contact);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.contactChannelEntity.delete(id);
  }
}
