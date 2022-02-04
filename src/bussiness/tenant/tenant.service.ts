import { createTenantDto } from './dto/create-tenant.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';
import { Tenant } from './entities/tenant.entity';

@Injectable()
export class TenantService {

  constructor(@InjectRepository(Tenant) private tenantEntity: Repository<Tenant>) { }

  async create(tenant: createTenantDto): Promise<Tenant> {
    return await this.tenantEntity.save(tenant);
  }

  async findAll(): Promise<Tenant[]> {
    return await this.tenantEntity.find();
  }

  async findAllChannel(): Promise<Tenant[]> {
    return await this.tenantEntity.find({ relations: ["channels"] });
  }

  async findOne(id: number): Promise<Tenant> {
    return await this.tenantEntity.findOne(id, { relations: ["channels"] });
  }

  async findTenantByUUID(uuid: string): Promise<Tenant> {
    return await this.tenantEntity.findOne({ where: { uuid }, relations: ["channels"] });
  }


  async findOneName(name: string): Promise<Tenant> {
    return await this.tenantEntity.findOne({ where: { name }, relations: ["channels"] });
  }

  async update(id: number, tenant: createTenantDto): Promise<UpdateResult> {
    return await this.tenantEntity.update(id, tenant);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.tenantEntity.delete(id);
  }
}

