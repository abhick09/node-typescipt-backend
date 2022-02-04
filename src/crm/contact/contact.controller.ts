import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes } from '@nestjs/common';
import { Contact } from './entities/contact.entity';
import { ContactService } from './contact.service';
import { createContactDto } from './dto/create-contact.dto'

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @UsePipes(createContactDto)
  create(@Body() contact: createContactDto): Promise<Contact> {
    return this.contactService.create(contact);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(+id);
  }

  @Get('tags/:id')
  findOneTag(@Param('id') id: string) {
    return this.contactService.findOneTag(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() contact: Contact) {
    return this.contactService.update(+id, contact);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }
}
