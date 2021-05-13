"use strict";
class SetTest {
    has(value) {
        return true;
    }
    add(value) {
        return this;
    }
}
class MutableSet extends SetTest {
    delete(value) {
        return true;
    }
}
//# sourceMappingURL=index.js.map