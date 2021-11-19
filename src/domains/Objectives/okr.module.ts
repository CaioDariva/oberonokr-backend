import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CreateOkrService } from './usecases/create-okr/create-okr.service';
import { DeleteOkrService } from './usecases/delete-okr/delete-okr.service';
import { FindAllOkrService } from './usecases/find-all-okr/find-all-okr.service';
import { UpdateOkrService } from './usecases/update-okr/update-okr.service';
import { FindOneOkrService } from './usecases/find-one-okr/find-one-okr.service';
import { CreateOkrController } from './usecases/create-okr/create-okr.controller';
import { DeleteOkrController } from './usecases/delete-okr/delete-okr.controller';
import { FindAllOkrController } from './usecases/find-all-okr/find-all-okr.controller';
import { FindOneOkrController } from './usecases/find-one-okr/find-one-okr.controller';
import { UpdateOkrController } from './usecases/update-okr/update-okr.controller';

@Module({
  controllers: [
    CreateOkrController,
    DeleteOkrController,
    FindAllOkrController,
    FindOneOkrController,
    UpdateOkrController,
  ],
  providers: [
    CreateOkrService,
    DeleteOkrService,
    FindAllOkrService,
    UpdateOkrService,
    FindOneOkrService,
    PrismaService,
  ],
  imports: [PrismaService],
})
export class OkrModule {}
