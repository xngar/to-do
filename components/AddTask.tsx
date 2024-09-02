"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Modal from "./Modal";

const AddTask = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="px-4">
      <Button
        onClick={() => setOpenModal(!openModal)}
        className="w-full bg-blue-700 hover:bg-blue-950 hover:scale-95 transition-all duration-200"
      >
        Agregar Tarea
        <Plus className="ml-3" />
      </Button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h1>probando un titulo</h1>
      </Modal>
    </div>
  );
};

export default AddTask;
