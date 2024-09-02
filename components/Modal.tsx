"use client";
import React, { FormEventHandler, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addTodo } from "@/api/api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

interface ModalPros {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalPros> = ({ openModal, setOpenModal, children }) => {
  const [newTask, setNewTask] = useState("");
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTask,
    });

    setOpenModal(false);
    router.refresh();
  };
  return (
    <Dialog open={openModal} modal={true} onOpenChange={setOpenModal}>
      {/* <DialogTrigger ></DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{children}</DialogTitle>
          <DialogDescription>
            <form className="flex gap-5" onSubmit={handleSubmit}>
              <Input type="text" onChange={(e) => setNewTask(e.target.value)} />
              <Button type="submit" className="bg-blue-600" size="lg">
                Button
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
