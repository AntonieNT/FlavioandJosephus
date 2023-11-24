import { ApiProperty } from '@nestjs/swagger';

export class ResponseService {
  public succesMessage(result: any, message: string) {
    return {
      code: 201,
      message: message,
      result: result,
      success: true,
    };
  }
}

export class globalResponse {
  @ApiProperty()
  code: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  result: any;
  @ApiProperty()
  success: boolean;
}
