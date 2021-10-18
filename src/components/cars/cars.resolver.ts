import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
// import { NewCarInput } from './dto/new-car.input';
// import { Car } from './entities/car';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async cars(){
    return 'Hello and welcome to Yourcar shop!';
  }

}