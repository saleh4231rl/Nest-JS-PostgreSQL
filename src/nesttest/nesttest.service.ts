import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { nesttestStatus, Nesttest } from './nesttest.model';
import {  } from './nesttest.model';
import { NesttestRepository } from './nesttest.repository';
import { v4 as uuid } from 'uuid'

@Injectable()
export class NesttestService {
    constructor(
        @InjectRepository(NesttestRepository)
        private NesttestRepository: NesttestRepository,
    ){}
        private nest: Nesttest[] = [];


    getAllNesttest(){
        return this.nest;
    }

    createNesttest(nama:string, hobi:string): Nesttest{
        const nesttest: Nesttest={
            id: uuid(),
            nama,
            hobi,
            status: nesttestStatus.OPEN,
        }

        this.nest.push(nesttest)
        return nesttest
    }

    // async getNesttestByID(id: string): Promise<Nesttest> {
    //     const found = await this.NesttestRepository(id);

    //     if(!found){
    //         throw new NotFoundException(`Nama dengan ID ${id} tidak ditemukan`);
    //     }

    //     return found
    // }

}
// import { }