import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SolutionDto } from './dto/find-solution.dto';
import { globalResponse } from './common/response.service';
@ApiTags('solution')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // ? ------------------------- GET RESULT ------------------------------//
  @ApiOperation({
    summary: 'Get Solution',
  })
  @ApiResponse({
    status: 201,
    description: 'Get Solution',
    type: globalResponse,
  })
  @Post('flavius-josephus')
  solution(@Body() solutionDto: SolutionDto) {
    return this.appService.solution(solutionDto);
  }
}
