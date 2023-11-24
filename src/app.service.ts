import { Injectable } from '@nestjs/common';
import { SolutionDto } from './dto/find-solution.dto';
import { ResponseService } from './common/response.service';
@Injectable()
export class AppService {
  constructor(private responseService: ResponseService) {}

  solution(solutionDto: SolutionDto) {
    // Reading variables to solve the problem

    // Number of people in the initial circle
    const numberOfPeople = solutionDto.numberOfPeople;

    // Every 'N' person is eliminated || Every third person is eliminated
    const eliminationStep = solutionDto.eliminationStep;

    function josephus(numPeople: number, eliminationStep: number): number {
      // Mathematical formula to solve the problem (josephus(n - 1, k) + k - 1) % n + 1
      if (numPeople === 1) {
        return 1;
      } else {
        const lastSurvivorPosition =
          ((josephus(numPeople - 1, eliminationStep) + eliminationStep - 1) %
            numPeople) +
          1;
        return lastSurvivorPosition;
      }
    }

    // Calculate the position of the last survivor
    const lastSurvivorPosition =
      numberOfPeople === 1
        ? console.log('Solo existe 1 persona la posicion final es 1')
        : josephus(numberOfPeople, eliminationStep);

    return this.responseService.succesMessage(
      lastSurvivorPosition,
      'Posición del último sobreviviente:',
    );
  }
}
