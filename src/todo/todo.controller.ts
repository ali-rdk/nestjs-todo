import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  all_todos() {
    return 'all items';
  }

  @Get(':id')
  single_todo() {
    return 'just one todo';
  }
}
