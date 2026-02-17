import * as React from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {type  ParamRow, validateRow } from "../domain";
import { useAppStore } from "../store";

export function ParamsTable() {
  const rows = useAppStore((s) => s.rows);
  const selectedId = useAppStore((s) => s.selectedId);
  const select = useAppStore((s) => s.select);
  const removeRow = useAppStore((s) => s.removeRow);
  const updateName = useAppStore((s) => s.updateName);
  const updateNumberField = useAppStore((s) => s.updateNumberField);
  const query = useAppStore((s) => s.query);

  const columns = React.useMemo<ColumnDef<ParamRow>[]>(
    () => [
      {
        header: "Parameter",
        accessorKey: "name",
        cell: ({ row }) => {
          const r = row.original;
          const errs = validateRow(r);
          return (
            <div>
              <input
                value={r.name}
                onChange={(e) => updateName(r.id, e.target.value)}
                onFocus={() => select(r.id)}
              />
              {errs.name && <div className="err">{errs.name}</div>}
            </div>
          );
        },
      },
      {
        header: "Baseline",
        accessorKey: "baseline",
        cell: ({ row }) => {
          const r = row.original;
          const errs = validateRow(r);
          return (
            <div>
              <input
                defaultValue={String(r.baseline)}
                onBlur={(e) =>
                  updateNumberField(r.id, "baseline", e.target.value)
                }
                onFocus={() => select(r.id)}
              />
              {errs.baseline && <div className="err">{errs.baseline}</div>}
            </div>
          );
        },
      },
      {
        header: "Scenario A",
        accessorKey: "scenarioA",
        cell: ({ row }) => {
          const r = row.original;
          const errs = validateRow(r);
          const changed = r.baseline !== r.scenarioA;
          return (
            <div>
              <input
                defaultValue={String(r.scenarioA)}
                onBlur={(e) =>
                  updateNumberField(r.id, "scenarioA", e.target.value)
                }
                onFocus={() => select(r.id)}
              />
              {changed && <span className="badge">changed</span>}
              {errs.scenarioA && <div className="err">{errs.scenarioA}</div>}
            </div>
          );
        },
      },
      {
        header: "",
        id: "actions",
        cell: ({ row }) => (
          <button onClick={() => removeRow(row.original.id)}>Remove</button>
        ),
      },
    ],
    [removeRow, select, updateName, updateNumberField],
  );

  const table = useReactTable({
    data: rows,
    columns,
    state: { globalFilter: query },
    globalFilterFn: (row, _colId, filterValue) => {
      const q = String(filterValue ?? "")
        .trim()
        .toLowerCase();
      if (!q) return true;
      return row.original.name.toLowerCase().includes(q);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((h) => (
                <th key={h.id}>
                  {h.isPlaceholder
                    ? null
                    : flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((r) => (
            <tr
              key={r.id}
              className={r.original.id === selectedId ? "active" : ""}
              onClick={() => select(r.original.id)}
            >
              {r.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="small">
        Tip: click a row or a graph node to sync selection.
      </div>
    </>
  );
}
