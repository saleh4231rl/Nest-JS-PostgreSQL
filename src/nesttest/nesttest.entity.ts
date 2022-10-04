import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Nesttest extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    peserta: string;

    @Column()
    hobi: string;

    @Column()
    status: boolean;

    // static findByName(peserta: string, 
    //     hobi: string){
    // return this.createQueryBuilder("nesttest")
    //     .where("nesttest.peserta = :peserta",
    //      { peserta })
    //     .andWhere("nesttest.hobi = :hobi", 
    //     { hobi })
    //     .getMany()
    // }

}

