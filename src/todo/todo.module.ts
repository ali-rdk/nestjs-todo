import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoShcema } from './schemas/todo.ashema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoShcema }]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
