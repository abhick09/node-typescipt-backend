import { createTenantDto } from './dto/create-tenant.dto';
import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ParseIntPipe } from '@nestjs/common';
import { TenantService } from './tenant.service'

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) { }

  @Post()
  @UsePipes(createTenantDto)
  create(@Body() tenant: createTenantDto) {
    return this.tenantService.create(tenant);
  }

  @Get()
  findAll() {
    return this.tenantService.findAll();
  }

  @Get('tenantchannel')
  findAllChannel() {
    return this.tenantService.findAllChannel();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.tenantService.findOne(+id);
  }


  @Get('uuid/:uuid')
  async getTenantByUUID(@Param('uuid') uuid: string) {
    return await this.tenantService.findTenantByUUID(uuid);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() tenant: createTenantDto) {
    return this.tenantService.update(+id, tenant);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.tenantService.remove(+id);
  }

}



