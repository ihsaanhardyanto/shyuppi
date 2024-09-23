"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SetupPage() {
  const onOpen  = useStoreModal((state) => state.onOpen);
  const isOpen  = useStoreModal((state) => state.isOpen);
   
  useEffect(() => {
    if (!isOpen){
      onOpen();
    }
  },[isOpen, onOpen]);

  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      Root Page
    </div>
  );
}

/*
const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      <Modal
        title="Modal Title"
        description="Modal Description"
        isOpen={true}
        onClose={() => {}}
      >
        Ceritanya
      </Modal>
    </div>
  );
};

export default SetupPage;
*/
