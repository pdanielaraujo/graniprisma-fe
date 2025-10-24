import { Button } from "@atoms/Button";
import { Input } from "@atoms/Input";
import { Select } from "@atoms/Select";
import { useOpenDialog } from "@hooks/useOpenDialog";
import { useOpenModal } from "@hooks/useOpenModal";
import { Dialog } from "@molecules/Dialog";
import { FormField } from "@molecules/FormField";
import { DataTable } from "@organisms/DataTable";
import { Grid } from "@organisms/Grid";
import { GridItem } from "@organisms/GridItem";
import { ManagementActionsSection } from "@organisms/ManagementActionsSection";
import { Modal } from "@organisms/Modal";
import { ManagementTemplate } from "@templates/Management";
import type { TPerson } from "features/customer/types";
import { PERSON_COLUMNS } from "features/customer/utils/columns";
import { useMemo, useState } from "react";

const defaultData: TPerson[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

export const Suppliers = () => {
  const [current, setCurrent] = useState(1);
  const columns = useMemo(() => PERSON_COLUMNS, []);

  const { dialogRef, closeDialog, openDialog } = useOpenDialog();
  const { modalRef, closeModal, openModal } = useOpenModal();

  const handleChangeCurrentPage = (page: number) => {
    setCurrent(page);
  };

  const handleCancel = () => {
    console.log("handleCancel");
  };

  const handleSubmit = () => {
    openDialog();
    console.log("handleSubmit");
  };

  const handleConfirm = () => {
    closeDialog();
    console.log("handleConfirm");
    closeModal();
  };

  return (
    <>
      <ManagementTemplate
        actions={
          <ManagementActionsSection
            filterSection={
              <>
                <Select options={[]} />
                <Select options={[]} />
              </>
            }
            searchSection={<Input variant="default_input" type="search" />}
            createButton={<Button onClick={openModal}>Create</Button>}
          />
        }
      >
        <DataTable
          columns={columns}
          currentPage={current}
          data={defaultData}
          onChangeCurrent={handleChangeCurrentPage}
          totalPages={100}
        />
      </ManagementTemplate>
      <Modal
        content={
          <Grid>
            <GridItem>
              <FormField label="Nome" name="nome" />
            </GridItem>
            <GridItem>
              <FormField label="Email" name="Email" />
            </GridItem>
            <GridItem colSpan={2}>
              <FormField label="Telefone" name="Telefone" />
            </GridItem>
            <GridItem>
              <FormField label="Telefone" name="Telefone" />
            </GridItem>
          </Grid>
        }
        onCancel={handleCancel}
        onConfirm={handleSubmit}
        ref={modalRef}
        title="Criar utilizador"
      />
      <Dialog
        description={`Tem a certeza que quer apagar -> (Paulo Araújo)?`}
        onConfirm={handleConfirm}
        ref={dialogRef}
        title="Apagar (Paulo Araújo)"
      />
    </>
  );
};
