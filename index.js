// Invert Binary Tree

const tree = {
  element: "root",
  children: [
    {
      element: "child1",
      children: [
        {
          element: "child1.1",
          children: [
            {
              element: "child1.1.1"
            },
            {
              element: "child1.1.2"
            }
          ]
        },
        {
          element: "child1.2",
          children: [
            {
              element: "child1.2.1"
            },
            {
              element: "child1.2.2"
            }
          ]
        }
      ]
    },
    {
      element: "child2",
      children: [
        {
          element: "child2.1"
        },
        {
          element: "child2.2"
        }
      ]
    }
  ]
}

console.log(JSON.stringify(tree, null, 2));

invertNode(tree);

console.log(JSON.stringify(tree, null, 2));

function invertNode(node) {
  if (!node.hasOwnProperty("children")) return;

  const tmp = node.children[0];
  node.children[0] = node.children[1];
  node.children[1] = tmp;

  invertNode(node.children[0]);
  invertNode(node.children[1]);
}
