import { IsString } from 'class-validator';

export class TodoIdParamDto {
  @IsString()
  // @Min(24)
  // @Max(24)
  id: string;
}
