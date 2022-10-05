/*create database db_farmacia_bem_estar;*/

/*use db_farmacia_bem_estar;*/
/*create table tb_categoria(
id bigint(5) auto_increment,
tarja varchar(50),
ativo boolean,
primary key(id)
);*/

/*insert into tb_categoria(tarja, ativo) values ("Sem", true);
insert into tb_categoria(tarja, ativo) values ("Amarela", false);
insert into tb_categoria(tarja, ativo) values ("Vermelha", true); 
insert into tb_categoria(tarja, ativo) values ("Preta", true);*/

/*create table tb_produtos(
id bigint(5) auto_increment,
nome varchar(50),
preco decimal(10,2),
peso_g decimal(10,2),
id_categoria bigint(5),
primary key(id),
foreign key(id_categoria) references tb_categoria(id)
);*/

/*insert into tb_produtos(nome, preco, peso_g, id_categoria) values ("Paracetamol", 4.40, 100, 1);
insert into tb_produtos(nome, preco, peso_g, id_categoria) values ("Cetaconazol", 25.50, 300, 2);
insert into tb_produtos(nome, preco, peso_g, id_categoria) values ("ivermectiba", 15.80, 30, 3);
insert into tb_produtos(nome, preco, peso_g, id_categoria) values ("Rivotril", 200.00, 300, 4);
insert into tb_produtos(nome, preco, peso_g, id_categoria) values ("Glifage", 70.48, 500, 3);
insert into tb_produtos(nome, preco, peso_g, id_categoria) values ("Ibuprofeno", 40.00, 70, 1);
insert into tb_produtos(nome, preco, peso_g, id_categoria) values ("Neosaldina", 10.00, 60, 2);
insert into tb_produtos(nome, preco, peso_g, id_categoria) values ("Dimorf",55.60, 100, 4);*/
/*select * from tb_produtos where preco > 50;*/
/*select * from tb_produtos where preco > 5 and preco < 60;*/

select * from tb_produtos
	inner join tb_categoria on tb_categoria.id = tb_produtos.id_categoria
		where tb_produtos.nome like "%c%";