import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes } from '@nestjs/common';
import { ContactChannelService } from './contact-channel.service';
import { ContactChannel } from './entities/contact-channel.entity';
import { createContactChannelDto } from './dto/create-contact-channel.dto';
 
@Controller('contact-channel')
export class ContactChannelController {
  constructor(private readonly contactChannelService: ContactChannelService) {}

  @Post()
  @UsePipes(createContactChannelDto)
  create(@Body() contactService: createContactChannelDto) {
    return this.contactChannelService.create(contactService);
  }

  @Get()
  findAll() {
    return this.contactChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactChannelService.findOne(+id);
  }

  @Get('uuid/:id')
  findwithUUID(@Param('uuid') uuid: string) {
    return this.contactChannelService.findwithUUID(uuid);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() contactService: ContactChannel) {
    return this.contactChannelService.update(+id, contactService);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactChannelService.remove(+id);
  }
}
