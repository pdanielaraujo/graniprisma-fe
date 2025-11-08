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

import { Button } from "@atoms/Button";
import { Select } from "@atoms/Select";
import { useIsMobile } from "@hooks/useIsMobile";
import { useOpenDialog } from "@hooks/useOpenDialog";
import { useOpenModal } from "@hooks/useOpenModal";
import { Dialog } from "@molecules/Dialog";
import { FormField } from "@molecules/FormField";
import { SearchInput } from "@molecules/SearchInput";
import { DataTable } from "@organisms/DataTable";
import { Grid } from "@organisms/Grid";
import { GridItem } from "@organisms/GridItem";
import { ManagementActionsSection } from "@organisms/ManagementActionsSection";
import { Modal } from "@organisms/Modal";
import { ManagementTemplate } from "@templates/Management";
import type { TPerson } from "features/customer/types";
import { PERSON_COLUMNS } from "features/customer/utils/columns";
import { useMemo, useState } from "react";

function App() {
  const [current, setCurrent] = useState(1);
  const columns = useMemo(() => PERSON_COLUMNS, []);
  const isMobile = useIsMobile();
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

  // console.log(
  //   "aaaa",
  //   window.matchMedia("(prefers-color-scheme: dark)").matches,
  // );

  // const x = (ref: RefObject<HTMLElement | null>) => {
  //   if (!ref.current) {
  //     return;
  //   }

  //   ref.current.classList.toggle("open");
  // };
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Search for:", e.currentTarget.value);
    }
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
            searchSection={
              <SearchInput handleSearchKeyDown={handleSearchKeyDown} />
            }
            createButton={
              <>
                <Button onClick={openModal}>Create</Button>
              </>
            }
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
      {/* <div> */}
      {/* <div style={{ padding: "var(--space-8)" }}> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <DataTable
        columns={columns}
        currentPage={current}
        data={defaultData}
        onChangeCurrent={handleChangeCurrentPage}
        totalPages={100}
      /> */}
      {/* <Table data={defaultData} columns={columns} />
      <Pagination
        current={current}
        total={12}
        onChangeCurrent={handleChangeCurrentPage}
      /> */}
      {/* <Input variant="checkbox_input" type="checkbox" />
      <Input variant="file_input" type="file" />
      <Input variant="radio_input" type="radio" />
      <Input variant="range_input" type="range" min={0} max={100} />

      <Typography variant="heading">Heading 1</Typography>
      <Typography>Body 1</Typography>
      <Input variant="default_input" type="date" />
      <Input variant="default_input" type="datetime-local" />
      <Input variant="default_input" type="email" />
      <Input variant="default_input" type="number" />
      <Input variant="default_input" type="password" />
      <Input variant="default_input" type="search" />
      <Input variant="submit_input" type="submit" />
      <Input variant="default_input" type="tel" />
      <Input variant="default_input" label="Nome" name="test" type="text" />
      */}
      {/* <Input variant="default_input" type="number" /> */}
      {/* <Sidebar />
      <Header />
      <DropdownMenu
        items={[
          { action: () => console.log("Perfil"), label: "Perfil" },
          { action: () => console.log("Definições"), label: "Definições" },
          {
            action: () => console.log("Terminar sessão"),
            label: "Terminar sessão",
          },
        ]}
        opener={<Avatar />}
      /> */}
      <Modal
        content={
          <Grid>
            <GridItem>
              <FormField label="Nome" name="nome" />
            </GridItem>
            <GridItem>
              <FormField label="Email" name="Email" />
            </GridItem>
            <GridItem colSpan={!isMobile ? 2 : 1}>
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
      {/* <FormField label="Nome" name="nome" />
      <Spinner />*/}
      {/* <Button onClick={openModal}>Modal</Button>
      <Button onClick={openDialog}>Dialog</Button> */}
      {/* <Button variant={BUTTON_VARIANTS.secondary}>Secondary</Button>  */}
      {/* <Table /> */}
      {/* <EmptyState
        action={() => console.log("")}
        description="Tente novamente mais tarde"
        title="Sem resultados encontrados"
      /> */}
      {/* <Button disabled>Primary Disabled</Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>  */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}
    </>
  );
}

export default App;
