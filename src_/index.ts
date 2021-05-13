class SetTest {
    has(value: number): boolean {
        return true
    }
    add(value: number): this {
        return this
    }
}

class MutableSet extends SetTest {
    delete(value: number): boolean {
        return true
    }
}