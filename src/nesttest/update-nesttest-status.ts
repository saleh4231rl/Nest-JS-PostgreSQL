import { IsEnum } from 'class-validator'
import { nesttestStatus } from './nesttest.model'

export class UpdateNesttestStatusDTO {
    @IsEnum(nesttestStatus)
    status: nesttestStatus
}