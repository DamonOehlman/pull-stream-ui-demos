// @flow

export type PullEnd = (boolean|Error);
export type PullCallback<T> = (PullEnd, ?T) => void;
export type PullFn<T> = (PullEnd, PullCallback<T>) => void;

export type PullFilterFn<T> = (T) => boolean;
// export type PullFilter = (PullFilterFn) => void;

export type PullSource<InT,OutT> = (InT) => PullFn<OutT>;
export type PullThrough<InT, OutT> = (read: PullFn<OutT>) => PullFn<OutT>;
export type PullSink<T> = PullFn<T>;
export type PullThroughOrSink<InT,OutT> = (PullThrough<InT,OutT>|PullSink<OutT>);

export type PullStream<InT,OutT> = (PullSource<InT,*>,...PullThroughOrSink<*,OutT>) => (PullSource<*>|PullThrough<*,*>|PullSink<*>);
