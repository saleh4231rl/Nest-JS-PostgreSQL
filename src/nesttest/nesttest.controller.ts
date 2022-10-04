import { Body, Controller, Post } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { NesttestService } from './nesttest.service';
import { Nesttest } from './nesttest.model'


@Controller('nesttest')
export class NesttestController {
    constructor(private NesttestService: NesttestService) {}

    
    @Get()
    getAllNesttest(): Nesttest[]{
        return this.NesttestService.getAllNesttest();
    }

    @Post()
    createNesttest(@Body() body){
        console.log('body', body);
        
    }
    // @Get('/:id')
    // getNesttestByID(@Param('id') 
    // id:string Promise<Nesttest>){
    // }
}

// import { getAllNesttest } from './nesttest.service';
// import { nesttestStatus } from './nesttest.model';
// import { getNesttestByID } from './nesttest.service';
// import { Nesttest } from './nesttest.entity';