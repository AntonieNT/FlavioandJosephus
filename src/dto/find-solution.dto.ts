import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class SolutionDto {
  @ApiProperty({ example: 1 })
  @IsPositive()
  numberOfPeople: number;

  @ApiProperty({ example: 3 })
  @IsInt()
  eliminationStep: number;
}
