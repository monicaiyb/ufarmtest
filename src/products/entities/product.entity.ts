import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
export class Product {
@PrimaryGeneratedColumn()
id: number;

@Column({ nullable: false })
pname: string;

@Column({ nullable: false })
ward: string;

@Column({ nullable: true })
dateOfUpload: string;

@Column({ nullable: false })
farmername: string;

@Column({ nullable: true })
image: string;
}