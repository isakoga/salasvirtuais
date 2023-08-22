import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class handleKeycloackAuth implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    console.log(`[${now}] - Chamada para API iniciada`);

    return next
      .handle()
      .pipe
      // Lógica após a chamada da API
      ();
  }
}
