function partial(G, partialArguments) {
    return function (arguments) {
        return G.apply(this, partialArguments.concat(arguments));
    }
}