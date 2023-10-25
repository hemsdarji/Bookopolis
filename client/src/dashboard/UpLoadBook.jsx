import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const UpLoadBook = () => {
  const bookCategory = [
    "Adventure-stories",
    "Non-fiction",
    "fication",
    "Mistery",
    "Programming0",
    "Science Fiction",
    "Horror",
    "Bibliography",
    "autographic",
  ];

  const [selectBookCategory, setSelectBookCategory] = useState(bookCategory[0]);

  // dropdown
  const handleChangeValue = (event) => {
    setSelectBookCategory(event.target.value);
  };

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookObject = [
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
    ];
    console.log(bookObject);

    // send data to database
  fetch("http://localhost:5000/upload-book", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(bookObject),
})
  .then((res) => res.json())
  .then((data) => {
    alert("Book successfully uploaded");
  })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex flex-col  lg:w-[1180px] gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2  ">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="BookTitle" />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Book Name"
              required
              type="text"
            />
          </div>
          <div className="lg:w-1/2  ">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author-Name" />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
            />
          </div>
        </div>

        {/* second row */}

        <div className="flex gap-8">
          <div className="lg:w-1/2 ">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Book Image URL"
              required
              type="text"
            />
          </div>

          <div className="lg:w-1/2 ">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book category" />
            </div>
            <select
              id="category"
              name="category"
              className="w-full rounded"
              value={selectBookCategory}
              onChange={handleChangeValue}
            >
              {bookCategory.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* bookDescription */}

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="write Your Book Description ..."
            required
            type="text"
            rows={10}
          />
        </div>

        {/* pdf url */}
        <div className="w-full ">
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
          </div>
          <TextInput
            id="bookPdfUrl"
            placeholder="Book Pdf Url"
            required
            type="text"
          />
        </div>

        <Button type="submit">Upload Book</Button>
      </form>
    </div>
  );
};

export default UpLoadBook;
