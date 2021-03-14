import { of } from 'rxjs';
import { LoggingInterceptor } from './logging.interceptor';

const mockCtx = {
  mockArgs: [
    undefined,
    {},
    {},
    {
      path: {
        typename: 'mock_typename',
        key: 'mock_key',
      },
    },
  ],
  getArgByIndex: function (i: number) {
    return this.mockArgs[i];
  },
  getClass: function () {
    return {
      name: 'mock_class_name',
    };
  },
};

const mockNext = {
  handle: () => of({}),
};

describe('LoggingInterceptor', () => {
  let interceptor: LoggingInterceptor;

  beforeEach(() => {
    interceptor = new LoggingInterceptor();
  });

  it('should be defined', () => {
    expect(interceptor).toBeDefined();
  });

  it('should define `intercept` method', () => {
    expect(interceptor.intercept).toBeDefined();
  });

  it('should successfully return empty object with mockArgs', done => {
    interceptor.intercept(mockCtx as any, mockNext).subscribe({
      next: value => {
        expect(value).toEqual({});
      },
      error: error => {
        throw error;
      },
      complete: () => {
        done();
      },
    });
  });
});
