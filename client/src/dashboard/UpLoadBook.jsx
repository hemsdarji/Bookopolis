import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const UpLoadBook = () => {
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a book</h2>

      <form className="flex flex-col flex-wrap lg:w-[1180px] gap-4">
        <div className="lg:w-1129 mx-4 ">
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="bookTitle" />
          </div>
          <TextInput
            id="bookTitle"
            placeholder="Book Name"
            required
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default UpLoadBook;
