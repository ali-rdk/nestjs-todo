import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;
}

export const TodoShcema = SchemaFactory.createForClass(Todo);
