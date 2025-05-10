
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
 * Model WhiteboardShare
 * 
 */
export type WhiteboardShare = $Result.DefaultSelection<Prisma.$WhiteboardSharePayload>
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
   * `prisma.whiteboardShare`: Exposes CRUD operations for the **WhiteboardShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhiteboardShares
    * const whiteboardShares = await prisma.whiteboardShare.findMany()
    * ```
    */
  get whiteboardShare(): Prisma.WhiteboardShareDelegate<ExtArgs, ClientOptions>;

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
    WhiteboardShare: 'WhiteboardShare',
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
      modelProps: "user" | "whiteboard" | "whiteboardShare" | "drawing"
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
      WhiteboardShare: {
        payload: Prisma.$WhiteboardSharePayload<ExtArgs>
        fields: Prisma.WhiteboardShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhiteboardShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhiteboardShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>
          }
          findFirst: {
            args: Prisma.WhiteboardShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhiteboardShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>
          }
          findMany: {
            args: Prisma.WhiteboardShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>[]
          }
          create: {
            args: Prisma.WhiteboardShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>
          }
          createMany: {
            args: Prisma.WhiteboardShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhiteboardShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>[]
          }
          delete: {
            args: Prisma.WhiteboardShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>
          }
          update: {
            args: Prisma.WhiteboardShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>
          }
          deleteMany: {
            args: Prisma.WhiteboardShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhiteboardShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhiteboardShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>[]
          }
          upsert: {
            args: Prisma.WhiteboardShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardSharePayload>
          }
          aggregate: {
            args: Prisma.WhiteboardShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhiteboardShare>
          }
          groupBy: {
            args: Prisma.WhiteboardShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhiteboardShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhiteboardShareCountArgs<ExtArgs>
            result: $Utils.Optional<WhiteboardShareCountAggregateOutputType> | number
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
    whiteboardShare?: WhiteboardShareOmit
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
    Whiteboard: number
    SharedWhiteboard: number
    ReceivedWhiteboard: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Whiteboard?: boolean | UserCountOutputTypeCountWhiteboardArgs
    SharedWhiteboard?: boolean | UserCountOutputTypeCountSharedWhiteboardArgs
    ReceivedWhiteboard?: boolean | UserCountOutputTypeCountReceivedWhiteboardArgs
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
  export type UserCountOutputTypeCountWhiteboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedWhiteboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedWhiteboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardShareWhereInput
  }


  /**
   * Count Type WhiteboardCountOutputType
   */

  export type WhiteboardCountOutputType = {
    Shares: number
    Drawings: number
  }

  export type WhiteboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Shares?: boolean | WhiteboardCountOutputTypeCountSharesArgs
    Drawings?: boolean | WhiteboardCountOutputTypeCountDrawingsArgs
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
  export type WhiteboardCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardShareWhereInput
  }

  /**
   * WhiteboardCountOutputType without action
   */
  export type WhiteboardCountOutputTypeCountDrawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawingWhereInput
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
    Whiteboard?: boolean | User$WhiteboardArgs<ExtArgs>
    SharedWhiteboard?: boolean | User$SharedWhiteboardArgs<ExtArgs>
    ReceivedWhiteboard?: boolean | User$ReceivedWhiteboardArgs<ExtArgs>
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
    Whiteboard?: boolean | User$WhiteboardArgs<ExtArgs>
    SharedWhiteboard?: boolean | User$SharedWhiteboardArgs<ExtArgs>
    ReceivedWhiteboard?: boolean | User$ReceivedWhiteboardArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Whiteboard: Prisma.$WhiteboardPayload<ExtArgs>[]
      SharedWhiteboard: Prisma.$WhiteboardSharePayload<ExtArgs>[]
      ReceivedWhiteboard: Prisma.$WhiteboardSharePayload<ExtArgs>[]
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
    Whiteboard<T extends User$WhiteboardArgs<ExtArgs> = {}>(args?: Subset<T, User$WhiteboardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SharedWhiteboard<T extends User$SharedWhiteboardArgs<ExtArgs> = {}>(args?: Subset<T, User$SharedWhiteboardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReceivedWhiteboard<T extends User$ReceivedWhiteboardArgs<ExtArgs> = {}>(args?: Subset<T, User$ReceivedWhiteboardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.Whiteboard
   */
  export type User$WhiteboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.SharedWhiteboard
   */
  export type User$SharedWhiteboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    where?: WhiteboardShareWhereInput
    orderBy?: WhiteboardShareOrderByWithRelationInput | WhiteboardShareOrderByWithRelationInput[]
    cursor?: WhiteboardShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhiteboardShareScalarFieldEnum | WhiteboardShareScalarFieldEnum[]
  }

  /**
   * User.ReceivedWhiteboard
   */
  export type User$ReceivedWhiteboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    where?: WhiteboardShareWhereInput
    orderBy?: WhiteboardShareOrderByWithRelationInput | WhiteboardShareOrderByWithRelationInput[]
    cursor?: WhiteboardShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhiteboardShareScalarFieldEnum | WhiteboardShareScalarFieldEnum[]
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
    OwnerID: string | null
  }

  export type WhiteboardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    OwnerID: string | null
  }

  export type WhiteboardCountAggregateOutputType = {
    id: number
    name: number
    OwnerID: number
    _all: number
  }


  export type WhiteboardMinAggregateInputType = {
    id?: true
    name?: true
    OwnerID?: true
  }

  export type WhiteboardMaxAggregateInputType = {
    id?: true
    name?: true
    OwnerID?: true
  }

  export type WhiteboardCountAggregateInputType = {
    id?: true
    name?: true
    OwnerID?: true
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
    OwnerID: string
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
    OwnerID?: boolean
    Owner?: boolean | UserDefaultArgs<ExtArgs>
    Shares?: boolean | Whiteboard$SharesArgs<ExtArgs>
    Drawings?: boolean | Whiteboard$DrawingsArgs<ExtArgs>
    _count?: boolean | WhiteboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    OwnerID?: boolean
    Owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    OwnerID?: boolean
    Owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectScalar = {
    id?: boolean
    name?: boolean
    OwnerID?: boolean
  }

  export type WhiteboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "OwnerID", ExtArgs["result"]["whiteboard"]>
  export type WhiteboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Owner?: boolean | UserDefaultArgs<ExtArgs>
    Shares?: boolean | Whiteboard$SharesArgs<ExtArgs>
    Drawings?: boolean | Whiteboard$DrawingsArgs<ExtArgs>
    _count?: boolean | WhiteboardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhiteboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WhiteboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WhiteboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Whiteboard"
    objects: {
      Owner: Prisma.$UserPayload<ExtArgs>
      Shares: Prisma.$WhiteboardSharePayload<ExtArgs>[]
      Drawings: Prisma.$DrawingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      OwnerID: string
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
    Owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Shares<T extends Whiteboard$SharesArgs<ExtArgs> = {}>(args?: Subset<T, Whiteboard$SharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Drawings<T extends Whiteboard$DrawingsArgs<ExtArgs> = {}>(args?: Subset<T, Whiteboard$DrawingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly OwnerID: FieldRef<"Whiteboard", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Whiteboard.Shares
   */
  export type Whiteboard$SharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    where?: WhiteboardShareWhereInput
    orderBy?: WhiteboardShareOrderByWithRelationInput | WhiteboardShareOrderByWithRelationInput[]
    cursor?: WhiteboardShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhiteboardShareScalarFieldEnum | WhiteboardShareScalarFieldEnum[]
  }

  /**
   * Whiteboard.Drawings
   */
  export type Whiteboard$DrawingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model WhiteboardShare
   */

  export type AggregateWhiteboardShare = {
    _count: WhiteboardShareCountAggregateOutputType | null
    _min: WhiteboardShareMinAggregateOutputType | null
    _max: WhiteboardShareMaxAggregateOutputType | null
  }

  export type WhiteboardShareMinAggregateOutputType = {
    id: string | null
    name: string | null
    WhiteboardId: string | null
    SharerId: string | null
    ReceiverId: string | null
    SharedAt: Date | null
  }

  export type WhiteboardShareMaxAggregateOutputType = {
    id: string | null
    name: string | null
    WhiteboardId: string | null
    SharerId: string | null
    ReceiverId: string | null
    SharedAt: Date | null
  }

  export type WhiteboardShareCountAggregateOutputType = {
    id: number
    name: number
    WhiteboardId: number
    SharerId: number
    ReceiverId: number
    SharedAt: number
    _all: number
  }


  export type WhiteboardShareMinAggregateInputType = {
    id?: true
    name?: true
    WhiteboardId?: true
    SharerId?: true
    ReceiverId?: true
    SharedAt?: true
  }

  export type WhiteboardShareMaxAggregateInputType = {
    id?: true
    name?: true
    WhiteboardId?: true
    SharerId?: true
    ReceiverId?: true
    SharedAt?: true
  }

  export type WhiteboardShareCountAggregateInputType = {
    id?: true
    name?: true
    WhiteboardId?: true
    SharerId?: true
    ReceiverId?: true
    SharedAt?: true
    _all?: true
  }

  export type WhiteboardShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhiteboardShare to aggregate.
     */
    where?: WhiteboardShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhiteboardShares to fetch.
     */
    orderBy?: WhiteboardShareOrderByWithRelationInput | WhiteboardShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhiteboardShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhiteboardShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhiteboardShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhiteboardShares
    **/
    _count?: true | WhiteboardShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhiteboardShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhiteboardShareMaxAggregateInputType
  }

  export type GetWhiteboardShareAggregateType<T extends WhiteboardShareAggregateArgs> = {
        [P in keyof T & keyof AggregateWhiteboardShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhiteboardShare[P]>
      : GetScalarType<T[P], AggregateWhiteboardShare[P]>
  }




  export type WhiteboardShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardShareWhereInput
    orderBy?: WhiteboardShareOrderByWithAggregationInput | WhiteboardShareOrderByWithAggregationInput[]
    by: WhiteboardShareScalarFieldEnum[] | WhiteboardShareScalarFieldEnum
    having?: WhiteboardShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhiteboardShareCountAggregateInputType | true
    _min?: WhiteboardShareMinAggregateInputType
    _max?: WhiteboardShareMaxAggregateInputType
  }

  export type WhiteboardShareGroupByOutputType = {
    id: string
    name: string
    WhiteboardId: string
    SharerId: string
    ReceiverId: string
    SharedAt: Date
    _count: WhiteboardShareCountAggregateOutputType | null
    _min: WhiteboardShareMinAggregateOutputType | null
    _max: WhiteboardShareMaxAggregateOutputType | null
  }

  type GetWhiteboardShareGroupByPayload<T extends WhiteboardShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhiteboardShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhiteboardShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhiteboardShareGroupByOutputType[P]>
            : GetScalarType<T[P], WhiteboardShareGroupByOutputType[P]>
        }
      >
    >


  export type WhiteboardShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    WhiteboardId?: boolean
    SharerId?: boolean
    ReceiverId?: boolean
    SharedAt?: boolean
    whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
    SharedWith?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboardShare"]>

  export type WhiteboardShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    WhiteboardId?: boolean
    SharerId?: boolean
    ReceiverId?: boolean
    SharedAt?: boolean
    whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
    SharedWith?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboardShare"]>

  export type WhiteboardShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    WhiteboardId?: boolean
    SharerId?: boolean
    ReceiverId?: boolean
    SharedAt?: boolean
    whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
    SharedWith?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboardShare"]>

  export type WhiteboardShareSelectScalar = {
    id?: boolean
    name?: boolean
    WhiteboardId?: boolean
    SharerId?: boolean
    ReceiverId?: boolean
    SharedAt?: boolean
  }

  export type WhiteboardShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "WhiteboardId" | "SharerId" | "ReceiverId" | "SharedAt", ExtArgs["result"]["whiteboardShare"]>
  export type WhiteboardShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
    SharedWith?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WhiteboardShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
    SharedWith?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WhiteboardShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
    SharedBy?: boolean | UserDefaultArgs<ExtArgs>
    SharedWith?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WhiteboardSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhiteboardShare"
    objects: {
      whiteboard: Prisma.$WhiteboardPayload<ExtArgs>
      SharedBy: Prisma.$UserPayload<ExtArgs>
      SharedWith: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      WhiteboardId: string
      SharerId: string
      ReceiverId: string
      SharedAt: Date
    }, ExtArgs["result"]["whiteboardShare"]>
    composites: {}
  }

  type WhiteboardShareGetPayload<S extends boolean | null | undefined | WhiteboardShareDefaultArgs> = $Result.GetResult<Prisma.$WhiteboardSharePayload, S>

  type WhiteboardShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhiteboardShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhiteboardShareCountAggregateInputType | true
    }

  export interface WhiteboardShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhiteboardShare'], meta: { name: 'WhiteboardShare' } }
    /**
     * Find zero or one WhiteboardShare that matches the filter.
     * @param {WhiteboardShareFindUniqueArgs} args - Arguments to find a WhiteboardShare
     * @example
     * // Get one WhiteboardShare
     * const whiteboardShare = await prisma.whiteboardShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhiteboardShareFindUniqueArgs>(args: SelectSubset<T, WhiteboardShareFindUniqueArgs<ExtArgs>>): Prisma__WhiteboardShareClient<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WhiteboardShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhiteboardShareFindUniqueOrThrowArgs} args - Arguments to find a WhiteboardShare
     * @example
     * // Get one WhiteboardShare
     * const whiteboardShare = await prisma.whiteboardShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhiteboardShareFindUniqueOrThrowArgs>(args: SelectSubset<T, WhiteboardShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhiteboardShareClient<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhiteboardShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardShareFindFirstArgs} args - Arguments to find a WhiteboardShare
     * @example
     * // Get one WhiteboardShare
     * const whiteboardShare = await prisma.whiteboardShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhiteboardShareFindFirstArgs>(args?: SelectSubset<T, WhiteboardShareFindFirstArgs<ExtArgs>>): Prisma__WhiteboardShareClient<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WhiteboardShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardShareFindFirstOrThrowArgs} args - Arguments to find a WhiteboardShare
     * @example
     * // Get one WhiteboardShare
     * const whiteboardShare = await prisma.whiteboardShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhiteboardShareFindFirstOrThrowArgs>(args?: SelectSubset<T, WhiteboardShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhiteboardShareClient<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WhiteboardShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhiteboardShares
     * const whiteboardShares = await prisma.whiteboardShare.findMany()
     * 
     * // Get first 10 WhiteboardShares
     * const whiteboardShares = await prisma.whiteboardShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whiteboardShareWithIdOnly = await prisma.whiteboardShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhiteboardShareFindManyArgs>(args?: SelectSubset<T, WhiteboardShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WhiteboardShare.
     * @param {WhiteboardShareCreateArgs} args - Arguments to create a WhiteboardShare.
     * @example
     * // Create one WhiteboardShare
     * const WhiteboardShare = await prisma.whiteboardShare.create({
     *   data: {
     *     // ... data to create a WhiteboardShare
     *   }
     * })
     * 
     */
    create<T extends WhiteboardShareCreateArgs>(args: SelectSubset<T, WhiteboardShareCreateArgs<ExtArgs>>): Prisma__WhiteboardShareClient<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WhiteboardShares.
     * @param {WhiteboardShareCreateManyArgs} args - Arguments to create many WhiteboardShares.
     * @example
     * // Create many WhiteboardShares
     * const whiteboardShare = await prisma.whiteboardShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhiteboardShareCreateManyArgs>(args?: SelectSubset<T, WhiteboardShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhiteboardShares and returns the data saved in the database.
     * @param {WhiteboardShareCreateManyAndReturnArgs} args - Arguments to create many WhiteboardShares.
     * @example
     * // Create many WhiteboardShares
     * const whiteboardShare = await prisma.whiteboardShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhiteboardShares and only return the `id`
     * const whiteboardShareWithIdOnly = await prisma.whiteboardShare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhiteboardShareCreateManyAndReturnArgs>(args?: SelectSubset<T, WhiteboardShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WhiteboardShare.
     * @param {WhiteboardShareDeleteArgs} args - Arguments to delete one WhiteboardShare.
     * @example
     * // Delete one WhiteboardShare
     * const WhiteboardShare = await prisma.whiteboardShare.delete({
     *   where: {
     *     // ... filter to delete one WhiteboardShare
     *   }
     * })
     * 
     */
    delete<T extends WhiteboardShareDeleteArgs>(args: SelectSubset<T, WhiteboardShareDeleteArgs<ExtArgs>>): Prisma__WhiteboardShareClient<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WhiteboardShare.
     * @param {WhiteboardShareUpdateArgs} args - Arguments to update one WhiteboardShare.
     * @example
     * // Update one WhiteboardShare
     * const whiteboardShare = await prisma.whiteboardShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhiteboardShareUpdateArgs>(args: SelectSubset<T, WhiteboardShareUpdateArgs<ExtArgs>>): Prisma__WhiteboardShareClient<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WhiteboardShares.
     * @param {WhiteboardShareDeleteManyArgs} args - Arguments to filter WhiteboardShares to delete.
     * @example
     * // Delete a few WhiteboardShares
     * const { count } = await prisma.whiteboardShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhiteboardShareDeleteManyArgs>(args?: SelectSubset<T, WhiteboardShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhiteboardShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhiteboardShares
     * const whiteboardShare = await prisma.whiteboardShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhiteboardShareUpdateManyArgs>(args: SelectSubset<T, WhiteboardShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhiteboardShares and returns the data updated in the database.
     * @param {WhiteboardShareUpdateManyAndReturnArgs} args - Arguments to update many WhiteboardShares.
     * @example
     * // Update many WhiteboardShares
     * const whiteboardShare = await prisma.whiteboardShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WhiteboardShares and only return the `id`
     * const whiteboardShareWithIdOnly = await prisma.whiteboardShare.updateManyAndReturn({
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
    updateManyAndReturn<T extends WhiteboardShareUpdateManyAndReturnArgs>(args: SelectSubset<T, WhiteboardShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WhiteboardShare.
     * @param {WhiteboardShareUpsertArgs} args - Arguments to update or create a WhiteboardShare.
     * @example
     * // Update or create a WhiteboardShare
     * const whiteboardShare = await prisma.whiteboardShare.upsert({
     *   create: {
     *     // ... data to create a WhiteboardShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhiteboardShare we want to update
     *   }
     * })
     */
    upsert<T extends WhiteboardShareUpsertArgs>(args: SelectSubset<T, WhiteboardShareUpsertArgs<ExtArgs>>): Prisma__WhiteboardShareClient<$Result.GetResult<Prisma.$WhiteboardSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WhiteboardShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardShareCountArgs} args - Arguments to filter WhiteboardShares to count.
     * @example
     * // Count the number of WhiteboardShares
     * const count = await prisma.whiteboardShare.count({
     *   where: {
     *     // ... the filter for the WhiteboardShares we want to count
     *   }
     * })
    **/
    count<T extends WhiteboardShareCountArgs>(
      args?: Subset<T, WhiteboardShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhiteboardShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhiteboardShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhiteboardShareAggregateArgs>(args: Subset<T, WhiteboardShareAggregateArgs>): Prisma.PrismaPromise<GetWhiteboardShareAggregateType<T>>

    /**
     * Group by WhiteboardShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardShareGroupByArgs} args - Group by arguments.
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
      T extends WhiteboardShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhiteboardShareGroupByArgs['orderBy'] }
        : { orderBy?: WhiteboardShareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhiteboardShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhiteboardShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhiteboardShare model
   */
  readonly fields: WhiteboardShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhiteboardShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhiteboardShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    whiteboard<T extends WhiteboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhiteboardDefaultArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SharedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SharedWith<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WhiteboardShare model
   */
  interface WhiteboardShareFieldRefs {
    readonly id: FieldRef<"WhiteboardShare", 'String'>
    readonly name: FieldRef<"WhiteboardShare", 'String'>
    readonly WhiteboardId: FieldRef<"WhiteboardShare", 'String'>
    readonly SharerId: FieldRef<"WhiteboardShare", 'String'>
    readonly ReceiverId: FieldRef<"WhiteboardShare", 'String'>
    readonly SharedAt: FieldRef<"WhiteboardShare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhiteboardShare findUnique
   */
  export type WhiteboardShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * Filter, which WhiteboardShare to fetch.
     */
    where: WhiteboardShareWhereUniqueInput
  }

  /**
   * WhiteboardShare findUniqueOrThrow
   */
  export type WhiteboardShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * Filter, which WhiteboardShare to fetch.
     */
    where: WhiteboardShareWhereUniqueInput
  }

  /**
   * WhiteboardShare findFirst
   */
  export type WhiteboardShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * Filter, which WhiteboardShare to fetch.
     */
    where?: WhiteboardShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhiteboardShares to fetch.
     */
    orderBy?: WhiteboardShareOrderByWithRelationInput | WhiteboardShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhiteboardShares.
     */
    cursor?: WhiteboardShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhiteboardShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhiteboardShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhiteboardShares.
     */
    distinct?: WhiteboardShareScalarFieldEnum | WhiteboardShareScalarFieldEnum[]
  }

  /**
   * WhiteboardShare findFirstOrThrow
   */
  export type WhiteboardShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * Filter, which WhiteboardShare to fetch.
     */
    where?: WhiteboardShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhiteboardShares to fetch.
     */
    orderBy?: WhiteboardShareOrderByWithRelationInput | WhiteboardShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhiteboardShares.
     */
    cursor?: WhiteboardShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhiteboardShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhiteboardShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhiteboardShares.
     */
    distinct?: WhiteboardShareScalarFieldEnum | WhiteboardShareScalarFieldEnum[]
  }

  /**
   * WhiteboardShare findMany
   */
  export type WhiteboardShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * Filter, which WhiteboardShares to fetch.
     */
    where?: WhiteboardShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhiteboardShares to fetch.
     */
    orderBy?: WhiteboardShareOrderByWithRelationInput | WhiteboardShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhiteboardShares.
     */
    cursor?: WhiteboardShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhiteboardShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhiteboardShares.
     */
    skip?: number
    distinct?: WhiteboardShareScalarFieldEnum | WhiteboardShareScalarFieldEnum[]
  }

  /**
   * WhiteboardShare create
   */
  export type WhiteboardShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * The data needed to create a WhiteboardShare.
     */
    data: XOR<WhiteboardShareCreateInput, WhiteboardShareUncheckedCreateInput>
  }

  /**
   * WhiteboardShare createMany
   */
  export type WhiteboardShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhiteboardShares.
     */
    data: WhiteboardShareCreateManyInput | WhiteboardShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhiteboardShare createManyAndReturn
   */
  export type WhiteboardShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * The data used to create many WhiteboardShares.
     */
    data: WhiteboardShareCreateManyInput | WhiteboardShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhiteboardShare update
   */
  export type WhiteboardShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * The data needed to update a WhiteboardShare.
     */
    data: XOR<WhiteboardShareUpdateInput, WhiteboardShareUncheckedUpdateInput>
    /**
     * Choose, which WhiteboardShare to update.
     */
    where: WhiteboardShareWhereUniqueInput
  }

  /**
   * WhiteboardShare updateMany
   */
  export type WhiteboardShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhiteboardShares.
     */
    data: XOR<WhiteboardShareUpdateManyMutationInput, WhiteboardShareUncheckedUpdateManyInput>
    /**
     * Filter which WhiteboardShares to update
     */
    where?: WhiteboardShareWhereInput
    /**
     * Limit how many WhiteboardShares to update.
     */
    limit?: number
  }

  /**
   * WhiteboardShare updateManyAndReturn
   */
  export type WhiteboardShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * The data used to update WhiteboardShares.
     */
    data: XOR<WhiteboardShareUpdateManyMutationInput, WhiteboardShareUncheckedUpdateManyInput>
    /**
     * Filter which WhiteboardShares to update
     */
    where?: WhiteboardShareWhereInput
    /**
     * Limit how many WhiteboardShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhiteboardShare upsert
   */
  export type WhiteboardShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * The filter to search for the WhiteboardShare to update in case it exists.
     */
    where: WhiteboardShareWhereUniqueInput
    /**
     * In case the WhiteboardShare found by the `where` argument doesn't exist, create a new WhiteboardShare with this data.
     */
    create: XOR<WhiteboardShareCreateInput, WhiteboardShareUncheckedCreateInput>
    /**
     * In case the WhiteboardShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhiteboardShareUpdateInput, WhiteboardShareUncheckedUpdateInput>
  }

  /**
   * WhiteboardShare delete
   */
  export type WhiteboardShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
    /**
     * Filter which WhiteboardShare to delete.
     */
    where: WhiteboardShareWhereUniqueInput
  }

  /**
   * WhiteboardShare deleteMany
   */
  export type WhiteboardShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhiteboardShares to delete
     */
    where?: WhiteboardShareWhereInput
    /**
     * Limit how many WhiteboardShares to delete.
     */
    limit?: number
  }

  /**
   * WhiteboardShare without action
   */
  export type WhiteboardShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhiteboardShare
     */
    select?: WhiteboardShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WhiteboardShare
     */
    omit?: WhiteboardShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardShareInclude<ExtArgs> | null
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
    WhiteboardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrawingMaxAggregateOutputType = {
    id: string | null
    WhiteboardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrawingCountAggregateOutputType = {
    id: number
    DrawingData: number
    WhiteboardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DrawingMinAggregateInputType = {
    id?: true
    WhiteboardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrawingMaxAggregateInputType = {
    id?: true
    WhiteboardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrawingCountAggregateInputType = {
    id?: true
    DrawingData?: true
    WhiteboardId?: true
    createdAt?: true
    updatedAt?: true
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
    DrawingData: JsonValue
    WhiteboardId: string
    createdAt: Date
    updatedAt: Date
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
    DrawingData?: boolean
    WhiteboardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawing"]>

  export type DrawingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    DrawingData?: boolean
    WhiteboardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawing"]>

  export type DrawingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    DrawingData?: boolean
    WhiteboardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drawing"]>

  export type DrawingSelectScalar = {
    id?: boolean
    DrawingData?: boolean
    WhiteboardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DrawingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "DrawingData" | "WhiteboardId" | "createdAt" | "updatedAt", ExtArgs["result"]["drawing"]>
  export type DrawingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
  }
  export type DrawingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
  }
  export type DrawingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Whiteboard?: boolean | WhiteboardDefaultArgs<ExtArgs>
  }

  export type $DrawingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drawing"
    objects: {
      Whiteboard: Prisma.$WhiteboardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      DrawingData: Prisma.JsonValue
      WhiteboardId: string
      createdAt: Date
      updatedAt: Date
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
    Whiteboard<T extends WhiteboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhiteboardDefaultArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly DrawingData: FieldRef<"Drawing", 'Json'>
    readonly WhiteboardId: FieldRef<"Drawing", 'String'>
    readonly createdAt: FieldRef<"Drawing", 'DateTime'>
    readonly updatedAt: FieldRef<"Drawing", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawingIncludeUpdateManyAndReturn<ExtArgs> | null
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
    name: 'name',
    OwnerID: 'OwnerID'
  };

  export type WhiteboardScalarFieldEnum = (typeof WhiteboardScalarFieldEnum)[keyof typeof WhiteboardScalarFieldEnum]


  export const WhiteboardShareScalarFieldEnum: {
    id: 'id',
    name: 'name',
    WhiteboardId: 'WhiteboardId',
    SharerId: 'SharerId',
    ReceiverId: 'ReceiverId',
    SharedAt: 'SharedAt'
  };

  export type WhiteboardShareScalarFieldEnum = (typeof WhiteboardShareScalarFieldEnum)[keyof typeof WhiteboardShareScalarFieldEnum]


  export const DrawingScalarFieldEnum: {
    id: 'id',
    DrawingData: 'DrawingData',
    WhiteboardId: 'WhiteboardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    Whiteboard?: WhiteboardListRelationFilter
    SharedWhiteboard?: WhiteboardShareListRelationFilter
    ReceivedWhiteboard?: WhiteboardShareListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    Whiteboard?: WhiteboardOrderByRelationAggregateInput
    SharedWhiteboard?: WhiteboardShareOrderByRelationAggregateInput
    ReceivedWhiteboard?: WhiteboardShareOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    Whiteboard?: WhiteboardListRelationFilter
    SharedWhiteboard?: WhiteboardShareListRelationFilter
    ReceivedWhiteboard?: WhiteboardShareListRelationFilter
  }, "id" | "name">

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
    OwnerID?: StringFilter<"Whiteboard"> | string
    Owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    Shares?: WhiteboardShareListRelationFilter
    Drawings?: DrawingListRelationFilter
  }

  export type WhiteboardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    OwnerID?: SortOrder
    Owner?: UserOrderByWithRelationInput
    Shares?: WhiteboardShareOrderByRelationAggregateInput
    Drawings?: DrawingOrderByRelationAggregateInput
  }

  export type WhiteboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhiteboardWhereInput | WhiteboardWhereInput[]
    OR?: WhiteboardWhereInput[]
    NOT?: WhiteboardWhereInput | WhiteboardWhereInput[]
    name?: StringFilter<"Whiteboard"> | string
    OwnerID?: StringFilter<"Whiteboard"> | string
    Owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    Shares?: WhiteboardShareListRelationFilter
    Drawings?: DrawingListRelationFilter
  }, "id">

  export type WhiteboardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    OwnerID?: SortOrder
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
    OwnerID?: StringWithAggregatesFilter<"Whiteboard"> | string
  }

  export type WhiteboardShareWhereInput = {
    AND?: WhiteboardShareWhereInput | WhiteboardShareWhereInput[]
    OR?: WhiteboardShareWhereInput[]
    NOT?: WhiteboardShareWhereInput | WhiteboardShareWhereInput[]
    id?: StringFilter<"WhiteboardShare"> | string
    name?: StringFilter<"WhiteboardShare"> | string
    WhiteboardId?: StringFilter<"WhiteboardShare"> | string
    SharerId?: StringFilter<"WhiteboardShare"> | string
    ReceiverId?: StringFilter<"WhiteboardShare"> | string
    SharedAt?: DateTimeFilter<"WhiteboardShare"> | Date | string
    whiteboard?: XOR<WhiteboardScalarRelationFilter, WhiteboardWhereInput>
    SharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    SharedWith?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WhiteboardShareOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    WhiteboardId?: SortOrder
    SharerId?: SortOrder
    ReceiverId?: SortOrder
    SharedAt?: SortOrder
    whiteboard?: WhiteboardOrderByWithRelationInput
    SharedBy?: UserOrderByWithRelationInput
    SharedWith?: UserOrderByWithRelationInput
  }

  export type WhiteboardShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhiteboardShareWhereInput | WhiteboardShareWhereInput[]
    OR?: WhiteboardShareWhereInput[]
    NOT?: WhiteboardShareWhereInput | WhiteboardShareWhereInput[]
    name?: StringFilter<"WhiteboardShare"> | string
    WhiteboardId?: StringFilter<"WhiteboardShare"> | string
    SharerId?: StringFilter<"WhiteboardShare"> | string
    ReceiverId?: StringFilter<"WhiteboardShare"> | string
    SharedAt?: DateTimeFilter<"WhiteboardShare"> | Date | string
    whiteboard?: XOR<WhiteboardScalarRelationFilter, WhiteboardWhereInput>
    SharedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    SharedWith?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WhiteboardShareOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    WhiteboardId?: SortOrder
    SharerId?: SortOrder
    ReceiverId?: SortOrder
    SharedAt?: SortOrder
    _count?: WhiteboardShareCountOrderByAggregateInput
    _max?: WhiteboardShareMaxOrderByAggregateInput
    _min?: WhiteboardShareMinOrderByAggregateInput
  }

  export type WhiteboardShareScalarWhereWithAggregatesInput = {
    AND?: WhiteboardShareScalarWhereWithAggregatesInput | WhiteboardShareScalarWhereWithAggregatesInput[]
    OR?: WhiteboardShareScalarWhereWithAggregatesInput[]
    NOT?: WhiteboardShareScalarWhereWithAggregatesInput | WhiteboardShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhiteboardShare"> | string
    name?: StringWithAggregatesFilter<"WhiteboardShare"> | string
    WhiteboardId?: StringWithAggregatesFilter<"WhiteboardShare"> | string
    SharerId?: StringWithAggregatesFilter<"WhiteboardShare"> | string
    ReceiverId?: StringWithAggregatesFilter<"WhiteboardShare"> | string
    SharedAt?: DateTimeWithAggregatesFilter<"WhiteboardShare"> | Date | string
  }

  export type DrawingWhereInput = {
    AND?: DrawingWhereInput | DrawingWhereInput[]
    OR?: DrawingWhereInput[]
    NOT?: DrawingWhereInput | DrawingWhereInput[]
    id?: StringFilter<"Drawing"> | string
    DrawingData?: JsonFilter<"Drawing">
    WhiteboardId?: StringFilter<"Drawing"> | string
    createdAt?: DateTimeFilter<"Drawing"> | Date | string
    updatedAt?: DateTimeFilter<"Drawing"> | Date | string
    Whiteboard?: XOR<WhiteboardScalarRelationFilter, WhiteboardWhereInput>
  }

  export type DrawingOrderByWithRelationInput = {
    id?: SortOrder
    DrawingData?: SortOrder
    WhiteboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Whiteboard?: WhiteboardOrderByWithRelationInput
  }

  export type DrawingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrawingWhereInput | DrawingWhereInput[]
    OR?: DrawingWhereInput[]
    NOT?: DrawingWhereInput | DrawingWhereInput[]
    DrawingData?: JsonFilter<"Drawing">
    WhiteboardId?: StringFilter<"Drawing"> | string
    createdAt?: DateTimeFilter<"Drawing"> | Date | string
    updatedAt?: DateTimeFilter<"Drawing"> | Date | string
    Whiteboard?: XOR<WhiteboardScalarRelationFilter, WhiteboardWhereInput>
  }, "id" | "id">

  export type DrawingOrderByWithAggregationInput = {
    id?: SortOrder
    DrawingData?: SortOrder
    WhiteboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DrawingCountOrderByAggregateInput
    _max?: DrawingMaxOrderByAggregateInput
    _min?: DrawingMinOrderByAggregateInput
  }

  export type DrawingScalarWhereWithAggregatesInput = {
    AND?: DrawingScalarWhereWithAggregatesInput | DrawingScalarWhereWithAggregatesInput[]
    OR?: DrawingScalarWhereWithAggregatesInput[]
    NOT?: DrawingScalarWhereWithAggregatesInput | DrawingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Drawing"> | string
    DrawingData?: JsonWithAggregatesFilter<"Drawing">
    WhiteboardId?: StringWithAggregatesFilter<"Drawing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Drawing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Drawing"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    password: string
    Whiteboard?: WhiteboardCreateNestedManyWithoutOwnerInput
    SharedWhiteboard?: WhiteboardShareCreateNestedManyWithoutSharedByInput
    ReceivedWhiteboard?: WhiteboardShareCreateNestedManyWithoutSharedWithInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    password: string
    Whiteboard?: WhiteboardUncheckedCreateNestedManyWithoutOwnerInput
    SharedWhiteboard?: WhiteboardShareUncheckedCreateNestedManyWithoutSharedByInput
    ReceivedWhiteboard?: WhiteboardShareUncheckedCreateNestedManyWithoutSharedWithInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Whiteboard?: WhiteboardUpdateManyWithoutOwnerNestedInput
    SharedWhiteboard?: WhiteboardShareUpdateManyWithoutSharedByNestedInput
    ReceivedWhiteboard?: WhiteboardShareUpdateManyWithoutSharedWithNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Whiteboard?: WhiteboardUncheckedUpdateManyWithoutOwnerNestedInput
    SharedWhiteboard?: WhiteboardShareUncheckedUpdateManyWithoutSharedByNestedInput
    ReceivedWhiteboard?: WhiteboardShareUncheckedUpdateManyWithoutSharedWithNestedInput
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
    Owner: UserCreateNestedOneWithoutWhiteboardInput
    Shares?: WhiteboardShareCreateNestedManyWithoutWhiteboardInput
    Drawings?: DrawingCreateNestedManyWithoutWhiteboardInput
  }

  export type WhiteboardUncheckedCreateInput = {
    id?: string
    name: string
    OwnerID: string
    Shares?: WhiteboardShareUncheckedCreateNestedManyWithoutWhiteboardInput
    Drawings?: DrawingUncheckedCreateNestedManyWithoutWhiteboardInput
  }

  export type WhiteboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Owner?: UserUpdateOneRequiredWithoutWhiteboardNestedInput
    Shares?: WhiteboardShareUpdateManyWithoutWhiteboardNestedInput
    Drawings?: DrawingUpdateManyWithoutWhiteboardNestedInput
  }

  export type WhiteboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    OwnerID?: StringFieldUpdateOperationsInput | string
    Shares?: WhiteboardShareUncheckedUpdateManyWithoutWhiteboardNestedInput
    Drawings?: DrawingUncheckedUpdateManyWithoutWhiteboardNestedInput
  }

  export type WhiteboardCreateManyInput = {
    id?: string
    name: string
    OwnerID: string
  }

  export type WhiteboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WhiteboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    OwnerID?: StringFieldUpdateOperationsInput | string
  }

  export type WhiteboardShareCreateInput = {
    id?: string
    name: string
    SharedAt?: Date | string
    whiteboard: WhiteboardCreateNestedOneWithoutSharesInput
    SharedBy: UserCreateNestedOneWithoutSharedWhiteboardInput
    SharedWith: UserCreateNestedOneWithoutReceivedWhiteboardInput
  }

  export type WhiteboardShareUncheckedCreateInput = {
    id?: string
    name: string
    WhiteboardId: string
    SharerId: string
    ReceiverId: string
    SharedAt?: Date | string
  }

  export type WhiteboardShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whiteboard?: WhiteboardUpdateOneRequiredWithoutSharesNestedInput
    SharedBy?: UserUpdateOneRequiredWithoutSharedWhiteboardNestedInput
    SharedWith?: UserUpdateOneRequiredWithoutReceivedWhiteboardNestedInput
  }

  export type WhiteboardShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    WhiteboardId?: StringFieldUpdateOperationsInput | string
    SharerId?: StringFieldUpdateOperationsInput | string
    ReceiverId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardShareCreateManyInput = {
    id?: string
    name: string
    WhiteboardId: string
    SharerId: string
    ReceiverId: string
    SharedAt?: Date | string
  }

  export type WhiteboardShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    WhiteboardId?: StringFieldUpdateOperationsInput | string
    SharerId?: StringFieldUpdateOperationsInput | string
    ReceiverId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingCreateInput = {
    id?: string
    DrawingData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Whiteboard: WhiteboardCreateNestedOneWithoutDrawingsInput
  }

  export type DrawingUncheckedCreateInput = {
    id?: string
    DrawingData: JsonNullValueInput | InputJsonValue
    WhiteboardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Whiteboard?: WhiteboardUpdateOneRequiredWithoutDrawingsNestedInput
  }

  export type DrawingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    WhiteboardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingCreateManyInput = {
    id?: string
    DrawingData: JsonNullValueInput | InputJsonValue
    WhiteboardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    WhiteboardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type WhiteboardShareListRelationFilter = {
    every?: WhiteboardShareWhereInput
    some?: WhiteboardShareWhereInput
    none?: WhiteboardShareWhereInput
  }

  export type WhiteboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhiteboardShareOrderByRelationAggregateInput = {
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DrawingListRelationFilter = {
    every?: DrawingWhereInput
    some?: DrawingWhereInput
    none?: DrawingWhereInput
  }

  export type DrawingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhiteboardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    OwnerID?: SortOrder
  }

  export type WhiteboardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    OwnerID?: SortOrder
  }

  export type WhiteboardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    OwnerID?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WhiteboardScalarRelationFilter = {
    is?: WhiteboardWhereInput
    isNot?: WhiteboardWhereInput
  }

  export type WhiteboardShareCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    WhiteboardId?: SortOrder
    SharerId?: SortOrder
    ReceiverId?: SortOrder
    SharedAt?: SortOrder
  }

  export type WhiteboardShareMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    WhiteboardId?: SortOrder
    SharerId?: SortOrder
    ReceiverId?: SortOrder
    SharedAt?: SortOrder
  }

  export type WhiteboardShareMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    WhiteboardId?: SortOrder
    SharerId?: SortOrder
    ReceiverId?: SortOrder
    SharedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
    DrawingData?: SortOrder
    WhiteboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawingMaxOrderByAggregateInput = {
    id?: SortOrder
    WhiteboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawingMinOrderByAggregateInput = {
    id?: SortOrder
    WhiteboardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type WhiteboardCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WhiteboardCreateWithoutOwnerInput, WhiteboardUncheckedCreateWithoutOwnerInput> | WhiteboardCreateWithoutOwnerInput[] | WhiteboardUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutOwnerInput | WhiteboardCreateOrConnectWithoutOwnerInput[]
    createMany?: WhiteboardCreateManyOwnerInputEnvelope
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
  }

  export type WhiteboardShareCreateNestedManyWithoutSharedByInput = {
    create?: XOR<WhiteboardShareCreateWithoutSharedByInput, WhiteboardShareUncheckedCreateWithoutSharedByInput> | WhiteboardShareCreateWithoutSharedByInput[] | WhiteboardShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutSharedByInput | WhiteboardShareCreateOrConnectWithoutSharedByInput[]
    createMany?: WhiteboardShareCreateManySharedByInputEnvelope
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
  }

  export type WhiteboardShareCreateNestedManyWithoutSharedWithInput = {
    create?: XOR<WhiteboardShareCreateWithoutSharedWithInput, WhiteboardShareUncheckedCreateWithoutSharedWithInput> | WhiteboardShareCreateWithoutSharedWithInput[] | WhiteboardShareUncheckedCreateWithoutSharedWithInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutSharedWithInput | WhiteboardShareCreateOrConnectWithoutSharedWithInput[]
    createMany?: WhiteboardShareCreateManySharedWithInputEnvelope
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
  }

  export type WhiteboardUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WhiteboardCreateWithoutOwnerInput, WhiteboardUncheckedCreateWithoutOwnerInput> | WhiteboardCreateWithoutOwnerInput[] | WhiteboardUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutOwnerInput | WhiteboardCreateOrConnectWithoutOwnerInput[]
    createMany?: WhiteboardCreateManyOwnerInputEnvelope
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
  }

  export type WhiteboardShareUncheckedCreateNestedManyWithoutSharedByInput = {
    create?: XOR<WhiteboardShareCreateWithoutSharedByInput, WhiteboardShareUncheckedCreateWithoutSharedByInput> | WhiteboardShareCreateWithoutSharedByInput[] | WhiteboardShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutSharedByInput | WhiteboardShareCreateOrConnectWithoutSharedByInput[]
    createMany?: WhiteboardShareCreateManySharedByInputEnvelope
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
  }

  export type WhiteboardShareUncheckedCreateNestedManyWithoutSharedWithInput = {
    create?: XOR<WhiteboardShareCreateWithoutSharedWithInput, WhiteboardShareUncheckedCreateWithoutSharedWithInput> | WhiteboardShareCreateWithoutSharedWithInput[] | WhiteboardShareUncheckedCreateWithoutSharedWithInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutSharedWithInput | WhiteboardShareCreateOrConnectWithoutSharedWithInput[]
    createMany?: WhiteboardShareCreateManySharedWithInputEnvelope
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WhiteboardUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WhiteboardCreateWithoutOwnerInput, WhiteboardUncheckedCreateWithoutOwnerInput> | WhiteboardCreateWithoutOwnerInput[] | WhiteboardUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutOwnerInput | WhiteboardCreateOrConnectWithoutOwnerInput[]
    upsert?: WhiteboardUpsertWithWhereUniqueWithoutOwnerInput | WhiteboardUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WhiteboardCreateManyOwnerInputEnvelope
    set?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    disconnect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    delete?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    update?: WhiteboardUpdateWithWhereUniqueWithoutOwnerInput | WhiteboardUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WhiteboardUpdateManyWithWhereWithoutOwnerInput | WhiteboardUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
  }

  export type WhiteboardShareUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<WhiteboardShareCreateWithoutSharedByInput, WhiteboardShareUncheckedCreateWithoutSharedByInput> | WhiteboardShareCreateWithoutSharedByInput[] | WhiteboardShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutSharedByInput | WhiteboardShareCreateOrConnectWithoutSharedByInput[]
    upsert?: WhiteboardShareUpsertWithWhereUniqueWithoutSharedByInput | WhiteboardShareUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: WhiteboardShareCreateManySharedByInputEnvelope
    set?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    disconnect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    delete?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    update?: WhiteboardShareUpdateWithWhereUniqueWithoutSharedByInput | WhiteboardShareUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: WhiteboardShareUpdateManyWithWhereWithoutSharedByInput | WhiteboardShareUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: WhiteboardShareScalarWhereInput | WhiteboardShareScalarWhereInput[]
  }

  export type WhiteboardShareUpdateManyWithoutSharedWithNestedInput = {
    create?: XOR<WhiteboardShareCreateWithoutSharedWithInput, WhiteboardShareUncheckedCreateWithoutSharedWithInput> | WhiteboardShareCreateWithoutSharedWithInput[] | WhiteboardShareUncheckedCreateWithoutSharedWithInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutSharedWithInput | WhiteboardShareCreateOrConnectWithoutSharedWithInput[]
    upsert?: WhiteboardShareUpsertWithWhereUniqueWithoutSharedWithInput | WhiteboardShareUpsertWithWhereUniqueWithoutSharedWithInput[]
    createMany?: WhiteboardShareCreateManySharedWithInputEnvelope
    set?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    disconnect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    delete?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    update?: WhiteboardShareUpdateWithWhereUniqueWithoutSharedWithInput | WhiteboardShareUpdateWithWhereUniqueWithoutSharedWithInput[]
    updateMany?: WhiteboardShareUpdateManyWithWhereWithoutSharedWithInput | WhiteboardShareUpdateManyWithWhereWithoutSharedWithInput[]
    deleteMany?: WhiteboardShareScalarWhereInput | WhiteboardShareScalarWhereInput[]
  }

  export type WhiteboardUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WhiteboardCreateWithoutOwnerInput, WhiteboardUncheckedCreateWithoutOwnerInput> | WhiteboardCreateWithoutOwnerInput[] | WhiteboardUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutOwnerInput | WhiteboardCreateOrConnectWithoutOwnerInput[]
    upsert?: WhiteboardUpsertWithWhereUniqueWithoutOwnerInput | WhiteboardUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WhiteboardCreateManyOwnerInputEnvelope
    set?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    disconnect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    delete?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    update?: WhiteboardUpdateWithWhereUniqueWithoutOwnerInput | WhiteboardUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WhiteboardUpdateManyWithWhereWithoutOwnerInput | WhiteboardUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
  }

  export type WhiteboardShareUncheckedUpdateManyWithoutSharedByNestedInput = {
    create?: XOR<WhiteboardShareCreateWithoutSharedByInput, WhiteboardShareUncheckedCreateWithoutSharedByInput> | WhiteboardShareCreateWithoutSharedByInput[] | WhiteboardShareUncheckedCreateWithoutSharedByInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutSharedByInput | WhiteboardShareCreateOrConnectWithoutSharedByInput[]
    upsert?: WhiteboardShareUpsertWithWhereUniqueWithoutSharedByInput | WhiteboardShareUpsertWithWhereUniqueWithoutSharedByInput[]
    createMany?: WhiteboardShareCreateManySharedByInputEnvelope
    set?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    disconnect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    delete?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    update?: WhiteboardShareUpdateWithWhereUniqueWithoutSharedByInput | WhiteboardShareUpdateWithWhereUniqueWithoutSharedByInput[]
    updateMany?: WhiteboardShareUpdateManyWithWhereWithoutSharedByInput | WhiteboardShareUpdateManyWithWhereWithoutSharedByInput[]
    deleteMany?: WhiteboardShareScalarWhereInput | WhiteboardShareScalarWhereInput[]
  }

  export type WhiteboardShareUncheckedUpdateManyWithoutSharedWithNestedInput = {
    create?: XOR<WhiteboardShareCreateWithoutSharedWithInput, WhiteboardShareUncheckedCreateWithoutSharedWithInput> | WhiteboardShareCreateWithoutSharedWithInput[] | WhiteboardShareUncheckedCreateWithoutSharedWithInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutSharedWithInput | WhiteboardShareCreateOrConnectWithoutSharedWithInput[]
    upsert?: WhiteboardShareUpsertWithWhereUniqueWithoutSharedWithInput | WhiteboardShareUpsertWithWhereUniqueWithoutSharedWithInput[]
    createMany?: WhiteboardShareCreateManySharedWithInputEnvelope
    set?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    disconnect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    delete?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    update?: WhiteboardShareUpdateWithWhereUniqueWithoutSharedWithInput | WhiteboardShareUpdateWithWhereUniqueWithoutSharedWithInput[]
    updateMany?: WhiteboardShareUpdateManyWithWhereWithoutSharedWithInput | WhiteboardShareUpdateManyWithWhereWithoutSharedWithInput[]
    deleteMany?: WhiteboardShareScalarWhereInput | WhiteboardShareScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWhiteboardInput = {
    create?: XOR<UserCreateWithoutWhiteboardInput, UserUncheckedCreateWithoutWhiteboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhiteboardInput
    connect?: UserWhereUniqueInput
  }

  export type WhiteboardShareCreateNestedManyWithoutWhiteboardInput = {
    create?: XOR<WhiteboardShareCreateWithoutWhiteboardInput, WhiteboardShareUncheckedCreateWithoutWhiteboardInput> | WhiteboardShareCreateWithoutWhiteboardInput[] | WhiteboardShareUncheckedCreateWithoutWhiteboardInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutWhiteboardInput | WhiteboardShareCreateOrConnectWithoutWhiteboardInput[]
    createMany?: WhiteboardShareCreateManyWhiteboardInputEnvelope
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
  }

  export type DrawingCreateNestedManyWithoutWhiteboardInput = {
    create?: XOR<DrawingCreateWithoutWhiteboardInput, DrawingUncheckedCreateWithoutWhiteboardInput> | DrawingCreateWithoutWhiteboardInput[] | DrawingUncheckedCreateWithoutWhiteboardInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutWhiteboardInput | DrawingCreateOrConnectWithoutWhiteboardInput[]
    createMany?: DrawingCreateManyWhiteboardInputEnvelope
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
  }

  export type WhiteboardShareUncheckedCreateNestedManyWithoutWhiteboardInput = {
    create?: XOR<WhiteboardShareCreateWithoutWhiteboardInput, WhiteboardShareUncheckedCreateWithoutWhiteboardInput> | WhiteboardShareCreateWithoutWhiteboardInput[] | WhiteboardShareUncheckedCreateWithoutWhiteboardInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutWhiteboardInput | WhiteboardShareCreateOrConnectWithoutWhiteboardInput[]
    createMany?: WhiteboardShareCreateManyWhiteboardInputEnvelope
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
  }

  export type DrawingUncheckedCreateNestedManyWithoutWhiteboardInput = {
    create?: XOR<DrawingCreateWithoutWhiteboardInput, DrawingUncheckedCreateWithoutWhiteboardInput> | DrawingCreateWithoutWhiteboardInput[] | DrawingUncheckedCreateWithoutWhiteboardInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutWhiteboardInput | DrawingCreateOrConnectWithoutWhiteboardInput[]
    createMany?: DrawingCreateManyWhiteboardInputEnvelope
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWhiteboardNestedInput = {
    create?: XOR<UserCreateWithoutWhiteboardInput, UserUncheckedCreateWithoutWhiteboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutWhiteboardInput
    upsert?: UserUpsertWithoutWhiteboardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWhiteboardInput, UserUpdateWithoutWhiteboardInput>, UserUncheckedUpdateWithoutWhiteboardInput>
  }

  export type WhiteboardShareUpdateManyWithoutWhiteboardNestedInput = {
    create?: XOR<WhiteboardShareCreateWithoutWhiteboardInput, WhiteboardShareUncheckedCreateWithoutWhiteboardInput> | WhiteboardShareCreateWithoutWhiteboardInput[] | WhiteboardShareUncheckedCreateWithoutWhiteboardInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutWhiteboardInput | WhiteboardShareCreateOrConnectWithoutWhiteboardInput[]
    upsert?: WhiteboardShareUpsertWithWhereUniqueWithoutWhiteboardInput | WhiteboardShareUpsertWithWhereUniqueWithoutWhiteboardInput[]
    createMany?: WhiteboardShareCreateManyWhiteboardInputEnvelope
    set?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    disconnect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    delete?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    update?: WhiteboardShareUpdateWithWhereUniqueWithoutWhiteboardInput | WhiteboardShareUpdateWithWhereUniqueWithoutWhiteboardInput[]
    updateMany?: WhiteboardShareUpdateManyWithWhereWithoutWhiteboardInput | WhiteboardShareUpdateManyWithWhereWithoutWhiteboardInput[]
    deleteMany?: WhiteboardShareScalarWhereInput | WhiteboardShareScalarWhereInput[]
  }

  export type DrawingUpdateManyWithoutWhiteboardNestedInput = {
    create?: XOR<DrawingCreateWithoutWhiteboardInput, DrawingUncheckedCreateWithoutWhiteboardInput> | DrawingCreateWithoutWhiteboardInput[] | DrawingUncheckedCreateWithoutWhiteboardInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutWhiteboardInput | DrawingCreateOrConnectWithoutWhiteboardInput[]
    upsert?: DrawingUpsertWithWhereUniqueWithoutWhiteboardInput | DrawingUpsertWithWhereUniqueWithoutWhiteboardInput[]
    createMany?: DrawingCreateManyWhiteboardInputEnvelope
    set?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    disconnect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    delete?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    update?: DrawingUpdateWithWhereUniqueWithoutWhiteboardInput | DrawingUpdateWithWhereUniqueWithoutWhiteboardInput[]
    updateMany?: DrawingUpdateManyWithWhereWithoutWhiteboardInput | DrawingUpdateManyWithWhereWithoutWhiteboardInput[]
    deleteMany?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
  }

  export type WhiteboardShareUncheckedUpdateManyWithoutWhiteboardNestedInput = {
    create?: XOR<WhiteboardShareCreateWithoutWhiteboardInput, WhiteboardShareUncheckedCreateWithoutWhiteboardInput> | WhiteboardShareCreateWithoutWhiteboardInput[] | WhiteboardShareUncheckedCreateWithoutWhiteboardInput[]
    connectOrCreate?: WhiteboardShareCreateOrConnectWithoutWhiteboardInput | WhiteboardShareCreateOrConnectWithoutWhiteboardInput[]
    upsert?: WhiteboardShareUpsertWithWhereUniqueWithoutWhiteboardInput | WhiteboardShareUpsertWithWhereUniqueWithoutWhiteboardInput[]
    createMany?: WhiteboardShareCreateManyWhiteboardInputEnvelope
    set?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    disconnect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    delete?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    connect?: WhiteboardShareWhereUniqueInput | WhiteboardShareWhereUniqueInput[]
    update?: WhiteboardShareUpdateWithWhereUniqueWithoutWhiteboardInput | WhiteboardShareUpdateWithWhereUniqueWithoutWhiteboardInput[]
    updateMany?: WhiteboardShareUpdateManyWithWhereWithoutWhiteboardInput | WhiteboardShareUpdateManyWithWhereWithoutWhiteboardInput[]
    deleteMany?: WhiteboardShareScalarWhereInput | WhiteboardShareScalarWhereInput[]
  }

  export type DrawingUncheckedUpdateManyWithoutWhiteboardNestedInput = {
    create?: XOR<DrawingCreateWithoutWhiteboardInput, DrawingUncheckedCreateWithoutWhiteboardInput> | DrawingCreateWithoutWhiteboardInput[] | DrawingUncheckedCreateWithoutWhiteboardInput[]
    connectOrCreate?: DrawingCreateOrConnectWithoutWhiteboardInput | DrawingCreateOrConnectWithoutWhiteboardInput[]
    upsert?: DrawingUpsertWithWhereUniqueWithoutWhiteboardInput | DrawingUpsertWithWhereUniqueWithoutWhiteboardInput[]
    createMany?: DrawingCreateManyWhiteboardInputEnvelope
    set?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    disconnect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    delete?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    connect?: DrawingWhereUniqueInput | DrawingWhereUniqueInput[]
    update?: DrawingUpdateWithWhereUniqueWithoutWhiteboardInput | DrawingUpdateWithWhereUniqueWithoutWhiteboardInput[]
    updateMany?: DrawingUpdateManyWithWhereWithoutWhiteboardInput | DrawingUpdateManyWithWhereWithoutWhiteboardInput[]
    deleteMany?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
  }

  export type WhiteboardCreateNestedOneWithoutSharesInput = {
    create?: XOR<WhiteboardCreateWithoutSharesInput, WhiteboardUncheckedCreateWithoutSharesInput>
    connectOrCreate?: WhiteboardCreateOrConnectWithoutSharesInput
    connect?: WhiteboardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedWhiteboardInput = {
    create?: XOR<UserCreateWithoutSharedWhiteboardInput, UserUncheckedCreateWithoutSharedWhiteboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedWhiteboardInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedWhiteboardInput = {
    create?: XOR<UserCreateWithoutReceivedWhiteboardInput, UserUncheckedCreateWithoutReceivedWhiteboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedWhiteboardInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WhiteboardUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<WhiteboardCreateWithoutSharesInput, WhiteboardUncheckedCreateWithoutSharesInput>
    connectOrCreate?: WhiteboardCreateOrConnectWithoutSharesInput
    upsert?: WhiteboardUpsertWithoutSharesInput
    connect?: WhiteboardWhereUniqueInput
    update?: XOR<XOR<WhiteboardUpdateToOneWithWhereWithoutSharesInput, WhiteboardUpdateWithoutSharesInput>, WhiteboardUncheckedUpdateWithoutSharesInput>
  }

  export type UserUpdateOneRequiredWithoutSharedWhiteboardNestedInput = {
    create?: XOR<UserCreateWithoutSharedWhiteboardInput, UserUncheckedCreateWithoutSharedWhiteboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedWhiteboardInput
    upsert?: UserUpsertWithoutSharedWhiteboardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedWhiteboardInput, UserUpdateWithoutSharedWhiteboardInput>, UserUncheckedUpdateWithoutSharedWhiteboardInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedWhiteboardNestedInput = {
    create?: XOR<UserCreateWithoutReceivedWhiteboardInput, UserUncheckedCreateWithoutReceivedWhiteboardInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedWhiteboardInput
    upsert?: UserUpsertWithoutReceivedWhiteboardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedWhiteboardInput, UserUpdateWithoutReceivedWhiteboardInput>, UserUncheckedUpdateWithoutReceivedWhiteboardInput>
  }

  export type WhiteboardCreateNestedOneWithoutDrawingsInput = {
    create?: XOR<WhiteboardCreateWithoutDrawingsInput, WhiteboardUncheckedCreateWithoutDrawingsInput>
    connectOrCreate?: WhiteboardCreateOrConnectWithoutDrawingsInput
    connect?: WhiteboardWhereUniqueInput
  }

  export type WhiteboardUpdateOneRequiredWithoutDrawingsNestedInput = {
    create?: XOR<WhiteboardCreateWithoutDrawingsInput, WhiteboardUncheckedCreateWithoutDrawingsInput>
    connectOrCreate?: WhiteboardCreateOrConnectWithoutDrawingsInput
    upsert?: WhiteboardUpsertWithoutDrawingsInput
    connect?: WhiteboardWhereUniqueInput
    update?: XOR<XOR<WhiteboardUpdateToOneWithWhereWithoutDrawingsInput, WhiteboardUpdateWithoutDrawingsInput>, WhiteboardUncheckedUpdateWithoutDrawingsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type WhiteboardCreateWithoutOwnerInput = {
    id?: string
    name: string
    Shares?: WhiteboardShareCreateNestedManyWithoutWhiteboardInput
    Drawings?: DrawingCreateNestedManyWithoutWhiteboardInput
  }

  export type WhiteboardUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    Shares?: WhiteboardShareUncheckedCreateNestedManyWithoutWhiteboardInput
    Drawings?: DrawingUncheckedCreateNestedManyWithoutWhiteboardInput
  }

  export type WhiteboardCreateOrConnectWithoutOwnerInput = {
    where: WhiteboardWhereUniqueInput
    create: XOR<WhiteboardCreateWithoutOwnerInput, WhiteboardUncheckedCreateWithoutOwnerInput>
  }

  export type WhiteboardCreateManyOwnerInputEnvelope = {
    data: WhiteboardCreateManyOwnerInput | WhiteboardCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type WhiteboardShareCreateWithoutSharedByInput = {
    id?: string
    name: string
    SharedAt?: Date | string
    whiteboard: WhiteboardCreateNestedOneWithoutSharesInput
    SharedWith: UserCreateNestedOneWithoutReceivedWhiteboardInput
  }

  export type WhiteboardShareUncheckedCreateWithoutSharedByInput = {
    id?: string
    name: string
    WhiteboardId: string
    ReceiverId: string
    SharedAt?: Date | string
  }

  export type WhiteboardShareCreateOrConnectWithoutSharedByInput = {
    where: WhiteboardShareWhereUniqueInput
    create: XOR<WhiteboardShareCreateWithoutSharedByInput, WhiteboardShareUncheckedCreateWithoutSharedByInput>
  }

  export type WhiteboardShareCreateManySharedByInputEnvelope = {
    data: WhiteboardShareCreateManySharedByInput | WhiteboardShareCreateManySharedByInput[]
    skipDuplicates?: boolean
  }

  export type WhiteboardShareCreateWithoutSharedWithInput = {
    id?: string
    name: string
    SharedAt?: Date | string
    whiteboard: WhiteboardCreateNestedOneWithoutSharesInput
    SharedBy: UserCreateNestedOneWithoutSharedWhiteboardInput
  }

  export type WhiteboardShareUncheckedCreateWithoutSharedWithInput = {
    id?: string
    name: string
    WhiteboardId: string
    SharerId: string
    SharedAt?: Date | string
  }

  export type WhiteboardShareCreateOrConnectWithoutSharedWithInput = {
    where: WhiteboardShareWhereUniqueInput
    create: XOR<WhiteboardShareCreateWithoutSharedWithInput, WhiteboardShareUncheckedCreateWithoutSharedWithInput>
  }

  export type WhiteboardShareCreateManySharedWithInputEnvelope = {
    data: WhiteboardShareCreateManySharedWithInput | WhiteboardShareCreateManySharedWithInput[]
    skipDuplicates?: boolean
  }

  export type WhiteboardUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WhiteboardWhereUniqueInput
    update: XOR<WhiteboardUpdateWithoutOwnerInput, WhiteboardUncheckedUpdateWithoutOwnerInput>
    create: XOR<WhiteboardCreateWithoutOwnerInput, WhiteboardUncheckedCreateWithoutOwnerInput>
  }

  export type WhiteboardUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WhiteboardWhereUniqueInput
    data: XOR<WhiteboardUpdateWithoutOwnerInput, WhiteboardUncheckedUpdateWithoutOwnerInput>
  }

  export type WhiteboardUpdateManyWithWhereWithoutOwnerInput = {
    where: WhiteboardScalarWhereInput
    data: XOR<WhiteboardUpdateManyMutationInput, WhiteboardUncheckedUpdateManyWithoutOwnerInput>
  }

  export type WhiteboardScalarWhereInput = {
    AND?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
    OR?: WhiteboardScalarWhereInput[]
    NOT?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
    id?: StringFilter<"Whiteboard"> | string
    name?: StringFilter<"Whiteboard"> | string
    OwnerID?: StringFilter<"Whiteboard"> | string
  }

  export type WhiteboardShareUpsertWithWhereUniqueWithoutSharedByInput = {
    where: WhiteboardShareWhereUniqueInput
    update: XOR<WhiteboardShareUpdateWithoutSharedByInput, WhiteboardShareUncheckedUpdateWithoutSharedByInput>
    create: XOR<WhiteboardShareCreateWithoutSharedByInput, WhiteboardShareUncheckedCreateWithoutSharedByInput>
  }

  export type WhiteboardShareUpdateWithWhereUniqueWithoutSharedByInput = {
    where: WhiteboardShareWhereUniqueInput
    data: XOR<WhiteboardShareUpdateWithoutSharedByInput, WhiteboardShareUncheckedUpdateWithoutSharedByInput>
  }

  export type WhiteboardShareUpdateManyWithWhereWithoutSharedByInput = {
    where: WhiteboardShareScalarWhereInput
    data: XOR<WhiteboardShareUpdateManyMutationInput, WhiteboardShareUncheckedUpdateManyWithoutSharedByInput>
  }

  export type WhiteboardShareScalarWhereInput = {
    AND?: WhiteboardShareScalarWhereInput | WhiteboardShareScalarWhereInput[]
    OR?: WhiteboardShareScalarWhereInput[]
    NOT?: WhiteboardShareScalarWhereInput | WhiteboardShareScalarWhereInput[]
    id?: StringFilter<"WhiteboardShare"> | string
    name?: StringFilter<"WhiteboardShare"> | string
    WhiteboardId?: StringFilter<"WhiteboardShare"> | string
    SharerId?: StringFilter<"WhiteboardShare"> | string
    ReceiverId?: StringFilter<"WhiteboardShare"> | string
    SharedAt?: DateTimeFilter<"WhiteboardShare"> | Date | string
  }

  export type WhiteboardShareUpsertWithWhereUniqueWithoutSharedWithInput = {
    where: WhiteboardShareWhereUniqueInput
    update: XOR<WhiteboardShareUpdateWithoutSharedWithInput, WhiteboardShareUncheckedUpdateWithoutSharedWithInput>
    create: XOR<WhiteboardShareCreateWithoutSharedWithInput, WhiteboardShareUncheckedCreateWithoutSharedWithInput>
  }

  export type WhiteboardShareUpdateWithWhereUniqueWithoutSharedWithInput = {
    where: WhiteboardShareWhereUniqueInput
    data: XOR<WhiteboardShareUpdateWithoutSharedWithInput, WhiteboardShareUncheckedUpdateWithoutSharedWithInput>
  }

  export type WhiteboardShareUpdateManyWithWhereWithoutSharedWithInput = {
    where: WhiteboardShareScalarWhereInput
    data: XOR<WhiteboardShareUpdateManyMutationInput, WhiteboardShareUncheckedUpdateManyWithoutSharedWithInput>
  }

  export type UserCreateWithoutWhiteboardInput = {
    id?: string
    name: string
    password: string
    SharedWhiteboard?: WhiteboardShareCreateNestedManyWithoutSharedByInput
    ReceivedWhiteboard?: WhiteboardShareCreateNestedManyWithoutSharedWithInput
  }

  export type UserUncheckedCreateWithoutWhiteboardInput = {
    id?: string
    name: string
    password: string
    SharedWhiteboard?: WhiteboardShareUncheckedCreateNestedManyWithoutSharedByInput
    ReceivedWhiteboard?: WhiteboardShareUncheckedCreateNestedManyWithoutSharedWithInput
  }

  export type UserCreateOrConnectWithoutWhiteboardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWhiteboardInput, UserUncheckedCreateWithoutWhiteboardInput>
  }

  export type WhiteboardShareCreateWithoutWhiteboardInput = {
    id?: string
    name: string
    SharedAt?: Date | string
    SharedBy: UserCreateNestedOneWithoutSharedWhiteboardInput
    SharedWith: UserCreateNestedOneWithoutReceivedWhiteboardInput
  }

  export type WhiteboardShareUncheckedCreateWithoutWhiteboardInput = {
    id?: string
    name: string
    SharerId: string
    ReceiverId: string
    SharedAt?: Date | string
  }

  export type WhiteboardShareCreateOrConnectWithoutWhiteboardInput = {
    where: WhiteboardShareWhereUniqueInput
    create: XOR<WhiteboardShareCreateWithoutWhiteboardInput, WhiteboardShareUncheckedCreateWithoutWhiteboardInput>
  }

  export type WhiteboardShareCreateManyWhiteboardInputEnvelope = {
    data: WhiteboardShareCreateManyWhiteboardInput | WhiteboardShareCreateManyWhiteboardInput[]
    skipDuplicates?: boolean
  }

  export type DrawingCreateWithoutWhiteboardInput = {
    id?: string
    DrawingData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawingUncheckedCreateWithoutWhiteboardInput = {
    id?: string
    DrawingData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawingCreateOrConnectWithoutWhiteboardInput = {
    where: DrawingWhereUniqueInput
    create: XOR<DrawingCreateWithoutWhiteboardInput, DrawingUncheckedCreateWithoutWhiteboardInput>
  }

  export type DrawingCreateManyWhiteboardInputEnvelope = {
    data: DrawingCreateManyWhiteboardInput | DrawingCreateManyWhiteboardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWhiteboardInput = {
    update: XOR<UserUpdateWithoutWhiteboardInput, UserUncheckedUpdateWithoutWhiteboardInput>
    create: XOR<UserCreateWithoutWhiteboardInput, UserUncheckedCreateWithoutWhiteboardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWhiteboardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWhiteboardInput, UserUncheckedUpdateWithoutWhiteboardInput>
  }

  export type UserUpdateWithoutWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    SharedWhiteboard?: WhiteboardShareUpdateManyWithoutSharedByNestedInput
    ReceivedWhiteboard?: WhiteboardShareUpdateManyWithoutSharedWithNestedInput
  }

  export type UserUncheckedUpdateWithoutWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    SharedWhiteboard?: WhiteboardShareUncheckedUpdateManyWithoutSharedByNestedInput
    ReceivedWhiteboard?: WhiteboardShareUncheckedUpdateManyWithoutSharedWithNestedInput
  }

  export type WhiteboardShareUpsertWithWhereUniqueWithoutWhiteboardInput = {
    where: WhiteboardShareWhereUniqueInput
    update: XOR<WhiteboardShareUpdateWithoutWhiteboardInput, WhiteboardShareUncheckedUpdateWithoutWhiteboardInput>
    create: XOR<WhiteboardShareCreateWithoutWhiteboardInput, WhiteboardShareUncheckedCreateWithoutWhiteboardInput>
  }

  export type WhiteboardShareUpdateWithWhereUniqueWithoutWhiteboardInput = {
    where: WhiteboardShareWhereUniqueInput
    data: XOR<WhiteboardShareUpdateWithoutWhiteboardInput, WhiteboardShareUncheckedUpdateWithoutWhiteboardInput>
  }

  export type WhiteboardShareUpdateManyWithWhereWithoutWhiteboardInput = {
    where: WhiteboardShareScalarWhereInput
    data: XOR<WhiteboardShareUpdateManyMutationInput, WhiteboardShareUncheckedUpdateManyWithoutWhiteboardInput>
  }

  export type DrawingUpsertWithWhereUniqueWithoutWhiteboardInput = {
    where: DrawingWhereUniqueInput
    update: XOR<DrawingUpdateWithoutWhiteboardInput, DrawingUncheckedUpdateWithoutWhiteboardInput>
    create: XOR<DrawingCreateWithoutWhiteboardInput, DrawingUncheckedCreateWithoutWhiteboardInput>
  }

  export type DrawingUpdateWithWhereUniqueWithoutWhiteboardInput = {
    where: DrawingWhereUniqueInput
    data: XOR<DrawingUpdateWithoutWhiteboardInput, DrawingUncheckedUpdateWithoutWhiteboardInput>
  }

  export type DrawingUpdateManyWithWhereWithoutWhiteboardInput = {
    where: DrawingScalarWhereInput
    data: XOR<DrawingUpdateManyMutationInput, DrawingUncheckedUpdateManyWithoutWhiteboardInput>
  }

  export type DrawingScalarWhereInput = {
    AND?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
    OR?: DrawingScalarWhereInput[]
    NOT?: DrawingScalarWhereInput | DrawingScalarWhereInput[]
    id?: StringFilter<"Drawing"> | string
    DrawingData?: JsonFilter<"Drawing">
    WhiteboardId?: StringFilter<"Drawing"> | string
    createdAt?: DateTimeFilter<"Drawing"> | Date | string
    updatedAt?: DateTimeFilter<"Drawing"> | Date | string
  }

  export type WhiteboardCreateWithoutSharesInput = {
    id?: string
    name: string
    Owner: UserCreateNestedOneWithoutWhiteboardInput
    Drawings?: DrawingCreateNestedManyWithoutWhiteboardInput
  }

  export type WhiteboardUncheckedCreateWithoutSharesInput = {
    id?: string
    name: string
    OwnerID: string
    Drawings?: DrawingUncheckedCreateNestedManyWithoutWhiteboardInput
  }

  export type WhiteboardCreateOrConnectWithoutSharesInput = {
    where: WhiteboardWhereUniqueInput
    create: XOR<WhiteboardCreateWithoutSharesInput, WhiteboardUncheckedCreateWithoutSharesInput>
  }

  export type UserCreateWithoutSharedWhiteboardInput = {
    id?: string
    name: string
    password: string
    Whiteboard?: WhiteboardCreateNestedManyWithoutOwnerInput
    ReceivedWhiteboard?: WhiteboardShareCreateNestedManyWithoutSharedWithInput
  }

  export type UserUncheckedCreateWithoutSharedWhiteboardInput = {
    id?: string
    name: string
    password: string
    Whiteboard?: WhiteboardUncheckedCreateNestedManyWithoutOwnerInput
    ReceivedWhiteboard?: WhiteboardShareUncheckedCreateNestedManyWithoutSharedWithInput
  }

  export type UserCreateOrConnectWithoutSharedWhiteboardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedWhiteboardInput, UserUncheckedCreateWithoutSharedWhiteboardInput>
  }

  export type UserCreateWithoutReceivedWhiteboardInput = {
    id?: string
    name: string
    password: string
    Whiteboard?: WhiteboardCreateNestedManyWithoutOwnerInput
    SharedWhiteboard?: WhiteboardShareCreateNestedManyWithoutSharedByInput
  }

  export type UserUncheckedCreateWithoutReceivedWhiteboardInput = {
    id?: string
    name: string
    password: string
    Whiteboard?: WhiteboardUncheckedCreateNestedManyWithoutOwnerInput
    SharedWhiteboard?: WhiteboardShareUncheckedCreateNestedManyWithoutSharedByInput
  }

  export type UserCreateOrConnectWithoutReceivedWhiteboardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedWhiteboardInput, UserUncheckedCreateWithoutReceivedWhiteboardInput>
  }

  export type WhiteboardUpsertWithoutSharesInput = {
    update: XOR<WhiteboardUpdateWithoutSharesInput, WhiteboardUncheckedUpdateWithoutSharesInput>
    create: XOR<WhiteboardCreateWithoutSharesInput, WhiteboardUncheckedCreateWithoutSharesInput>
    where?: WhiteboardWhereInput
  }

  export type WhiteboardUpdateToOneWithWhereWithoutSharesInput = {
    where?: WhiteboardWhereInput
    data: XOR<WhiteboardUpdateWithoutSharesInput, WhiteboardUncheckedUpdateWithoutSharesInput>
  }

  export type WhiteboardUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Owner?: UserUpdateOneRequiredWithoutWhiteboardNestedInput
    Drawings?: DrawingUpdateManyWithoutWhiteboardNestedInput
  }

  export type WhiteboardUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    OwnerID?: StringFieldUpdateOperationsInput | string
    Drawings?: DrawingUncheckedUpdateManyWithoutWhiteboardNestedInput
  }

  export type UserUpsertWithoutSharedWhiteboardInput = {
    update: XOR<UserUpdateWithoutSharedWhiteboardInput, UserUncheckedUpdateWithoutSharedWhiteboardInput>
    create: XOR<UserCreateWithoutSharedWhiteboardInput, UserUncheckedCreateWithoutSharedWhiteboardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedWhiteboardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedWhiteboardInput, UserUncheckedUpdateWithoutSharedWhiteboardInput>
  }

  export type UserUpdateWithoutSharedWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Whiteboard?: WhiteboardUpdateManyWithoutOwnerNestedInput
    ReceivedWhiteboard?: WhiteboardShareUpdateManyWithoutSharedWithNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Whiteboard?: WhiteboardUncheckedUpdateManyWithoutOwnerNestedInput
    ReceivedWhiteboard?: WhiteboardShareUncheckedUpdateManyWithoutSharedWithNestedInput
  }

  export type UserUpsertWithoutReceivedWhiteboardInput = {
    update: XOR<UserUpdateWithoutReceivedWhiteboardInput, UserUncheckedUpdateWithoutReceivedWhiteboardInput>
    create: XOR<UserCreateWithoutReceivedWhiteboardInput, UserUncheckedCreateWithoutReceivedWhiteboardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedWhiteboardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedWhiteboardInput, UserUncheckedUpdateWithoutReceivedWhiteboardInput>
  }

  export type UserUpdateWithoutReceivedWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Whiteboard?: WhiteboardUpdateManyWithoutOwnerNestedInput
    SharedWhiteboard?: WhiteboardShareUpdateManyWithoutSharedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Whiteboard?: WhiteboardUncheckedUpdateManyWithoutOwnerNestedInput
    SharedWhiteboard?: WhiteboardShareUncheckedUpdateManyWithoutSharedByNestedInput
  }

  export type WhiteboardCreateWithoutDrawingsInput = {
    id?: string
    name: string
    Owner: UserCreateNestedOneWithoutWhiteboardInput
    Shares?: WhiteboardShareCreateNestedManyWithoutWhiteboardInput
  }

  export type WhiteboardUncheckedCreateWithoutDrawingsInput = {
    id?: string
    name: string
    OwnerID: string
    Shares?: WhiteboardShareUncheckedCreateNestedManyWithoutWhiteboardInput
  }

  export type WhiteboardCreateOrConnectWithoutDrawingsInput = {
    where: WhiteboardWhereUniqueInput
    create: XOR<WhiteboardCreateWithoutDrawingsInput, WhiteboardUncheckedCreateWithoutDrawingsInput>
  }

  export type WhiteboardUpsertWithoutDrawingsInput = {
    update: XOR<WhiteboardUpdateWithoutDrawingsInput, WhiteboardUncheckedUpdateWithoutDrawingsInput>
    create: XOR<WhiteboardCreateWithoutDrawingsInput, WhiteboardUncheckedCreateWithoutDrawingsInput>
    where?: WhiteboardWhereInput
  }

  export type WhiteboardUpdateToOneWithWhereWithoutDrawingsInput = {
    where?: WhiteboardWhereInput
    data: XOR<WhiteboardUpdateWithoutDrawingsInput, WhiteboardUncheckedUpdateWithoutDrawingsInput>
  }

  export type WhiteboardUpdateWithoutDrawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Owner?: UserUpdateOneRequiredWithoutWhiteboardNestedInput
    Shares?: WhiteboardShareUpdateManyWithoutWhiteboardNestedInput
  }

  export type WhiteboardUncheckedUpdateWithoutDrawingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    OwnerID?: StringFieldUpdateOperationsInput | string
    Shares?: WhiteboardShareUncheckedUpdateManyWithoutWhiteboardNestedInput
  }

  export type WhiteboardCreateManyOwnerInput = {
    id?: string
    name: string
  }

  export type WhiteboardShareCreateManySharedByInput = {
    id?: string
    name: string
    WhiteboardId: string
    ReceiverId: string
    SharedAt?: Date | string
  }

  export type WhiteboardShareCreateManySharedWithInput = {
    id?: string
    name: string
    WhiteboardId: string
    SharerId: string
    SharedAt?: Date | string
  }

  export type WhiteboardUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Shares?: WhiteboardShareUpdateManyWithoutWhiteboardNestedInput
    Drawings?: DrawingUpdateManyWithoutWhiteboardNestedInput
  }

  export type WhiteboardUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Shares?: WhiteboardShareUncheckedUpdateManyWithoutWhiteboardNestedInput
    Drawings?: DrawingUncheckedUpdateManyWithoutWhiteboardNestedInput
  }

  export type WhiteboardUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WhiteboardShareUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whiteboard?: WhiteboardUpdateOneRequiredWithoutSharesNestedInput
    SharedWith?: UserUpdateOneRequiredWithoutReceivedWhiteboardNestedInput
  }

  export type WhiteboardShareUncheckedUpdateWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    WhiteboardId?: StringFieldUpdateOperationsInput | string
    ReceiverId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardShareUncheckedUpdateManyWithoutSharedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    WhiteboardId?: StringFieldUpdateOperationsInput | string
    ReceiverId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardShareUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whiteboard?: WhiteboardUpdateOneRequiredWithoutSharesNestedInput
    SharedBy?: UserUpdateOneRequiredWithoutSharedWhiteboardNestedInput
  }

  export type WhiteboardShareUncheckedUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    WhiteboardId?: StringFieldUpdateOperationsInput | string
    SharerId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardShareUncheckedUpdateManyWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    WhiteboardId?: StringFieldUpdateOperationsInput | string
    SharerId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardShareCreateManyWhiteboardInput = {
    id?: string
    name: string
    SharerId: string
    ReceiverId: string
    SharedAt?: Date | string
  }

  export type DrawingCreateManyWhiteboardInput = {
    id?: string
    DrawingData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhiteboardShareUpdateWithoutWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SharedBy?: UserUpdateOneRequiredWithoutSharedWhiteboardNestedInput
    SharedWith?: UserUpdateOneRequiredWithoutReceivedWhiteboardNestedInput
  }

  export type WhiteboardShareUncheckedUpdateWithoutWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SharerId?: StringFieldUpdateOperationsInput | string
    ReceiverId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardShareUncheckedUpdateManyWithoutWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    SharerId?: StringFieldUpdateOperationsInput | string
    ReceiverId?: StringFieldUpdateOperationsInput | string
    SharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingUpdateWithoutWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingUncheckedUpdateWithoutWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawingUncheckedUpdateManyWithoutWhiteboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    DrawingData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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