create database if not exists fseletro
default collate utf8mb4_general_ci
default character set utf8mb4;

use fseletro;

create table produtos(
	id_produto int auto_increment not null, 
    categoria varchar(100),
    descricao varchar(500),
    preco_antigo float(8,2),
    preco_venda float(8,2),
    imagem varchar(100),
	primary key (id_produto)
)default charset utf8mb4;

insert into produtos 
(categoria, descricao, preco_antigo, preco_venda, imagem)

values 
("geladeiras", "Geladeira Brastemp Frost Free Duplex 462 Litros", 4099.00, 3599.00, "Imagens/GeladeiraBrastempFrostFreeDuplex462Litros.png"),
("geladeiras", "Geladeira Consul Frost Free Duplex 340 Litros", 3859.00, 3699.00, "Imagens/GeladeiraConsulFrostFreeDuplex340Litros.png"),
("geladeiras", "Geladeira Panasonic Frost Free Duplex 425 Litros", 5799.00, 4689.00, "Imagens/GeladeiraPanasonicFrostFreeDuplex425Litros.jpg"),
("fogoes", "Fogão 4 Bocas Esmaltec com Forno Limpa Fácil", 589.00, 469.00, "Imagens/Fogao4BocasEsmaltecComFornoLimpaFacil.jpg"),
("fogoes", "Fogão 5 Bocas Brastemp Inox", 5799.00, 4689.00, "Imagens/Fogao5BocasBrastempInoxComAcendimentoAutomatico.jpg"),
("microondas", "Microondas Midea 20 Litros", 499.00, 399.00, "Imagens/MicroondasMidea20Litros.jpg"),
("microondas", "Microondas Electrolux 20 Litros", 599.00, 429.00, "Imagens/MicroondasElectrolux20Litros.jpg"),
("microondas", "Microondas Electrolux 20 Litros", 699.00, 548.90, "Imagens/MicroondasElectrolux34Litros.jpg"),
("lava_roupas", "Lavadora de Roupas Consul 12kg", 1699.00, 1549.00, "Imagens/LavadoraDeRoupasConsul12kg.jpg"),
("lava_roupas", 'Lavadora de Roupas Brastemp 15kg', 2699.00, 1999.00, "Imagens/LavadoraDeRoupasBrastemp15kg.jpg"),
("lava_loucas", "Lava-Louças Electrolux 8 Serviços", 2399.00, 2199.00, "Imagens/LavaLoucasElectrolux8Servicos.jpg"),
("lava_loucas", "Lava-Louças Electrolux 10 Serviços", 3699.00, 2799.00, "Imagens/LavaLoucasElectrolux10Servicos.jpg");

create table pedidos(
	id_pedido int auto_increment not null,
    cliente varchar(50),
    rua varchar(150),
    numero varchar(9),
    cidade varchar(100),
    estado varchar(10),
    cep varchar(15),
    telefone varchar(14),
    produto varchar(30),
    valor_unitario int,
    quantidade int default '1',
    valor_total int,
    primary key (id_pedido)
)default charset = utf8mb4;

create table clientes(
    id_cliente int auto_increment not null,
    nome varchar(70) not null,
    email varchar(100) not null,
    primary key (id_cliente)
)default charset = utf8mb4;

create table comentarios(
    id int auto_increment not null,
    id_cliente int not null,
    msg varchar(300) not null,
    primary key (id),
    foreign key (id_cliente) references clientes (id_cliente)
)default charset = utf8mb4;
