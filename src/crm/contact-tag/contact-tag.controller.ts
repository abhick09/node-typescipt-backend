import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes } from '@nestjs/common';
import { ContactTagService } from './contact-tag.service';
import { ContactTag } from './entities/contact-tag.entity';
import { createContactTagDto } from './dto/create-contact-tag.dto'

@Controller('contact-tag')
export class ContactTagController {
  constructor(private readonly contactTagService: ContactTagService) {}

  @Post()
  @UsePipes(createContactTagDto)
  create(@Body() contactTag: createContactTagDto) {
    return this.contactTagService.create(contactTag);
  }

  @Get()
  findAll() {
    return this.contactTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactTagService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() contactTag: ContactTag) {
    return this.contactTagService.update(+id, contactTag);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactTagService.remove(+id);
  }
}
