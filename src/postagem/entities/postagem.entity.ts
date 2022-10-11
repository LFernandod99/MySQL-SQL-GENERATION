import { IsNotEmpty, isNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"})
    export class postagem{
        @PrimaryGeneratedColumn()
        id: number
        @IsNotEmpty()
        @MaxLength(100)
        @Column({length: 100, nullable: false})
        titulo: string
        @Column({length: 1000, nullable: false})
        texto: string
        @UpdateDateColumn()
        data: Date
    }