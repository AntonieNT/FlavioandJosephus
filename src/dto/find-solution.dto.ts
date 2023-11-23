import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class SolutionDto {
  @ApiProperty()
  @IsInt()
  NumberOfPeople: number;

  @ApiProperty({ example: 3 })
  @IsInt()
  EliminationStep: number;
}
