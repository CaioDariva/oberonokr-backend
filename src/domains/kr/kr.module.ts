import { Module } from '@nestjs/common';
import { GetKrController } from './usecases/get-kr/get-kr.controller';
import { GetKrService } from './usecases/get-kr/get-kr.service';
import { CreateKrController } from './usecases/create-kr/create-kr.controller';
import { CreateKrService } from './usecases/create-kr/create-kr.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateKrController } from './usecases/update-kr/update-kr.controller';
import { DeleteKrService } from './usecases/delete-kr/delete-kr.service';
import { DeleteKrController } from './usecases/delete-kr/delete-kr.controller';
import { UpdateKrService } from './usecases/update-kr/update-kr.service';

@Module({
  controllers: [
    GetKrController,
    CreateKrController,
    UpdateKrController,
    DeleteKrController,
  ],
  providers: [
    GetKrService,
    CreateKrService,
    PrismaService,
    DeleteKrService,
    UpdateKrService,
  ],
  imports: [PrismaService],
})
export class KrModule {}
