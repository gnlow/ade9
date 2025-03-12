abstract class Model<T> {
    abstract init(): T[]
    abstract select(entities: T[]): T[]
    abstract crossover(mother: T, father: T): T
    abstract mutate(entity: T): T
    abstract end(entities: T[], i: number): boolean

    choose(entities: T[]): T {
        return entities[Math.floor(Math.random() * entities.length)]
    }

    optimize() {
        let entities = this.init()
        
        for (let i=0; true; i++) {
            entities = this.select(entities)
            for (let i=0; i<10; i++) {
                const son = this.crossover(
                    this.choose(entities),
                    this.choose(entities),
                )
                entities.push(son)
            }
            if (this.end(entities, i)) break
        }
        return entities
    }
}
