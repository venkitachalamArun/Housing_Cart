import { ObjectId } from "mongodb";
import { Entity, Column, ObjectIdColumn, OneToOne, JoinColumn, ManyToOne,BaseEntity } from "typeorm";
import { Dashboard } from "../models/dashboard";

@Entity("carts")
export class Cart extends BaseEntity {
    @ObjectIdColumn()
    _id: ObjectId = new ObjectId(); // This line looks fine

    @Column()
    propertyId!: string;
    @Column()
    item!: number;

    @Column()
    amount!: number;

    // @ManyToOne(() => Product, (product: { carts: any; }) => product.carts) // Specify the target entity and the property to use as the inverse side
    @ManyToOne(() => Dashboard, dashboard => dashboard.carts)
    @JoinColumn({ name: "propertyId" })
    product!: Dashboard;
}