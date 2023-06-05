import { render, screen , fireEvent } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import userEvent from "@testing-library/user-event";


// to check the validation of form 
test("Clicking submit button without filling in form renders name validation error", async () => {
  //render the component 
  render(<ContactForm />);

  // aess the 
  const saveButton = screen.getByText("Save");
  await fireEvent(saveButton, new MouseEvent("click"));

  expect(
    await screen.findByText("You must enter your name")
  ).toBeInTheDocument();

  expect(
    await screen.findByText("You must enter a message")
  ).toBeInTheDocument();

});

// another way to check validation  by "userEvent"  library
test("Clicking submit button without filling form renders name validation error", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);
  const saveButton = screen.getByText("Save");
  // fireEvent(saveButton, new MouseEvent("click"));
  await user.click(saveButton);
  expect(
    await screen.findByText("You must enter your name")
  ).toBeInTheDocument();
});

test("focus and check the input entry by filling data", async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  screen.getByLabelText("Message").focus();
  await user.keyboard("test");



  await user.selectOptions(screen.getByLabelText("Department"),
  screen.getByText("Finance")
  //  [
  //   screen.getByText("Support"),
  //   screen.getByText("Finance"),
  // ]
  );


  screen.getByLabelText("Name").focus();
  await user.keyboard("test");
  // await user.keyboard("test{enter}");

  const saveButton = screen.getByText("Save");
  await user.click(saveButton);
  
  expect(await screen.findByText("Successfully saved")).toBeInTheDocument();

});

