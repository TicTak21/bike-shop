import { Injectable, NestInterceptor, ExecutionContext, Logger, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  public intercept(ctx: ExecutionContext, next: CallHandler<unknown>): Observable<unknown> {
    const args = ctx.getArgByIndex(1);
    const desc = ctx.getArgByIndex(3);

    const {
      path: { typename, key },
    } = desc;

    const log = Logger.log(`${typename}: ${key} => ${JSON.stringify(args)}`, ctx.getClass().name);

    return next.handle().pipe(tap(() => log));
  }
}
