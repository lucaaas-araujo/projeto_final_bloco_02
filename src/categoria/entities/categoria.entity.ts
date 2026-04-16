import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_categorias"})
export class Categoria {
    @PrimaryGeneratedColumn()
     @ApiProperty() 
    id!: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
     @ApiProperty() 
    titulo!: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
     @ApiProperty() 
    descricao!: string
}