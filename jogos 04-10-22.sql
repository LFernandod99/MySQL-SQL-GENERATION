/*create database db_registro;*/
/*use db_registro;*/
/*create table tb_classes(
id bigint(5) auto_increment,
nome varchar(80) default 'Não foi identificado',
ativo boolean,
primary key(id)
);*/

/*insert into tb_classes(nome, ativo) values ("cs", true);*/
/*insert into tb_classes(nome, ativo) values ("PB", false),
 ("Good of war", true), ("Fifa", true), ("Dragon city", false);*/



/*create table tb_personagens(
id bigint(5) auto_increment,
nome varchar(50),
habilidade varchar(30),
nivel int(5),
id_classes bigint not null,
primary key(id),
foreign key(id_classes) references tb_classes(id)
);*/

/*insert into tb_personagens(nome, habilidade, poder_ataque, poder_defesa, nivel, id_classes) values("Teror", "Atirar", 90, 60, 75, 1 );*/
/*insert into tb_personagens(nome, habilidade, poder_ataque, poder_defesa, nivel, id_classes) values("Teror", "Atirar", 90, 60, 75, 1 );
insert into tb_personagens(nome, habilidade, poder_ataque, poder_defesa, nivel, id_classes) values("Policia", "Atirar", 4000, 7000, 7785, 2 );
insert into tb_personagens(nome, habilidade, poder_ataque, poder_defesa, nivel, id_classes) values("Kratos", "Matar demonios", 10000, 3000, 7500, 3 );
insert into tb_personagens(nome, habilidade, poder_ataque, poder_defesa, nivel, id_classes) values("Vini JR", "Bailar", 9000, 1500, 8800, 4 );
insert into tb_personagens(nome, habilidade, poder_ataque, poder_defesa, nivel, id_classes) values("Dragão lendario", "cuspir fogo", 9000, 6000, 9005, 5 );
/*insert into tb_personagens(nome, habilidade, poder_ataque, poder_defesa, nivel, id_classes) values("Teror", "Atirar", 90, 60, 75, 1 );
insert into tb_personagens(nome, habilidade, poder_ataque, poder_defesa, nivel, id_classes) values("Teror", "Atirar", 90, 60, 75, 1 );*/

/*alter table tb_personagens add column poder_ataque decimal(65) after habilidade;*/
/*alter table tb_personagens add column poder_defesa decimal(65) after habilidade;*/
/*select * from tb_classes;*/
/*select * from tb_personagens;*/

/*select * from tb_personagens where poder_ataque > 2000;*/
/*select * from tb_personagens where poder_defesa > 100 and poder_defesa < 2000;*/

/* select * from tb_personagens
	inner join tb_classes on tb_classes.id = tb_personagens.id_classes;*/
