import { Nesttest } from "./nesttest.entity";
import { EntityRepository, Repository } 
from 'typeorm'

@EntityRepository(Nesttest)
export class NesttestRepository 
extends Repository<Nesttest>{

}