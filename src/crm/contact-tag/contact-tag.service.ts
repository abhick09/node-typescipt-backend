import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ContactTag } from './entities/contact-tag.entity'
import { createContactTagDto } from './dto/create-contact-tag.dto'

@Injectable()
export class ContactTagService {
  constructor(
    @InjectRepository(ContactTag)
    private contactTagEntity: Repository<ContactTag>,
  ) {}

  async create(contact: createContactTagDto): Promise<ContactTag> {
    return await this.contactTagEntity.save(contact);
  }

  async findAll(): Promise<ContactTag[]> {
    return await this.contactTagEntity.find();
  }

  async findOne(id: number): Promise<ContactTag> {
    return await this.contactTagEntity.findOne(id);
  }

  async update(id: number, contact: ContactTag) {
    return await this.contactTagEntity.update(id, contact);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.contactTagEntity.delete(id);
  }
}
