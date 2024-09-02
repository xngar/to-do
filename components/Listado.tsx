import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITask } from "@/types/task";

import { FilePenLine, Trash } from "lucide-react";
import Tarea from "./Tarea";

interface TodoListPros {
  tasks: ITask[];
}

const Listado: React.FC<TodoListPros> = ({ tasks }) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Acción</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tasks.map((mapeo, key) => (
            <Tarea mapeo={mapeo} key={key} />
            // esto deberia ser un componente
            // <TableRow key={mapeo.id}>
            //   <TableCell className="">{mapeo.text}</TableCell>
            //   <TableCell>
            //     <div className="flex gap-8">
            //       <FilePenLine className="cursor-pointer " />
            //       <Trash className="cursor-pointer" />
            //     </div>
            //   </TableCell>
            // </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Listado;
