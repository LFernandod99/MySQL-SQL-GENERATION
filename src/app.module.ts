import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm';
//import { PostagemModule } from './postagem/postagem.module';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { Categoria } from './categoria/entities/categoria.entity';



@Module({
  imports: [
          TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'db_loja_game',
          entities: [ Produto, Categoria],
          synchronize: true
        }),
        ProdutoModule,
        //CategoriaModule
        
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
