"use client";
import React, { useState } from "react";
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
import Modal from "./Modal";

const Tarea = ({ mapeo }: { mapeo: ITask }) => {
  const [stateEdit, setStateEdit] = useState();
  const [stateDelete, setStateDelete] = useState();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  return (
    <>
      <TableRow key={mapeo.id}>
        <TableCell className="">{mapeo.text}</TableCell>
        <TableCell>
          <div className="flex gap-8">
            <FilePenLine
              onClick={() => setOpenModalEdit(true)}
              className="cursor-pointer "
            />
            <Trash
              onClick={() => setOpenModalDelete(true)}
              className="cursor-pointer text-red-600"
            />
          </div>
        </TableCell>
      </TableRow>
      <Modal openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
        <h2>Editar</h2>
      </Modal>
      <Modal openModal={openModalDelete} setOpenModal={setOpenModalDelete}>
        <h2>Borrar</h2>
      </Modal>
    </>
  );
};

export default Tarea;
