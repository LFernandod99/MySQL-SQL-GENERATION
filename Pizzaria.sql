/*create database db_pizzaria_legal;*/

/*use db_pizzaria_legal;*/
/*create table tb_categorias(
id bigint(5) auto_increment,
tamanho varchar(40),
ativo boolean,
primary key(id)
);*/

/*insert into tb_categorias(tamanho, ativo) values ("Brotinho", true), ("Pequena", false), ("Média", true),
												 ("Grande", true), ("Família", false);*/

/*select * from tb_categorias;*/
/*create table tb_pizzas(
id bigint(5) auto_increment,
sabor varchar(70),
borda_recheada boolean,
preco decimal(10,2),
id_categoria bigint not null,
primary key(id),
foreign key(id_categoria) references tb_categorias(id)
);*/

/*insert into tb_pizzas(sabor, borda_recheada, preco, id_categoria) values ("calabresa", true, 5.50, 1);
insert into tb_pizzas(sabor, borda_recheada, preco, id_categoria) values ("Portuguesa", false, 20.40, 2);
insert into tb_pizzas(sabor, borda_recheada, preco, id_categoria) values ("4 queijos", true, 40.99, 3);
insert into tb_pizzas(sabor, borda_recheada, preco, id_categoria) values ("Mussarela", true, 60.90, 4);
insert into tb_pizzas(sabor, borda_recheada, preco, id_categoria) values ("Frango com catupiry", false, 80.00, 5);
insert into tb_pizzas(sabor, borda_recheada, preco, id_categoria) values ("Chocolate branco", true, 7.00, 1);
insert into tb_pizzas(sabor, borda_recheada, preco, id_categoria) values ("Banana", false, 70.00, 3);
insert into tb_pizzas(sabor, borda_recheada, preco, id_categoria) values ("Sorvete", true, 50.00, 2);*/
 
/*select * from tb_pizzas where preco > 45;*/
/*select * from tb_pizzas where preco > 50 and preco < 100;*/

select * from tb_pizzas
	inner join tb_categorias on tb_categorias.id = tb_pizzas.id_categoria
		where tb_pizzas.sabor like "%M%";