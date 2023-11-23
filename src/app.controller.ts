import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { SolutionDto } from './dto/find-solution.dto';
@ApiTags('solution')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('flavius-josephus')
  solution(@Body() solutionDto: SolutionDto) {
    return this.appService.solution(solutionDto);
  }
}
