import { IsNotEmpty, isNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
//import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// É a nossa mãe, sabe onde ta tudo...
@Entity({ name: "tb_produto" })
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false })
    titulo: string

    @Column()
    disponivel: boolean

    @MaxLength(1000)
    @Column({ length: 1000, nullable: false })
    descricao: string
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto,{
        onDelete: "CASCADE"
    })
    categoria: Categoria
}