import { UserDto } from './dto/user.dto';
import {
  Controller, Param, Get, Post, Delete, Put, Inject,
   Body,  UsePipes,
} from '@nestjs/common';
// import { UserInterface } from './interfaces/user.interface';
import { IUsersService } from './interfaces/user-service.interface';
import { UsersService } from './services/users.service';
// import { HttpExceptionFilter } from 'src/util/filter/http-exception.filter';
// import { JoiValidationPipe } from 'src/util/pipes/joi-validation.pipe';
// import { ValidationPipe } from 'src/util/pipes/validation.pipe';
// import { ParseIntPipe } from 'src/util/pipes/parse-int.pipe';
// import { RolesGuard } from 'src/util/guards/roles.guard';
// import { Roles } from 'src/util/decorators/roles.decorator';
// import { LoggingInterceptor } from 'src/util/interceptions/logging.interception';

@Controller('users')
// @UseGuards(RolesGuard)
// @UseFilters(new HttpExceptionFilter())
// @UseInterceptors(LoggingInterceptor)
// @UseInterceptors(new LoggingInterceptor())
export class UsersController {

  @Inject('UsersService')
  private readonly usersService: IUsersService;

  @Get()
  async findAll(): Promise<UserDto[]> {

    return await this.usersService.findAll();
  }

  // @Get(':id')
  // async findOne(@Param() params): Promise<UserInterface> {
  //   try {
  //     return await this.usersService.findOne(params.id);
  //   } catch (error) {
  //     // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  //     throw new HttpException({
  //       status: HttpStatus.FORBIDDEN,
  //       error: 'This is a custom message',
  //     }, 403);
  //   }
  // }
  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.usersService.findOne(id);
  }

  @Post()
  // @UseFilters(new HttpExceptionFilter())
  // @UsePipes(new JoiValidationPipe('createCatSchema'))
  // @UsePipes(new ValidationPipe({ transform: true, skipMissingProperties: true, forbidUnknownValues: false }))
  // async create(@Body(new ValidationPipe()) userDto: UserDto) {
  // @ReflectMetadata('roles', ['admin'])
  // @Roles('admin')
  async create(@Body() userDto: UserDto) {
    console.log(userDto);
    // throw new ForbiddenException();
    return await this.usersService.create();
  }

  @Put()
  async edit() {
    return await this.usersService.edit();
  }

  @Delete()
  async remove() {
    return await this.usersService.remove();
  }
}
