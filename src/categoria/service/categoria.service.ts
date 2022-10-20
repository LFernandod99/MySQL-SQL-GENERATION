import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";





@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private CategoriaRepository: Repository<Categoria>
    ) { }

    async findAll(): Promise<Categoria[]> {
        return await this.CategoriaRepository.find({
            relations: { produto: true }
        })
    }


    async findById(id: number): Promise<Categoria> {
        let categoria = await this.CategoriaRepository.findOne({
            where: {
                id
            },
            relations: {
                produto: true
            }
        })
        if (!categoria)
            throw new HttpException('Produto não existe', HttpStatus.NOT_FOUND)

        return categoria
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.CategoriaRepository.save(categoria)
    }

    async update(categoria: Categoria): Promise<Categoria> {
        let BuscarCategoria = await this.findById(categoria.id)
        if (!BuscarCategoria || !categoria.id)
            throw new HttpException('Postagem não Existe', HttpStatus.NOT_FOUND)

        return await this.CategoriaRepository.save(categoria)
    }

    async delete(id: number): Promise<DeleteResult> {
        let BuscarCategoria = await this.findById(id)

        if (!BuscarCategoria)
            throw new HttpException('postagem não emcontrada', HttpStatus.NOT_FOUND)

        return await this.CategoriaRepository.delete(id)
    }


    async findByNome(nome: string): Promise<Categoria[]> {
        return await this.CategoriaRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations: {
                produto: true
            }
        })

    }

}