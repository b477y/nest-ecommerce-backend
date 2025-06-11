import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "../enums/user.enum";
import { HydratedDocument } from "mongoose";

// schema class
@Schema({ timestamps: true })
export class User {
    @Prop({ type: String, required: true })
    firstName: string;

    @Prop({ type: String, required: true })
    lastName: string;

    @Prop({ type: String, required: true, unique: true, lowercase: true })
    email: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: Boolean, required: true, default: false })
    accountActivated: boolean;

    @Prop({ type: String, default: Role.user })
    role: Role;
}

// schema
export const UserSchema = SchemaFactory.createForClass(User)

// model name
export const UserModelName = User.name

// model
export const UserModel = MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])

// user document
export type UserDocument = HydratedDocument<User>;