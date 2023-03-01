import { render,fireEvent ,} from "@testing-library/react";
import AddressInput from "../components/Body/AddressInput";
import { AddressType } from "../types/OrganizationConfigType";


const defaultAddress: AddressType = {
  streetName: "123 Main St",
  streetNumber: 123,
  postalCode: 12345,
  city: "Anytown",
  country: "USA",
};

const handleBlur = jest.fn();
const onAddressChange = jest.fn();

test("renders AddressInput component without crashing", () => {
  render(<AddressInput address={defaultAddress} touched={{}} handleBlur={handleBlur} onAddressChange={onAddressChange}/>);
});


test("updates input fields correctly", () => {
   const { getByLabelText } = render(
    <AddressInput address={defaultAddress} touched={{}}  handleBlur={handleBlur} onAddressChange={onAddressChange}/>
  );

  fireEvent.change(getByLabelText("Street Name:"), {
    target: { value: "123 Main St" },
  });
  fireEvent.change(getByLabelText("Street Number:"), {
    target: { value: 123 },
  });
  fireEvent.change(getByLabelText("Postal Code:"), {
    target: { value: 12345 },
  });
  fireEvent.change(getByLabelText("City:"), {
    target: { value: "New York" },
  });
  fireEvent.change(getByLabelText("Country:"), {
    target: { value: "USA" },
  });

  expect(onAddressChange).toHaveBeenCalledWith({
    streetName: "123 Main St",
    streetNumber: 123,
    postalCode: 12345,
    city: "New York",
    country: "USA",
  });
});

test("updates touched state correctly on input blur", () => {
  const { getByLabelText } = render(
    <AddressInput address={defaultAddress} touched={{}} handleBlur={handleBlur} onAddressChange={onAddressChange} />
  );

  fireEvent.blur(getByLabelText("Street Name:"));
  fireEvent.blur(getByLabelText("Street Number:"));
  fireEvent.blur(getByLabelText("Postal Code:"));
  fireEvent.blur(getByLabelText("City:"));
  fireEvent.blur(getByLabelText("Country:"));

  expect(handleBlur).toHaveBeenCalledTimes(5);
});

 