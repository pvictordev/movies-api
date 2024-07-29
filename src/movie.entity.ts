import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  release_year: number;

  @Column({ nullable: true })
  duration: number;

  @Column({ nullable: true })
  description: string;
}
