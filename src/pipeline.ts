type Predicate<T, R> = (param: T) => R;
type PipelineEnd<T> = Pick<IPipeline<T>, 'end'>;

interface IPipeline<T> {
    pipe<R>(predicate: Predicate<T, R>): IPipeline<R>
    end(): T;
}

export class Pipeline<T, TPrev = any> implements IPipeline<T> {
    #previous: PipelineEnd<TPrev>
    #predicate: Predicate<TPrev, T>;

    #cache: undefined | T = void(0);
    #shouldUseCache = false;

    private constructor(pipeline: PipelineEnd<TPrev>, predicate: Predicate<TPrev, T>) {
        this.#previous = pipeline;
        this.#predicate = predicate;
    }

    pipe<R>(predicat: Predicate<T, R>): Pipeline<R, T> {
        return new Pipeline(this, predicat);
    }

    end(): T {
        if (this.#shouldUseCache) {
            return this.#cache!;
        }

        this.#shouldUseCache = true;
        this.#cache = this.#predicate(this.#previous.end());

        return this.#cache;
    }

    static from<V>(value: V): Pipeline<V, V> {
        return new Pipeline<V, V>({
            end() {
                return value;
            }
        }, () => value);
    }
}
