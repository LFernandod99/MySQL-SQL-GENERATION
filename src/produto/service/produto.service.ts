import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
    ProdutoService: any;
    constructor(
    @InjectRepository(Produto)
        private ProdutoRepository: Repository<Produto>

     ) {}

 async findAll(): Promise<Produto[]> {
    return await this.ProdutoRepository.find()
 }

async findById(id: number): Promise<Produto>{
let Produto = await this.ProdutoRepository.findOne ({
where:{
    id
},relations: {categoria:true}

})

if (!Produto)
throw new HttpException ('Este produto não existe', HttpStatus.NOT_FOUND)

return Produto

}
async create(produto:Produto): Promise<Produto> {
return await this.ProdutoRepository.save(produto)
}
async update(produto: Produto): Promise<Produto> {
    let buscarProduto =await this.findById(produto.id)
    if(!buscarProduto|| !produto.id)
    throw new HttpException('Postagem não Existe',HttpStatus.NOT_FOUND)

    return await this.ProdutoRepository.save(produto)
}

async delete(id: number): Promise<DeleteResult>{
    let buscarPostagem = await this.findById(id)

    if(!buscarPostagem)
    throw new HttpException('postagem não emcontrada',HttpStatus.NOT_FOUND)

return await this.ProdutoRepository.delete(id)
}

async findByDescricao(descricao: string): Promise<Produto[]> {
    return await this.ProdutoRepository.find({
        where: {
            titulo:ILike(`%${descricao} `)
        }
    }) 
}
}