
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Whiteboard
 * 
 */
export type Whiteboard = $Result.DefaultSelection<Prisma.$WhiteboardPayload>
/**
 * Model Drawing
 * 
 */
export type Drawing = $Result.DefaultSelection<Prisma.$DrawingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whiteboard`: Exposes CRUD operations for the **Whiteboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whiteboards
    * const whiteboards = await prisma.whiteboard.findMany()
    * ```
    */
  get whiteboard(): Prisma.WhiteboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drawing`: Exposes CRUD operations for the **Drawing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drawings
    * const drawings = await prisma.drawing.findMany()
    * ```
    */
  get drawing(): Prisma.DrawingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Whiteboard: 'Whiteboard',
    Drawing: 'Drawing'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "whiteboard" | "drawing"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Whiteboard: {
        payload: Prisma.$WhiteboardPayload<ExtArgs>
        fields: Prisma.WhiteboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhiteboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhiteboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          findFirst: {
            args: Prisma.WhiteboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhiteboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          findMany: {
            args: Prisma.WhiteboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>[]
          }
          create: {
            args: Prisma.WhiteboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          createMany: {
            args: Prisma.WhiteboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhiteboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>[]
          }
          delete: {
            args: Prisma.WhiteboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          update: {
            args: Prisma.WhiteboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          deleteMany: {
            args: Prisma.WhiteboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhiteboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhiteboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>[]
          }
          upsert: {
            args: Prisma.WhiteboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          aggregate: {
            args: Prisma.WhiteboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhiteboard>
          }
          groupBy: {
            args: Prisma.WhiteboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhiteboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhiteboardCountArgs<ExtArgs>
            result: $Utils.Optional<WhiteboardCountAggregateOutputType> | number
          }
        }
      }
      Drawing: {
        payload: Prisma.$DrawingPayload<ExtArgs>
        fields: Prisma.DrawingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          findFirst: {
            args: Prisma.DrawingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          findMany: {
            args: Prisma.DrawingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>[]
          }
          create: {
            args: Prisma.DrawingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          createMany: {
            args: Prisma.DrawingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrawingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>[]
          }
          delete: {
            args: Prisma.DrawingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          update: {
            args: Prisma.DrawingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          deleteMany: {
            args: Prisma.DrawingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrawingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>[]
          }
          upsert: {
            args: Prisma.DrawingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawingPayload>
          }
          aggregate: {
            args: Prisma.DrawingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrawing>
          }
          groupBy: {
            args: Prisma.DrawingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawingCountArgs<ExtArgs>
            result: $Utils.Optional<DrawingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    whiteboard?: WhiteboardOmit
    drawing?: DrawingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    WhiteBoard: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WhiteBoard?: boolean | UserCountOutputTypeCountWhiteBoardArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWhiteBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardWhereInput
  }


  /**
   * Count Type WhiteboardCountOutputType
   */

  export type WhiteboardCountOutputType = {
    Users: number
    Drawing: number
  }

  export type WhiteboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | WhiteboardCountOutputTypeCountUsersArgs
    Drawing?: boolean | WhiteboardCountOutputTypeCountDrawingArgs
  }

  // Custom InputTypes
  /**
   * WhiteboardCountOutputType without action
   */
  export type WhiteboardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardCountOutputType
     */
    select?: WhiteboardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhiteboardCountOutputType without action
   */
  export type WhiteboardCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * WhiteboardCountOutputType without action
   */
  export type WhiteboardCountOutputTypeCountDrawingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawingWhereInput
  }


  /**
   * Count Type DrawingCountOutputType
   */

  export type DrawingCountOutputType = {
    WhiteBoard: number
  }

  export type DrawingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WhiteBoard?: boolean | DrawingCountOutputTypeCountWhiteBoardArgs
  }

  // Custom InputTypes
  /**
   * DrawingCountOutputType without action
   */
  export type DrawingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawingCountOutputType
     */
    select?: DrawingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrawingCountOutputType without action
   */
  export type DrawingCountOutputTypeCountWhiteBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    WhiteBoard?: boolean | User$WhiteBoardArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WhiteBoard?: boolean | User$WhiteBoardArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      WhiteBoard: Prisma.$WhiteboardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    WhiteBoard<T extends User$WhiteBoardArgs<ExtArgs> = {}>(args?: Subset<T, User$WhiteBoardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.WhiteBoard
   */
  export type User$WhiteBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    where?: WhiteboardWhereInput
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    cursor?: WhiteboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Whiteboard
   */

  export type AggregateWhiteboard = {
    _count: WhiteboardCountAggregateOutputType | null
    _min: WhiteboardMinAggregateOutputType | null
    _max: WhiteboardMaxAggregateOutputType | null
  }

  export type WhiteboardMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type WhiteboardMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type WhiteboardCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type WhiteboardMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type WhiteboardMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type WhiteboardCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type WhiteboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Whiteboard to aggregate.
     */
    where?: WhiteboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whiteboards to fetch.
     */
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhiteboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whiteboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whiteboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Whiteboards
    **/
    _count?: true | WhiteboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhiteboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhiteboardMaxAggregateInputType
  }

  export type GetWhiteboardAggregateType<T extends WhiteboardAggregateArgs> = {
        [P in keyof T & keyof AggregateWhiteboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhiteboard[P]>
      : GetScalarType<T[P], AggregateWhiteboard[P]>
  }




  export type WhiteboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardWhereInput
    orderBy?: WhiteboardOrderByWithAggregationInput | WhiteboardOrderByWithAggregationInput[]
    by: WhiteboardScalarFieldEnum[] | WhiteboardScalarFieldEnum
    having?: WhiteboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhiteboardCountAggregateInputType | true
    _min?: WhiteboardMinAggregateInputType
    _max?: WhiteboardMaxAggregateInputType
  }

  export type WhiteboardGroupByOutputType = {
    id: string
    name: string
    _count: WhiteboardCountAggregateOutputType | null
    _min: WhiteboardMinAggregateOutputType | null
    _max: WhiteboardMaxAggregateOutputType | null
  }

  type GetWhiteboardGroupByPayload<T extends WhiteboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhiteboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhiteboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhiteboardGroupByOutputType[P]>
            : GetScalarType<T[P], WhiteboardGroupByOutputType[P]>
        }
      >
    >


  export type WhiteboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Users?: boolean | Whiteboard$UsersArgs<ExtArgs>
    Drawing?: boolean | Whiteboard$DrawingArgs<ExtArgs>
    _count?: boolean | WhiteboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type WhiteboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["whiteboard"]>
  export type WhiteboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Whiteboard$UsersArgs<ExtArgs>
    Drawing?: boolean | Whiteboard$DrawingArgs<ExtArgs>
    _count?: boolean | WhiteboardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhiteboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WhiteboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WhiteboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Whiteboard"
    objects: {
      Users: Prisma.$UserPayload<ExtArgs>[]
      Drawing: Prisma.$DrawingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["whiteboard"]>
    composites: {}
  }

  type WhiteboardGetPayload<S extends boolean | null | undefined | WhiteboardDefaultArgs> = $Result.GetResult<Prisma.$WhiteboardPayload, S>

  type WhiteboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhiteboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhiteboardCountAggregateInputType | true
    }

  export interface WhiteboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Whiteboard'], meta: { name: 'Whiteboard' } }
    /**
     * Find zero or one Whiteboard that matches the filter.
     * @param {WhiteboardFindUniqueArgs} args - Arguments to find a Whiteboard
     * @example
     * // Get one Whiteboard
     * const whiteboard = await prisma.whiteboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhiteboardFindUniqueArgs>(args: SelectSubset<T, WhiteboardFindUniqueArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Whiteboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhiteboardFindUniqueOrThrowArgs} args - Arguments to find a Whiteboard
     * @example
     * // Get one Whiteboard
     * const whiteboard = await prisma.whiteboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhiteboardFindUniqueOrThrowArgs>(args: SelectSubset<T, WhiteboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whiteboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardFindFirstArgs} args - Arguments to find a Whiteboard
     * @example
     * // Get one Whiteboard
     * const whiteboard = await prisma.whiteboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhiteboardFindFirstArgs>(args?: SelectSubset<T, WhiteboardFindFirstArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whiteboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardFindFirstOrThrowArgs} args - Arguments to find a Whiteboard
     * @example
     * // Get one Whiteboard
     * const whiteboard = await prisma.whiteboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhiteboardFindFirstOrThrowArgs>(args?: SelectSubset<T, WhiteboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Whiteboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whiteboards
     * const whiteboards = await prisma.whiteboard.findMany()
     * 
     * // Get first 10 Whiteboards
     * const whiteboards = await prisma.whiteboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whiteboardWithIdOnly = await prisma.whiteboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhiteboardFindManyArgs>(args?: SelectSubset<T, WhiteboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Whiteboard.
     * @param {WhiteboardCreateArgs} args - Arguments to create a Whiteboard.
     * @example
     * // Create one Whiteboard
     * const Whiteboard = await prisma.whiteboard.create({
     *   data: {
     *     // ... data to create a Whiteboard
     *   }
     * })
     * 
     */
    create<T extends WhiteboardCreateArgs>(args: SelectSubset<T, WhiteboardCreateArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Whiteboards.
     * @param {WhiteboardCreateManyArgs} args - Arguments to create many Whiteboards.
     * @example
     * // Create many Whiteboards
     * const whiteboard = await prisma.whiteboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhiteboardCreateManyArgs>(args?: SelectSubset<T, WhiteboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Whiteboards and returns the data saved in the database.
     * @param {WhiteboardCreateManyAndReturnArgs} args - Arguments to create many Whiteboards.
     * @example
     * // Create many Whiteboards
     * const whiteboard = await prisma.whiteboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Whiteboards and only return the `id`
     * const whiteboardWithIdOnly = await prisma.whiteboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhiteboardCreateManyAndReturnArgs>(args?: SelectSubset<T, WhiteboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Whiteboard.
     * @param {WhiteboardDeleteArgs} args - Arguments to delete one Whiteboard.
     * @example
     * // Delete one Whiteboard
     * const Whiteboard = await prisma.whiteboard.delete({
     *   where: {
     *     // ... filter to delete one Whiteboard
     *   }
     * })
     * 
     */
    delete<T extends WhiteboardDeleteArgs>(args: SelectSubset<T, WhiteboardDeleteArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Whiteboard.
     * @param {WhiteboardUpdateArgs} args - Arguments to update one Whiteboard.
     * @example
     * // Update one Whiteboard
     * const whiteboard = await prisma.whiteboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhiteboardUpdateArgs>(args: SelectSubset<T, WhiteboardUpdateArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Whiteboards.
     * @param {WhiteboardDeleteManyArgs} args - Arguments to filter Whiteboards to delete.
     * @example
     * // Delete a few Whiteboards
     * const { count } = await prisma.whiteboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhiteboardDeleteManyArgs>(args?: SelectSubset<T, WhiteboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whiteboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whiteboards
     * const whiteboard = await prisma.whiteboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhiteboardUpdateManyArgs>(args: SelectSubset<T, WhiteboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whiteboards and returns the data updated in the database.
     * @param {WhiteboardUpdateManyAndReturnArgs} args - Arguments to update many Whiteboards.
     * @example
     * // Update many Whiteboards
     * const whiteboard = await prisma.whiteboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Whiteboards and only return the `id`
     * const whiteboardWithIdOnly = await prisma.whiteboard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WhiteboardUpdateManyAndReturnArgs>(args: SelectSubset<T, WhiteboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Whiteboard.
     * @param {WhiteboardUpsertArgs} args - Arguments to update or create a Whiteboard.
     * @example
     * // Update or create a Whiteboard
     * const whiteboard = await prisma.whiteboard.upsert({
     *   create: {
     *     // ... data to create a Whiteboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whiteboard we want to update
     *   }
     * })
     */
    upsert<T extends WhiteboardUpsertArgs>(args: SelectSubset<T, WhiteboardUpsertArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Whiteboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardCountArgs} args - Arguments to filter Whiteboards to count.
     * @example
     * // Count the number of Whiteboards
     * const count = await prisma.whiteboard.count({
     *   where: {
     *     // ... the filter for the Whiteboards we want to count
     *   }
     * })
    **/
    count<T extends WhiteboardCountArgs>(
      args?: Subset<T, WhiteboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhiteboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whiteboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WhiteboardAggregateArgs>(args: Subset<T, WhiteboardAggregateArgs>): Prisma.PrismaPromise<GetWhiteboardAggregateType<T>>

    /**
     * Group by Whiteboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WhiteboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhiteboardGroupByArgs['orderBy'] }
        : { orderBy?: WhiteboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WhiteboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhiteboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Whiteboard model
   */
  readonly fields: WhiteboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Whiteboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhiteboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Whiteboard$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Whiteboard$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Drawing<T extends Whiteboard$DrawingArgs<ExtArgs> = {}>(args?: Subset<T, Whiteboard$DrawingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Whiteboard model
   */
  interface WhiteboardFieldRefs {
    readonly id: FieldRef<"Whiteboard", 'String'>
    readonly name: FieldRef<"Whiteboard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Whiteboard findUnique
   */
  export type WhiteboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboard to fetch.
     */
    where: WhiteboardWhereUniqueInput
  }

  /**
   * Whiteboard findUniqueOrThrow
   */
  export type WhiteboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboard to fetch.
     */
    where: WhiteboardWhereUniqueInput
  }

  /**
   * Whiteboard findFirst
   */
  export type WhiteboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboard to fetch.
     */
    where?: WhiteboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whiteboards to fetch.
     */
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Whiteboards.
     */
    cursor?: WhiteboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whiteboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whiteboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Whiteboards.
     */
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * Whiteboard findFirstOrThrow
   */
  export type WhiteboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboard to fetch.
     */
    where?: WhiteboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whiteboards to fetch.
     */
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Whiteboards.
     */
    cursor?: WhiteboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whiteboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whiteboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Whiteboards.
     */
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * Whiteboard findMany
   */
  export type WhiteboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboards to fetch.
     */
    where?: WhiteboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whiteboards to fetch.
     */
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Whiteboards.
     */
    cursor?: WhiteboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whiteboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whiteboards.
     */
    skip?: number
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * Whiteboard create
   */
  export type WhiteboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Whiteboard.
     */
    data: XOR<WhiteboardCreateInput, WhiteboardUncheckedCreateInput>
  }

  /**
   * Whiteboard createMany
   */
  export type WhiteboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Whiteboards.
     */
    data: WhiteboardCreateManyInput | WhiteboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Whiteboard createManyAndReturn
   */
  export type WhiteboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * The data used to create many Whiteboards.
     */
    data: WhiteboardCreateManyInput | WhiteboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Whiteboard update
   */
  export type WhiteboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Whiteboard.
     */
    data: XOR<WhiteboardUpdateInput, WhiteboardUncheckedUpdateInput>
    /**
     * Choose, which Whiteboard to update.
     */
    where: WhiteboardWhereUniqueInput
  }

  /**
   * Whiteboard updateMany
   */
  export type WhiteboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Whiteboards.
     */
    data: XOR<WhiteboardUpdateManyMutationInput, WhiteboardUncheckedUpdateManyInput>
    /**
     * Filter which Whiteboards to update
     */
    where?: WhiteboardWhereInput
    /**
     * Limit how many Whiteboards to update.
     */
    limit?: number
  }

  /**
   * Whiteboard updateManyAndReturn
   */
  export type WhiteboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * The data used to update Whiteboards.
     */
    data: XOR<WhiteboardUpdateManyMutationInput, WhiteboardUncheckedUpdateManyInput>
    /**
     * Filter which Whiteboards to update
     */
    where?: WhiteboardWhereInput
    /**
     * Limit how many Whiteboards to update.
     */
    limit?: number
  }

  /**
   * Whiteboard upsert
   */
  export type WhiteboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Whiteboard to update in case it exists.
     */
    where: WhiteboardWhereUniqueInput
    /**
     * In case the Whiteboard found by the `where` argument doesn't exist, create a new Whiteboard with this data.
     */
    create: XOR<WhiteboardCreateInput, WhiteboardUncheckedCreateInput>
    /**
     * In case the Whiteboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhiteboardUpdateInput, WhiteboardUncheckedUpdateInput>
  }

  /**
   * Whiteboard delete
   */
  export type WhiteboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter which Whiteboard to delete.
     */
    where: WhiteboardWhereUniqueInput
  }

  /**
   * Whiteboard deleteMany
   */
  export type WhiteboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Whiteboards to delete
     */
    where?: WhiteboardWhereInput
    /**
     * Limit how many Whiteboards to delete.
     */
    limit?: number
  }

  /**
   * Whiteboard.Users
   */
  export type Whiteboard$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Whiteboard.Drawing
   */
  export type Whiteboard$DrawingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    where?: DrawingWhereInput
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    cursor?: DrawingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrawingScalarFieldEnum | DrawingScalarFieldEnum[]
  }

  /**
   * Whiteboard without action
   */
  export type WhiteboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
  }


  /**
   * Model Drawing
   */

  export type AggregateDrawing = {
    _count: DrawingCountAggregateOutputType | null
    _min: DrawingMinAggregateOutputType | null
    _max: DrawingMaxAggregateOutputType | null
  }

  export type DrawingMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DrawingMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DrawingCountAggregateOutputType = {
    id: number
    name: number
    DrawingData: number
    _all: number
  }


  export type DrawingMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DrawingMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DrawingCountAggregateInputType = {
    id?: true
    name?: true
    DrawingData?: true
    _all?: true
  }

  export type DrawingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drawing to aggregate.
     */
    where?: DrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drawings to fetch.
     */
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drawings
    **/
    _count?: true | DrawingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawingMaxAggregateInputType
  }

  export type GetDrawingAggregateType<T extends DrawingAggregateArgs> = {
        [P in keyof T & keyof AggregateDrawing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrawing[P]>
      : GetScalarType<T[P], AggregateDrawing[P]>
  }




  export type DrawingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawingWhereInput
    orderBy?: DrawingOrderByWithAggregationInput | DrawingOrderByWithAggregationInput[]
    by: DrawingScalarFieldEnum[] | DrawingScalarFieldEnum
    having?: DrawingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawingCountAggregateInputType | true
    _min?: DrawingMinAggregateInputType
    _max?: DrawingMaxAggregateInputType
  }

  export type DrawingGroupByOutputType = {
    id: string
    name: string
    DrawingData: JsonValue
    _count: DrawingCountAggregateOutputType | null
    _min: DrawingMinAggregateOutputType | null
    _max: DrawingMaxAggregateOutputType | null
  }

  type GetDrawingGroupByPayload<T extends DrawingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawingGroupByOutputType[P]>
            : GetScalarType<T[P], DrawingGroupByOutputType[P]>
        }
      >
    >


  export type DrawingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    DrawingData?: boolean
    WhiteBoard?: boolean | Drawing$WhiteBoardArgs<ExtArgs>
    _count?: boolean | DrawingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawing"]>

  export type DrawingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    DrawingData?: boolean
  }, ExtArgs["result"]["drawing"]>

  export type DrawingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    DrawingData?: boolean
  }, ExtArgs["result"]["drawing"]>

  export type DrawingSelectScalar = {
    id?: boolean
    name?: boolean
    DrawingData?: boolean
  }

  export type DrawingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "DrawingData", ExtArgs["result"]["drawing"]>
  export type DrawingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WhiteBoard?: boolean | Drawing$WhiteBoardArgs<ExtArgs>
    _count?: boolean | DrawingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DrawingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DrawingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DrawingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drawing"
    objects: {
      WhiteBoard: Prisma.$WhiteboardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      DrawingData: Prisma.JsonValue
    }, ExtArgs["result"]["drawing"]>
    composites: {}
  }

  type DrawingGetPayload<S extends boolean | null | undefined | DrawingDefaultArgs> = $Result.GetResult<Prisma.$DrawingPayload, S>

  type DrawingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawingCountAggregateInputType | true
    }

  export interface DrawingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drawing'], meta: { name: 'Drawing' } }
    /**
     * Find zero or one Drawing that matches the filter.
     * @param {DrawingFindUniqueArgs} args - Arguments to find a Drawing
     * @example
     * // Get one Drawing
     * const drawing = await prisma.drawing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawingFindUniqueArgs>(args: SelectSubset<T, DrawingFindUniqueArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drawing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawingFindUniqueOrThrowArgs} args - Arguments to find a Drawing
     * @example
     * // Get one Drawing
     * const drawing = await prisma.drawing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawingFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drawing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingFindFirstArgs} args - Arguments to find a Drawing
     * @example
     * // Get one Drawing
     * const drawing = await prisma.drawing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawingFindFirstArgs>(args?: SelectSubset<T, DrawingFindFirstArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drawing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingFindFirstOrThrowArgs} args - Arguments to find a Drawing
     * @example
     * // Get one Drawing
     * const drawing = await prisma.drawing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawingFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drawings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drawings
     * const drawings = await prisma.drawing.findMany()
     * 
     * // Get first 10 Drawings
     * const drawings = await prisma.drawing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawingWithIdOnly = await prisma.drawing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawingFindManyArgs>(args?: SelectSubset<T, DrawingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drawing.
     * @param {DrawingCreateArgs} args - Arguments to create a Drawing.
     * @example
     * // Create one Drawing
     * const Drawing = await prisma.drawing.create({
     *   data: {
     *     // ... data to create a Drawing
     *   }
     * })
     * 
     */
    create<T extends DrawingCreateArgs>(args: SelectSubset<T, DrawingCreateArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drawings.
     * @param {DrawingCreateManyArgs} args - Arguments to create many Drawings.
     * @example
     * // Create many Drawings
     * const drawing = await prisma.drawing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawingCreateManyArgs>(args?: SelectSubset<T, DrawingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drawings and returns the data saved in the database.
     * @param {DrawingCreateManyAndReturnArgs} args - Arguments to create many Drawings.
     * @example
     * // Create many Drawings
     * const drawing = await prisma.drawing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drawings and only return the `id`
     * const drawingWithIdOnly = await prisma.drawing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrawingCreateManyAndReturnArgs>(args?: SelectSubset<T, DrawingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drawing.
     * @param {DrawingDeleteArgs} args - Arguments to delete one Drawing.
     * @example
     * // Delete one Drawing
     * const Drawing = await prisma.drawing.delete({
     *   where: {
     *     // ... filter to delete one Drawing
     *   }
     * })
     * 
     */
    delete<T extends DrawingDeleteArgs>(args: SelectSubset<T, DrawingDeleteArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drawing.
     * @param {DrawingUpdateArgs} args - Arguments to update one Drawing.
     * @example
     * // Update one Drawing
     * const drawing = await prisma.drawing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawingUpdateArgs>(args: SelectSubset<T, DrawingUpdateArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drawings.
     * @param {DrawingDeleteManyArgs} args - Arguments to filter Drawings to delete.
     * @example
     * // Delete a few Drawings
     * const { count } = await prisma.drawing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawingDeleteManyArgs>(args?: SelectSubset<T, DrawingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drawings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drawings
     * const drawing = await prisma.drawing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawingUpdateManyArgs>(args: SelectSubset<T, DrawingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drawings and returns the data updated in the database.
     * @param {DrawingUpdateManyAndReturnArgs} args - Arguments to update many Drawings.
     * @example
     * // Update many Drawings
     * const drawing = await prisma.drawing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drawings and only return the `id`
     * const drawingWithIdOnly = await prisma.drawing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DrawingUpdateManyAndReturnArgs>(args: SelectSubset<T, DrawingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drawing.
     * @param {DrawingUpsertArgs} args - Arguments to update or create a Drawing.
     * @example
     * // Update or create a Drawing
     * const drawing = await prisma.drawing.upsert({
     *   create: {
     *     // ... data to create a Drawing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drawing we want to update
     *   }
     * })
     */
    upsert<T extends DrawingUpsertArgs>(args: SelectSubset<T, DrawingUpsertArgs<ExtArgs>>): Prisma__DrawingClient<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drawings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingCountArgs} args - Arguments to filter Drawings to count.
     * @example
     * // Count the number of Drawings
     * const count = await prisma.drawing.count({
     *   where: {
     *     // ... the filter for the Drawings we want to count
     *   }
     * })
    **/
    count<T extends DrawingCountArgs>(
      args?: Subset<T, DrawingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drawing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DrawingAggregateArgs>(args: Subset<T, DrawingAggregateArgs>): Prisma.PrismaPromise<GetDrawingAggregateType<T>>

    /**
     * Group by Drawing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DrawingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawingGroupByArgs['orderBy'] }
        : { orderBy?: DrawingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DrawingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drawing model
   */
  readonly fields: DrawingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drawing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    WhiteBoard<T extends Drawing$WhiteBoardArgs<ExtArgs> = {}>(args?: Subset<T, Drawing$WhiteBoardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Drawing model
   */
  interface DrawingFieldRefs {
    readonly id: FieldRef<"Drawing", 'String'>
    readonly name: FieldRef<"Drawing", 'String'>
    readonly DrawingData: FieldRef<"Drawing", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Drawing findUnique
   */
  export type DrawingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawing to fetch.
     */
    where: DrawingWhereUniqueInput
  }

  /**
   * Drawing findUniqueOrThrow
   */
  export type DrawingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawing to fetch.
     */
    where: DrawingWhereUniqueInput
  }

  /**
   * Drawing findFirst
   */
  export type DrawingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawing to fetch.
     */
    where?: DrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drawings to fetch.
     */
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drawings.
     */
    cursor?: DrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drawings.
     */
    distinct?: DrawingScalarFieldEnum | DrawingScalarFieldEnum[]
  }

  /**
   * Drawing findFirstOrThrow
   */
  export type DrawingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawing to fetch.
     */
    where?: DrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drawings to fetch.
     */
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drawings.
     */
    cursor?: DrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drawings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drawings.
     */
    distinct?: DrawingScalarFieldEnum | DrawingScalarFieldEnum[]
  }

  /**
   * Drawing findMany
   */
  export type DrawingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter, which Drawings to fetch.
     */
    where?: DrawingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drawings to fetch.
     */
    orderBy?: DrawingOrderByWithRelationInput | DrawingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drawings.
     */
    cursor?: DrawingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drawings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drawings.
     */
    skip?: number
    distinct?: DrawingScalarFieldEnum | DrawingScalarFieldEnum[]
  }

  /**
   * Drawing create
   */
  export type DrawingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * The data needed to create a Drawing.
     */
    data: XOR<DrawingCreateInput, DrawingUncheckedCreateInput>
  }

  /**
   * Drawing createMany
   */
  export type DrawingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drawings.
     */
    data: DrawingCreateManyInput | DrawingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drawing createManyAndReturn
   */
  export type DrawingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * The data used to create many Drawings.
     */
    data: DrawingCreateManyInput | DrawingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drawing update
   */
  export type DrawingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * The data needed to update a Drawing.
     */
    data: XOR<DrawingUpdateInput, DrawingUncheckedUpdateInput>
    /**
     * Choose, which Drawing to update.
     */
    where: DrawingWhereUniqueInput
  }

  /**
   * Drawing updateMany
   */
  export type DrawingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drawings.
     */
    data: XOR<DrawingUpdateManyMutationInput, DrawingUncheckedUpdateManyInput>
    /**
     * Filter which Drawings to update
     */
    where?: DrawingWhereInput
    /**
     * Limit how many Drawings to update.
     */
    limit?: number
  }

  /**
   * Drawing updateManyAndReturn
   */
  export type DrawingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * The data used to update Drawings.
     */
    data: XOR<DrawingUpdateManyMutationInput, DrawingUncheckedUpdateManyInput>
    /**
     * Filter which Drawings to update
     */
    where?: DrawingWhereInput
    /**
     * Limit how many Drawings to update.
     */
    limit?: number
  }

  /**
   * Drawing upsert
   */
  export type DrawingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * The filter to search for the Drawing to update in case it exists.
     */
    where: DrawingWhereUniqueInput
    /**
     * In case the Drawing found by the `where` argument doesn't exist, create a new Drawing with this data.
     */
    create: XOR<DrawingCreateInput, DrawingUncheckedCreateInput>
    /**
     * In case the Drawing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawingUpdateInput, DrawingUncheckedUpdateInput>
  }

  /**
   * Drawing delete
   */
  export type DrawingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
    /**
     * Filter which Drawing to delete.
     */
    where: DrawingWhereUniqueInput
  }

  /**
   * Drawing deleteMany
   */
  export type DrawingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drawings to delete
     */
    where?: DrawingWhereInput
    /**
     * Limit how many Drawings to delete.
     */
    limit?: number
  }

  /**
   * Drawing.WhiteBoard
   */
  export type Drawing$WhiteBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    where?: WhiteboardWhereInput
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    cursor?: WhiteboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * Drawing without action
   */
  export type DrawingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drawing
     */
    select?: DrawingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drawing
     */
    omit?: DrawingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WhiteboardScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type WhiteboardScalarFieldEnum = (typeof WhiteboardScalarFieldEnum)[keyof typeof WhiteboardScalarFieldEnum]


  export const DrawingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    DrawingData: 'DrawingData'
  };

  export type DrawingScalarFieldEnum = (typeof DrawingScalarFieldEnum)[keyof typeof DrawingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    WhiteBoard?: WhiteboardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    WhiteBoard?: WhiteboardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    WhiteBoard?: WhiteboardListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type WhiteboardWhereInput = {
    AND?: WhiteboardWhereInput | WhiteboardWhereInput[]
    OR?: WhiteboardWhereInput[]
    NOT?: WhiteboardWhereInput | WhiteboardWhereInput[]
    id?: StringFilter<"Whiteboard"> | string
    name?: StringFilter<"Whiteboard"> | string
    Users?: UserListRelationFilter
    Drawing?: DrawingListRelationFilter
  }

  export type WhiteboardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Users?: UserOrderByRelationAggregateInput
    Drawing?: DrawingOrderByRelationAggregateInput
  }

  export type WhiteboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhiteboardWhereInput | WhiteboardWhereInput[]
    OR?: WhiteboardWhereInput[]
    NOT?: WhiteboardWhereInput | WhiteboardWhereInput[]
    name?: StringFilter<"Whiteboard"> | string
    Users?: UserListRelationFilter
    Drawing?: DrawingListRelationFilter
  }, "id">

  export type WhiteboardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: WhiteboardCountOrderByAggregateInput
    _max?: WhiteboardMaxOrderByAggregateInput
    _min?: WhiteboardMinOrderByAggregateInput
  }

  export type WhiteboardScalarWhereWithAggregatesInput = {
    AND?: WhiteboardScalarWhereWithAggregatesInput | WhiteboardScalarWhereWithAggregatesInput[]
    OR?: WhiteboardScalarWhereWithAggregatesInput[]
    NOT?: WhiteboardScalarWhereWithAggregatesInput | WhiteboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Whiteboard"> | string
    name?: StringWithAggregatesFilter<"Whiteboard"> | string
  }

  export type DrawingWhereInput = {
    AND?: DrawingWhereInput | DrawingWhereInput[]
    OR?: DrawingWhereInput[]
    NOT?: DrawingWhereInput | DrawingWhereInput[]
    id?: StringFilter<"Drawing"> | string
    name?: StringFilter<"Drawing"> | string
    DrawingData?: JsonFilter<"Drawing">
    WhiteBoard?: WhiteboardListRelationFilter
  }

  export type DrawingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    DrawingData?: SortOrder
    WhiteBoard?: WhiteboardOrderByRelationAggregateInput
  }

  export type DrawingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrawingWhereInput | DrawingWhereInput[]
    OR?: DrawingWhereInput[]
    NOT?: DrawingWhereInput | DrawingWhereInput[]
    name?: StringFilter<"Drawing"> | string
    DrawingData?: JsonFilter<"Drawing">
    WhiteBoard?: WhiteboardListRelationFilter
  }, "id">

  export type DrawingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    DrawingData?: SortOrder
    _count?: DrawingCountOrderByAggregateInput
    _max?: DrawingMaxOrderByAggregateInput
    _min?: DrawingMinOrderByAggregateInput
  }

  export type DrawingScalarWhereWithAggregatesInput = {
    AND?: DrawingScalarWhereWithAggregatesInput | DrawingScalarWhereWithAggregatesInput[]
    OR?: DrawingScalarWhereWithAggregatesInput[]
    NOT?: DrawingScalarWhereWithAggregatesInput | DrawingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drawing"> | string
    name?: StringWithAggregatesFilter<"Drawing"> | string
    DrawingData?: JsonWithAggregatesFilter<"Drawing">
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    WhiteBoard?: WhiteboardCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    WhiteBoard?: WhiteboardUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    WhiteBoard?: WhiteboardUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    WhiteBoard?: WhiteboardUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type WhiteboardCreateInput = {
    id?: string
    name: string
    Users?: UserCreateNestedManyWithoutWhiteBoardInput
    Drawing?: DrawingCreateNestedManyWithoutWhiteBoardInput
  }

  export type WhiteboardUncheckedCreateInput = {
    id?: string
    name: string
    Users?: UserUncheckedCreateNestedManyWithoutWhiteBoardInput
    Drawing?: DrawingUncheckedCreateNestedManyWithoutWhiteBoardInput
  }

  export type WhiteboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Users?: UserUpdateManyWithoutWhiteBoardNestedInput
    Drawing?: DrawingUpdateManyWithoutWhiteBoardNestedInput
  }

  export type WhiteboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Users?: UserUncheckedUpdateManyWithoutWhiteBoardNestedInput
    Drawing?: DrawingUncheckedUpdateManyWithoutWhiteBoardNestedInput
  }

  export type WhiteboardCreateManyInput = {
    id?: string
    name: string
  }

  export type WhiteboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WhiteboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DrawingCreateInput = {
    id?: string
    name: string
    DrawingData: JsonNullValueInput | InputJsonValue
    WhiteBoard?: WhiteboardCreateNestedManyWithoutDrawingInput
  }

  export type DrawingUncheckedCreateInput = {
    id?: string
    name: string
    DrawingData: JsonNullValueInput | InputJsonValue
    WhiteBoard?: WhiteboardUncheckedCreateNestedManyWithoutDrawingInput
  }

  export type DrawingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    WhiteBoard?: WhiteboardUpdateManyWithoutDrawingNestedInput
  }

  export type DrawingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    WhiteBoard?: WhiteboardUncheckedUpdateManyWithoutDrawingNestedInput
  }

  export type DrawingCreateManyInput = {
    id?: string
    name: string
    DrawingData: JsonNullValueInput | InputJsonValue
  }

  export type DrawingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
  }

  export type DrawingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type WhiteboardListRelationFilter = {
    every?: WhiteboardWhereInput
    some?: WhiteboardWhereInput
    none?: WhiteboardWhereInput
  }

  export type WhiteboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DrawingListRelationFilter = {
    every?: DrawingWhereInput
    some?: DrawingWhereInput
    none?: DrawingWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrawingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhiteboardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WhiteboardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WhiteboardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DrawingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    DrawingData?: SortOrder
  }

  export type DrawingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DrawingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type WhiteboardCreateNestedManyWithoutUsersInput = {
    create?: XOR<WhiteboardCreateWithoutUsersInput, WhiteboardUncheckedCreateWithoutUsersInput> | WhiteboardCreateWithoutUsersInput[] | WhiteboardUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutUsersInput | WhiteboardCreateOrConnectWithoutUsersInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
  }

  export type WhiteboardUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<WhiteboardCreateWithoutUsersInput, WhiteboardUncheckedCreateWithoutUsersInput> | WhiteboardCreateWithoutUsersInput[] | WhiteboardUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutUsersInput | WhiteboardCreateOrConnectWithoutUsersInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WhiteboardUpdateManyWithoutUsersNestedInput = {
    create?: XOR<WhiteboardCreateWithoutUsersInput, WhiteboardUncheckedCreateWithoutUsersInput> | WhiteboardCreateWithoutUsersInput[] | WhiteboardUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutUsersInput | WhiteboardCreateOrConnectWithoutUsersInput[]
    upsert?: WhiteboardUpsertWithWhereUniqueWithoutUsersInput | WhiteboardUpsertWithWhereUniqueWithoutUsersInput[]
    set?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    disconnect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    delete?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    update?: WhiteboardUpdateWithWhereUniqueWithoutUsersInput | WhiteboardUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: WhiteboardUpdateManyWithWhereWithoutUsersInput | WhiteboardUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
  }

  export type WhiteboardUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<WhiteboardCreateWithoutUsersInput, WhiteboardUncheckedCreateWithoutUsersInput> | WhiteboardCreateWithoutUsersInput[] | WhiteboardUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutUsersInput | WhiteboardCreateOrConnectWithoutUsersInput[]
    upsert?: WhiteboardUpsertWithWhereUniqueWithoutUsersInput | WhiteboardUpsertWithWhereUniqueWithoutUsersInput[]
    set?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    disconnect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    delete?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    update?: WhiteboardUpdateWithWhereUniqueWithoutUsersInput | WhiteboardUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: WhiteboardUpdateManyWithWhereWithoutUsersInput | WhiteboardUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutWhiteBoardInput = {
    create?: XOR<UserCreateWithoutWhiteBoardInput, UserUncheckedCreateWithoutWhiteBoardInput> | UserCreateWithoutWhiteBoardInput[] | UserUncheckedCreateWithoutWhiteBoardInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWhiteBoardInput | UserCreateOrConnectWithoutWhiteBoardInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DrawingCreateNestedManyWithoutWhiteBoardInput = {
    create?: XOR<DrawingCreateWithoutWhiteBoardInput, DrawingUncheckedCreateWithoutWhiteBoardInput> | DrawingCreateWithoutWhiteBoardInput[] | DrawingUncheckedCreateWithoutWhiteBoardInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutWhiteBoardInput | DrawingCreateOrConnectWithoutWhiteBoardInput[]
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutWhiteBoardInput = {
    create?: XOR<UserCreateWithoutWhiteBoardInput, UserUncheckedCreateWithoutWhiteBoardInput> | UserCreateWithoutWhiteBoardInput[] | UserUncheckedCreateWithoutWhiteBoardInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWhiteBoardInput | UserCreateOrConnectWithoutWhiteBoardInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DrawingUncheckedCreateNestedManyWithoutWhiteBoardInput = {
    create?: XOR<DrawingCreateWithoutWhiteBoardInput, DrawingUncheckedCreateWithoutWhiteBoardInput> | DrawingCreateWithoutWhiteBoardInput[] | DrawingUncheckedCreateWithoutWhiteBoardInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutWhiteBoardInput | DrawingCreateOrConnectWithoutWhiteBoardInput[]
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutWhiteBoardNestedInput = {
    create?: XOR<UserCreateWithoutWhiteBoardInput, UserUncheckedCreateWithoutWhiteBoardInput> | UserCreateWithoutWhiteBoardInput[] | UserUncheckedCreateWithoutWhiteBoardInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWhiteBoardInput | UserCreateOrConnectWithoutWhiteBoardInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWhiteBoardInput | UserUpsertWithWhereUniqueWithoutWhiteBoardInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWhiteBoardInput | UserUpdateWithWhereUniqueWithoutWhiteBoardInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWhiteBoardInput | UserUpdateManyWithWhereWithoutWhiteBoardInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DrawingUpdateManyWithoutWhiteBoardNestedInput = {
    create?: XOR<DrawingCreateWithoutWhiteBoardInput, DrawingUncheckedCreateWithoutWhiteBoardInput> | DrawingCreateWithoutWhiteBoardInput[] | DrawingUncheckedCreateWithoutWhiteBoardInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutWhiteBoardInput | DrawingCreateOrConnectWithoutWhiteBoardInput[]
    upsert?: DrawingUpsertWithWhereUniqueWithoutWhiteBoardInput | DrawingUpsertWithWhereUniqueWithoutWhiteBoardInput[]
    set?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    disconnect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    delete?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    update?: DrawingUpdateWithWhereUniqueWithoutWhiteBoardInput | DrawingUpdateWithWhereUniqueWithoutWhiteBoardInput[]
    updateMany?: DrawingUpdateManyWithWhereWithoutWhiteBoardInput | DrawingUpdateManyWithWhereWithoutWhiteBoardInput[]
    deleteMany?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutWhiteBoardNestedInput = {
    create?: XOR<UserCreateWithoutWhiteBoardInput, UserUncheckedCreateWithoutWhiteBoardInput> | UserCreateWithoutWhiteBoardInput[] | UserUncheckedCreateWithoutWhiteBoardInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWhiteBoardInput | UserCreateOrConnectWithoutWhiteBoardInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWhiteBoardInput | UserUpsertWithWhereUniqueWithoutWhiteBoardInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWhiteBoardInput | UserUpdateWithWhereUniqueWithoutWhiteBoardInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWhiteBoardInput | UserUpdateManyWithWhereWithoutWhiteBoardInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DrawingUncheckedUpdateManyWithoutWhiteBoardNestedInput = {
    create?: XOR<DrawingCreateWithoutWhiteBoardInput, DrawingUncheckedCreateWithoutWhiteBoardInput> | DrawingCreateWithoutWhiteBoardInput[] | DrawingUncheckedCreateWithoutWhiteBoardInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutWhiteBoardInput | DrawingCreateOrConnectWithoutWhiteBoardInput[]
    upsert?: DrawingUpsertWithWhereUniqueWithoutWhiteBoardInput | DrawingUpsertWithWhereUniqueWithoutWhiteBoardInput[]
    set?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    disconnect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    delete?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    update?: DrawingUpdateWithWhereUniqueWithoutWhiteBoardInput | DrawingUpdateWithWhereUniqueWithoutWhiteBoardInput[]
    updateMany?: DrawingUpdateManyWithWhereWithoutWhiteBoardInput | DrawingUpdateManyWithWhereWithoutWhiteBoardInput[]
    deleteMany?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
  }

  export type WhiteboardCreateNestedManyWithoutDrawingInput = {
    create?: XOR<WhiteboardCreateWithoutDrawingInput, WhiteboardUncheckedCreateWithoutDrawingInput> | WhiteboardCreateWithoutDrawingInput[] | WhiteboardUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutDrawingInput | WhiteboardCreateOrConnectWithoutDrawingInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
  }

  export type WhiteboardUncheckedCreateNestedManyWithoutDrawingInput = {
    create?: XOR<WhiteboardCreateWithoutDrawingInput, WhiteboardUncheckedCreateWithoutDrawingInput> | WhiteboardCreateWithoutDrawingInput[] | WhiteboardUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutDrawingInput | WhiteboardCreateOrConnectWithoutDrawingInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
  }

  export type WhiteboardUpdateManyWithoutDrawingNestedInput = {
    create?: XOR<WhiteboardCreateWithoutDrawingInput, WhiteboardUncheckedCreateWithoutDrawingInput> | WhiteboardCreateWithoutDrawingInput[] | WhiteboardUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutDrawingInput | WhiteboardCreateOrConnectWithoutDrawingInput[]
    upsert?: WhiteboardUpsertWithWhereUniqueWithoutDrawingInput | WhiteboardUpsertWithWhereUniqueWithoutDrawingInput[]
    set?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    disconnect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    delete?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    update?: WhiteboardUpdateWithWhereUniqueWithoutDrawingInput | WhiteboardUpdateWithWhereUniqueWithoutDrawingInput[]
    updateMany?: WhiteboardUpdateManyWithWhereWithoutDrawingInput | WhiteboardUpdateManyWithWhereWithoutDrawingInput[]
    deleteMany?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
  }

  export type WhiteboardUncheckedUpdateManyWithoutDrawingNestedInput = {
    create?: XOR<WhiteboardCreateWithoutDrawingInput, WhiteboardUncheckedCreateWithoutDrawingInput> | WhiteboardCreateWithoutDrawingInput[] | WhiteboardUncheckedCreateWithoutDrawingInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutDrawingInput | WhiteboardCreateOrConnectWithoutDrawingInput[]
    upsert?: WhiteboardUpsertWithWhereUniqueWithoutDrawingInput | WhiteboardUpsertWithWhereUniqueWithoutDrawingInput[]
    set?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    disconnect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    delete?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    update?: WhiteboardUpdateWithWhereUniqueWithoutDrawingInput | WhiteboardUpdateWithWhereUniqueWithoutDrawingInput[]
    updateMany?: WhiteboardUpdateManyWithWhereWithoutDrawingInput | WhiteboardUpdateManyWithWhereWithoutDrawingInput[]
    deleteMany?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WhiteboardCreateWithoutUsersInput = {
    id?: string
    name: string
    Drawing?: DrawingCreateNestedManyWithoutWhiteBoardInput
  }

  export type WhiteboardUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    Drawing?: DrawingUncheckedCreateNestedManyWithoutWhiteBoardInput
  }

  export type WhiteboardCreateOrConnectWithoutUsersInput = {
    where: WhiteboardWhereUniqueInput
    create: XOR<WhiteboardCreateWithoutUsersInput, WhiteboardUncheckedCreateWithoutUsersInput>
  }

  export type WhiteboardUpsertWithWhereUniqueWithoutUsersInput = {
    where: WhiteboardWhereUniqueInput
    update: XOR<WhiteboardUpdateWithoutUsersInput, WhiteboardUncheckedUpdateWithoutUsersInput>
    create: XOR<WhiteboardCreateWithoutUsersInput, WhiteboardUncheckedCreateWithoutUsersInput>
  }

  export type WhiteboardUpdateWithWhereUniqueWithoutUsersInput = {
    where: WhiteboardWhereUniqueInput
    data: XOR<WhiteboardUpdateWithoutUsersInput, WhiteboardUncheckedUpdateWithoutUsersInput>
  }

  export type WhiteboardUpdateManyWithWhereWithoutUsersInput = {
    where: WhiteboardScalarWhereInput
    data: XOR<WhiteboardUpdateManyMutationInput, WhiteboardUncheckedUpdateManyWithoutUsersInput>
  }

  export type WhiteboardScalarWhereInput = {
    AND?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
    OR?: WhiteboardScalarWhereInput[]
    NOT?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
    id?: StringFilter<"Whiteboard"> | string
    name?: StringFilter<"Whiteboard"> | string
  }

  export type UserCreateWithoutWhiteBoardInput = {
    id?: string
    name: string
    password: string
  }

  export type UserUncheckedCreateWithoutWhiteBoardInput = {
    id?: string
    name: string
    password: string
  }

  export type UserCreateOrConnectWithoutWhiteBoardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWhiteBoardInput, UserUncheckedCreateWithoutWhiteBoardInput>
  }

  export type DrawingCreateWithoutWhiteBoardInput = {
    id?: string
    name: string
    DrawingData: JsonNullValueInput | InputJsonValue
  }

  export type DrawingUncheckedCreateWithoutWhiteBoardInput = {
    id?: string
    name: string
    DrawingData: JsonNullValueInput | InputJsonValue
  }

  export type DrawingCreateOrConnectWithoutWhiteBoardInput = {
    where: DrawingWhereUniqueInput
    create: XOR<DrawingCreateWithoutWhiteBoardInput, DrawingUncheckedCreateWithoutWhiteBoardInput>
  }

  export type UserUpsertWithWhereUniqueWithoutWhiteBoardInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWhiteBoardInput, UserUncheckedUpdateWithoutWhiteBoardInput>
    create: XOR<UserCreateWithoutWhiteBoardInput, UserUncheckedCreateWithoutWhiteBoardInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWhiteBoardInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWhiteBoardInput, UserUncheckedUpdateWithoutWhiteBoardInput>
  }

  export type UserUpdateManyWithWhereWithoutWhiteBoardInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutWhiteBoardInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type DrawingUpsertWithWhereUniqueWithoutWhiteBoardInput = {
    where: DrawingWhereUniqueInput
    update: XOR<DrawingUpdateWithoutWhiteBoardInput, DrawingUncheckedUpdateWithoutWhiteBoardInput>
    create: XOR<DrawingCreateWithoutWhiteBoardInput, DrawingUncheckedCreateWithoutWhiteBoardInput>
  }

  export type DrawingUpdateWithWhereUniqueWithoutWhiteBoardInput = {
    where: DrawingWhereUniqueInput
    data: XOR<DrawingUpdateWithoutWhiteBoardInput, DrawingUncheckedUpdateWithoutWhiteBoardInput>
  }

  export type DrawingUpdateManyWithWhereWithoutWhiteBoardInput = {
    where: DrawingScalarWhereInput
    data: XOR<DrawingUpdateManyMutationInput, DrawingUncheckedUpdateManyWithoutWhiteBoardInput>
  }

  export type DrawingScalarWhereInput = {
    AND?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
    OR?: DrawingScalarWhereInput[]
    NOT?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
    id?: StringFilter<"Drawing"> | string
    name?: StringFilter<"Drawing"> | string
    DrawingData?: JsonFilter<"Drawing">
  }

  export type WhiteboardCreateWithoutDrawingInput = {
    id?: string
    name: string
    Users?: UserCreateNestedManyWithoutWhiteBoardInput
  }

  export type WhiteboardUncheckedCreateWithoutDrawingInput = {
    id?: string
    name: string
    Users?: UserUncheckedCreateNestedManyWithoutWhiteBoardInput
  }

  export type WhiteboardCreateOrConnectWithoutDrawingInput = {
    where: WhiteboardWhereUniqueInput
    create: XOR<WhiteboardCreateWithoutDrawingInput, WhiteboardUncheckedCreateWithoutDrawingInput>
  }

  export type WhiteboardUpsertWithWhereUniqueWithoutDrawingInput = {
    where: WhiteboardWhereUniqueInput
    update: XOR<WhiteboardUpdateWithoutDrawingInput, WhiteboardUncheckedUpdateWithoutDrawingInput>
    create: XOR<WhiteboardCreateWithoutDrawingInput, WhiteboardUncheckedCreateWithoutDrawingInput>
  }

  export type WhiteboardUpdateWithWhereUniqueWithoutDrawingInput = {
    where: WhiteboardWhereUniqueInput
    data: XOR<WhiteboardUpdateWithoutDrawingInput, WhiteboardUncheckedUpdateWithoutDrawingInput>
  }

  export type WhiteboardUpdateManyWithWhereWithoutDrawingInput = {
    where: WhiteboardScalarWhereInput
    data: XOR<WhiteboardUpdateManyMutationInput, WhiteboardUncheckedUpdateManyWithoutDrawingInput>
  }

  export type WhiteboardUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Drawing?: DrawingUpdateManyWithoutWhiteBoardNestedInput
  }

  export type WhiteboardUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Drawing?: DrawingUncheckedUpdateManyWithoutWhiteBoardNestedInput
  }

  export type WhiteboardUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutWhiteBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutWhiteBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyWithoutWhiteBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DrawingUpdateWithoutWhiteBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
  }

  export type DrawingUncheckedUpdateWithoutWhiteBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
  }

  export type DrawingUncheckedUpdateManyWithoutWhiteBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
  }

  export type WhiteboardUpdateWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Users?: UserUpdateManyWithoutWhiteBoardNestedInput
  }

  export type WhiteboardUncheckedUpdateWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Users?: UserUncheckedUpdateManyWithoutWhiteBoardNestedInput
  }

  export type WhiteboardUncheckedUpdateManyWithoutDrawingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}