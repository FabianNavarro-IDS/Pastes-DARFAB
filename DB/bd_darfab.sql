drop database if exists darfab; 
create database darfab;
use darfab;

create table cliente (
numclientes int primary key auto_increment, 
nombre varchar (30), 
domicilio varchar (50), 
telefono varchar (10));

create table pedidos (
codigopedido int primary key auto_increment,
fecha datetime,
estado varchar (20),
numclientes int,
formadepago varchar (20),
foreign key (numclientes) references cliente (numclientes)ON DELETE CASCADE ON UPDATE CASCADE);

create table catalogo (
codigopastes int primary key auto_increment,
nombre varchar (50),
descripcion varchar (50),
precio float, 
ingrediente varchar (50));

create table inventario (
codigoinventario int primary key auto_increment,
codigopastes int,
stock int,
foreign key (codigopastes) references catalogo (codigopastes)ON DELETE CASCADE ON UPDATE CASCADE);

create table domicilio (
codigodomicilio int primary key auto_increment,
numclientes int,
direccion varchar (50),
codigo_postal varchar (15),
ciudad varchar (15), 
colonia varchar (15),
foreign key (numclientes) references cliente (numclientes)ON DELETE CASCADE ON UPDATE CASCADE);

create table detalle_pedido (
codigodetalle int primary key auto_increment,
codigopedido int,
codigopastes int,
cantidad int,
precio_unitario float,
foreign key (codigopedido) references pedidos (codigopedido)ON DELETE CASCADE ON UPDATE CASCADE,
foreign key (codigopastes) references catalogo (codigopastes)ON DELETE CASCADE ON UPDATE CASCADE);

insert into cliente (numclientes, nombre, domicilio, telefono) values 
(null,'liliana velez', 'avenida del rio','741258212');

insert into pedidos (codigopedido, fecha, estado, numclientes, formadepago) values 
(null, '2024-05-03 10:31', 'enviado', 1, 'efectivo');

insert into catalogo (codigopastes, nombre, descripcion, precio, ingrediente) values 
(null, 'paste de fresa', 'paste de fresa cubierto de leche', 40, 'fresa');

insert into inventario (codigoinventario, codigopastes, stock) values 
(null, 1, 30);

insert into domicilio (codigodomicilio, numclientes, direccion, codigo_postal, ciudad, colonia) values 
(null, 1, 'del rio', '31357', 'acapulco', 'la venta');

insert into detalle_pedido (codigodetalle, codigopedido, codigopastes, cantidad, precio_unitario) values
(null, 1, 1, 10, 40);








