import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../service/categoria.service";



@Controller("/categoria")
export class CategoriaController {
    constructor(private readonly CategoriaSeervice: CategoriaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.CategoriaSeervice.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.CategoriaSeervice.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Categoria: Categoria): Promise<Categoria> {
        return this.CategoriaSeervice.create(Categoria)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Categoria: Categoria): Promise<Categoria> {
        return this.CategoriaSeervice.update(Categoria)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.CategoriaSeervice.delete(id)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('Nome') nome: string): Promise<Categoria[]> {
        return this.CategoriaSeervice.findByNome(nome)

    }

}
