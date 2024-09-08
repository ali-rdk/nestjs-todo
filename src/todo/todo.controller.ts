import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { TodoIdParamDto } from './dto/todo-id-param.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  all_todos() {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  single_todo(@Param(ValidationPipe) param: TodoIdParamDto) {
    return this.todoService.getTodo(param.id);
  }

  @Post('create')
  async create_todo(@Body(ValidationPipe) payload: CreateTodoDto) {
    return this.todoService.create(payload);
  }

  @Delete('delete/:id')
  delete_todo(@Param(ValidationPipe) param: TodoIdParamDto) {
    return this.todoService.deleteTodo(param.id);
  }

  @Patch('update/:id')
  update_todo(
    @Param(ValidationPipe) param: TodoIdParamDto,
    @Body(ValidationPipe) payload: UpdateTodoDto,
  ) {
    return this.todoService.updateTodo(param.id, payload);
  }
}
