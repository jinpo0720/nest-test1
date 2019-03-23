import { IsString, IsInt, Max } from 'class-validator';

export class UserDto {
  @IsInt()
  @Max(10)
  readonly id: number;
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
}
