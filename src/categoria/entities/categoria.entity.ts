import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";




@Entity({name: "tb_categoria"})
export class Categoria{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 200, nullable:false})
    nome:string
    @OneToMany(() => Produto, (produto) => (produto.id))
    produto: Produto[]
    


}