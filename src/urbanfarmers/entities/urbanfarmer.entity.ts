import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
//import { Farmerone } from 'src/farmerones/entities/farmerone.entity';

@Entity('urbanfarmers')
export class Urbanfarmer {
  //@OneToMany(type => Farmerone, farmerone => farmerone.id)
  //farmerones: Farmerone[];

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  ward: string;

  @Column({ nullable: true })
  dateOfRegistration: string;

  @Column({ nullable: false })
  gender: string;

  @Column({ nullable: true })
  dateOfBirth: string;

  @Column({ nullable: false })
  activities: string;

  @Column({ nullable: false })
  nin: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column({ nullable: false })
  direction: string;

  @Column({ nullable: false })
  residenceType: string;

  @Column({ nullable: false })
  username: string;
}
