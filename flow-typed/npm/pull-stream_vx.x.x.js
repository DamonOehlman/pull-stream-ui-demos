// flow-typed signature: 3d9a8d3044ce8b3720099fad515950a4
// flow-typed version: <<STUB>>/pull-stream_v^3.6.1/flow_v0.58.0

declare module 'pull-stream' {
  declare type PullEnd = (boolean|Error);
  declare type PullFunction<T> = (?PullEnd, T) => void;

  declare type PullSource<T> = () => PullFunction<T>;
  declare type PullSourceWithConfig<Config,T> = (Config) => PullFunction<T>;
  declare type PullThrough<InT, OutT> = (read: PullFunction<InT>) => PullFunction<OutT>;
  declare type PullSink<InT> = (read: PullFunction<InT>) => void;
  declare type PullTask = PullSource<*> | PullThrough<*,*> | PullSink<*>;
  
  declare class $npm$pullstream$PullStream {
    pull(...*): PullFunction<*>;

    // sources
    values<T>(Array<T>): PullFunction<T>;

    // throughs
    filter<T>(T): boolean;
    map<InT,OutT>((InT) => OutT): PullThrough<InT,OutT>;
    
    // sinks
    log(): PullFunction<void>;
    drain<T>(op: ?(T) => void, onEnd: ?() => void): PullFunction<void>;
  }
  
  declare var exports: $npm$pullstream$PullStream;
}
