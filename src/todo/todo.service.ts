import { Injectable } from '@nestjs/common';
import { ITodo } from './todo.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.ashema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}
  async create(todo: ITodo) {
    const createdTodo = new this.todoModel(todo);
    return createdTodo.save();
  }

  async getAllTodos() {
    return this.todoModel.find();
  }

  async getTodo(id: string) {
    return this.todoModel.findById(id);
  }

  async deleteTodo(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }

  async updateTodo(id: string, payload: ITodo) {
    return this.todoModel.findByIdAndUpdate(id, payload);
  }
}
