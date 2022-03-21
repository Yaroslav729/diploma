export const handlersClickChangeStyle = (nodes, deps) => {
    if (Array.isArray(nodes)) {
        nodes.map(node =>
            node.addEventListener("click", () => {
                deps.map(
                    _ =>
                        (_.style.display = _.style.display === "block" ? "none" : "block")
                );
            })
        );
    } else {
        nodes.addEventListener("click", () => {
            deps.map(
                _ => (_.style.display = _.style.display === "block" ? "none" : "block")
            );
        });
    }
}