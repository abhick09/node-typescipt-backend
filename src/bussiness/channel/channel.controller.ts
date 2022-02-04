import { createChannelDto } from './dto/create-channel.dto';
import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ParseIntPipe } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './entities/channel.entity';

@Controller('channels')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) { }

  @Post()
  @UsePipes(createChannelDto)
  create(@Body() channel: createChannelDto): Promise<Channel> {
    return this.channelService.create(channel);
  }

  @Get()
  findAll() {
    return this.channelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.channelService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() channelData: createChannelDto) {
    let updateResponse = this.channelService.update(+id, channelData);
    return updateResponse;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.channelService.remove(+id);
  }
}
