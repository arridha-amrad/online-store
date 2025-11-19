"use client";

import { Modal, ModalBody, ModalContent, useDisclosure } from "@heroui/modal";

import { IdWithName } from "@/types";
import { Button } from "@heroui/button";
import ShippingForm from "./forms/shipping.form";

type Props = {
  provinces: IdWithName[];
};

export default function ModalShipping({ provinces }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Pick Courier
      </Button>
      <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="py-4">
          {(onClose) => (
            <ModalBody>
              <ShippingForm onClose={onClose} provinces={provinces} />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
