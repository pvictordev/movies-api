import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from 'src/movie.entity';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
