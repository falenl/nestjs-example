import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NotesController } from './notes.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, NotesController],
  providers: [AppService],
})
export class AppModule {}
