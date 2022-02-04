import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { createChannelDto } from './dto/create-channel.dto';
import { Channel } from "./entities/channel.entity";


@Injectable()
export class ChannelService {

  constructor(@InjectRepository(Channel) private channelEntity: Repository<Channel>) { }

  async create(channel: createChannelDto): Promise<Channel> {
    return await this.channelEntity.save(channel);
  }

  async findAll(): Promise<Channel[]> {
    return await this.channelEntity.find();
  }

  async findOne(id: number): Promise<Channel> {
    return await this.channelEntity.findOne(id);
  }

  async update(id: number, channel: createChannelDto): Promise<UpdateResult> {
    return await this.channelEntity.update(id, channel);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.channelEntity.delete(id);
  }
}



