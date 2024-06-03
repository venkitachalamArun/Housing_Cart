
import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn, OneToMany } from "typeorm";
import { Cart } from "./cart";
import {
  IsDate,
  IsEmail,
  Length,
  MaxLength,
  MinLength,
  Validate,
  ValidationArguments,
} from "class-validator";
@Entity("dashboard")
export class Dashboard {
    @ObjectIdColumn()
    _id: ObjectId = new ObjectId;
    id!: number;
    @Column()
    @Length(10, 20)
    propertyname!: string;
    @Column()
    bhktype!: string;
    @Column()
    rent!: number;
    @Column()
    avalablity!: string;
    @Column()
    preferredtenants!: string;
    @Column()
    furnishing!:string;
    @Column()
    parking!:any;
    @Column()
    propertyid!:any;

  //  @OneToMany(() => Cart, cart => cart.dashboard) // Specify the target entity and the property to use as the inverse side
    carts!: Cart[]; // Define a property to access the associated Cart entities
}