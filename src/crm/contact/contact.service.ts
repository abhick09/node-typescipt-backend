import { createContactDto } from './dto/create-contact.dto'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Contact } from './entities/contact.entity'

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact) private contactEntity: Repository<Contact>,
  ) {}

  async create(contact: createContactDto): Promise<Contact> {
    return await this.contactEntity.save(contact);
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactEntity.find({relations: ["contactChannel"]});
  }

  async findOne(id: number): Promise<Contact> {
    return await this.contactEntity.findOne(id, {relations: ["contactChannel"]});
  }

  async findOneTag(id: number): Promise<Contact> {
    return await this.contactEntity.findOne(id, {relations: ["contactTag"]});
  }

  async update(id: number, contact: Contact) {
    return await this.contactEntity.update(id, contact);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.contactEntity.delete(id);
  }
}
