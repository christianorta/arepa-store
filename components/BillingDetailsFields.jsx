import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="John Wick"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="john@email.com"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="1 Market Street "
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="San Francisco"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="California"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="94105"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
