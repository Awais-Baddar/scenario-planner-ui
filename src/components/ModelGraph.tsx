import "@xyflow/react/dist/style.css";
import { Background, Controls,type Node,type Edge, ReactFlow } from "@xyflow/react";
import { useMemo } from "react";
import { useAppStore } from "../store";

export function ModelGraph() {
  const rows = useAppStore((s) => s.rows);
  const selectedId = useAppStore((s) => s.selectedId);
  const select = useAppStore((s) => s.select);

  const nodes = useMemo<Node[]>(() => {
    return rows.map((r, i) => ({
      id: r.id,
      position: { x: (i % 2) * 240, y: Math.floor(i / 2) * 100 },
      data: { label: r.name },
      style: {
        padding: 10,
        borderRadius: 10,
        border: r.id === selectedId ? "2px solid black" : "1px solid #ccc",
        width: 200,
      },
    }));
  }, [rows, selectedId]);

  const edges = useMemo<Edge[]>(() => {
    const e: Edge[] = [];
    for (let i = 0; i < rows.length - 1; i++) {
      e.push({
        id: `e-${rows[i].id}-${rows[i + 1].id}`,
        source: rows[i].id,
        target: rows[i + 1].id,
      });
    }
    return e;
  }, [rows]);

  return (
    <div style={{ width: "100%", height: 520 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={(_, n) => select(n.id)}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
